class RecipesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :get_user, only: [:index, :create]
  before_action :get_recipe, only: [:show, :update, :destroy]
  before_action :authorize_user, only: [:update, :destroy]

  def index
    if params[:user_id].present?
      @recipes = @user.recipes.with_attached_image.includes(:user).order(:id)
    else
      @recipes = Recipe.with_attached_image.includes(:user).order(:id)
    end
    render json: @recipes.map{ |recipe| serialize_recipe(recipe) }
  end

  def show
    render json: serialize_recipe(@recipe)
  end

  def create
    @recipe = @user.recipes.build(recipe_params)

    if @recipe.save
      @recipe.image.attach(params[:recipe][:image])
      render json: serialize_recipe(@recipe), status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  def update
    if @recipe.update(recipe_params)
      @recipe.image.attach(params[:recipe][:image]) if params[:recipe][:image]
      render json: serialize_recipe(@recipe), status: :ok
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @recipe.destroy
  end

  private

  def get_user
    if params[:user_id]
      @user = User.find(params[:user_id])
    else
      @user = nil
    end
  end

  def get_recipe
    @recipe = Recipe.with_attached_image.includes(:user).find(params[:id])
  end

  def authorize_user
    unless @recipe.user == @user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end

  def serialize_recipe(recipe)
    recipe_hash = recipe.as_json(include: { user: { only: :username } })
    recipe_hash[:image_url] = url_for(recipe.image) if recipe.image.attached?
    recipe_hash
  end

  def recipe_params
    params.require(:recipe).permit(:user_id, :name, :description, :ingredients, :directions, :imgsrc, :rating, :cooktime, :image)
  end
end