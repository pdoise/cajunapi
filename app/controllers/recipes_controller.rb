class RecipesController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index, :show]
  before_action :set_recipe,    only: [:show, :edit, :update, :destroy, :like, :unlike]
  before_action :set_user,      only: [:index, :new, :create]
  before_action :require_owner!, only: [:edit, :update, :destroy]

  def index
    if @user
      @recipes = @user.recipes.with_attached_image.order(:id)
      render :cookbook
    else
      @recipes = Recipe.with_attached_image.includes(:user, :likes).order(created_at: :desc)
      @recipes = @recipes.where("name ILIKE ?", "%#{params[:search]}%") if params[:search].present?
    end
  end

  def show
    @comments   = @recipe.comments.includes(:user).order(:created_at)
    @comment    = Comment.new
    @user_liked = current_user&.likes&.exists?(recipe: @recipe)
  end

  def new
    @recipe = @user.recipes.build
  end

  def create
    @recipe = @user.recipes.build(recipe_params)
    if @recipe.save
      @recipe.image.attach(params[:recipe][:image]) if params.dig(:recipe, :image).present?
      redirect_to user_recipe_path(@user, @recipe), notice: 'Recipe created!'
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    @user = @recipe.user
  end

  def update
    if @recipe.update(recipe_params)
      @recipe.image.attach(params[:recipe][:image]) if params.dig(:recipe, :image).present?
      redirect_to user_recipe_path(@recipe.user, @recipe), notice: 'Recipe updated!'
    else
      @user = @recipe.user
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    user = @recipe.user
    @recipe.destroy
    redirect_to user_recipes_path(user), notice: 'Recipe deleted.'
  end

  def like
    unless @recipe.user == current_user || @recipe.liking_users.include?(current_user)
      current_user.likes.create(recipe: @recipe)
    end
    redirect_to user_recipe_path(@recipe.user, @recipe)
  end

  def unlike
    current_user.likes.find_by(recipe: @recipe)&.destroy
    redirect_to user_recipe_path(@recipe.user, @recipe)
  end

  private

  def set_recipe
    @recipe = Recipe.with_attached_image.includes(:user, :likes).find(params[:id])
  end

  def set_user
    @user = User.find(params[:user_id]) if params[:user_id].present?
  end

  def require_owner!
    redirect_to root_path, alert: 'Not authorized.' unless @recipe.user == current_user
  end

  def recipe_params
    params.require(:recipe).permit(:name, :description, :ingredients, :directions, :cooktime, :image)
  end
end
