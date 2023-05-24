class RecipesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :get_recipe, only: [:show, :update, :destroy, :like, :unlike]
  before_action :authorized_user, only: [:update, :destroy]

  def index
    if params[:user_id].present?
      @recipes = User.find(params[:user_id]).recipes.with_attached_image.includes(:user).order(:id)
    else
      @recipes = Recipe.with_attached_image.includes(:user).order(:id)
    end
    render json: @recipes.map{ |recipe| serialize_recipe(recipe) }
  end

  def show
    render json: serialize_recipe(@recipe)
  end

  def create
    @recipe = request.env[:current_user].recipes.build(recipe_params)

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

  def like
    if @recipe.user != current_user && !@recipe.liking_users.include?(current_user)
      like = current_user.likes.build(recipe: @recipe)
      if like.save
        render json: { success: 'Recipe liked successfully' }
      else
        render json: { error: like.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Unable to like the recipe' }, status: :unauthorized
    end
  end

  def unlike
    like = current_user.likes.find_by(recipe: @recipe)
    if like
      like.destroy
      render json: { success: 'Recipe unliked successfully' }
    else
      render json: { error: 'Unable to unlike the recipe' }, status: :unauthorized
    end
  end

  private

  def get_recipe
    @recipe = Recipe.with_attached_image.includes(:user).find(params[:id])
  end

  def authorized_user
    unless @recipe.user == current_user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  end
  
  def serialize_recipe(recipe)
    recipe_hash = recipe.as_json(include: { user: { only: [:first, :last] } })
    recipe_hash[:image_url] = url_for(recipe.image) if recipe.image.attached?
    recipe_hash[:like_count] = recipe.like_count
    recipe_hash[:liking_users_ids] = recipe.liking_users.map(&:id)
    recipe_hash[:liking_users_names] = recipe.liking_users.map { |user| "#{user.first} #{user.last}" }
    recipe_hash
  end

  def recipe_params
    params.require(:recipe).permit(:user_id, :id, :name, :description, :ingredients, :directions, :rating, :cooktime, :image)
  end
end