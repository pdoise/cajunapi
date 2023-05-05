class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all 
    render :json => @recipes.as_json(include: :user)
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe.as_json(include: :image, include: :user)
  end

  def create
    user = User.find_by_email('p.doise@gmail.com')
    @recipe = Recipe.create(recipe_params)
    render json: @recipe
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(recipe_params)
    render json: @recipe
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
  end

  def recipe_params
    params.require(:recipe).permit(:user_id, :name, :description, :ingredients, :directions, :imgsrc, :rating, :cooktime, :image)
  end

end 
