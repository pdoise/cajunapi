class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  skip_before_action :authorize, only: [:index, :show]

  def index
    @recipes = Recipe.with_attached_image.includes(:user).order(:id)
    render json: @recipes.map{ |recipe| serialize_recipe(recipe) }
  end

  def show
    render json: serialize_recipe(@recipe)
  end

  def create
    @recipe = Recipe.new(recipe_params)

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

  def set_recipe
    @recipe = Recipe.with_attached_image.includes(:user).find(params[:id])
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