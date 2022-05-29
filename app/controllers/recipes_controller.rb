class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe
  end

  def create
    @recipe = Recipe.create(
      name:        params[:name]       , 
      description: params[:description], 
      ingredients: params[:ingredients], 
      directions:  params[:directions] ,
      imgsrc:      params[:imgsrc]     ,
      rating:      params[:rating]     ,
      cooktime:    params[:cooktime]
    )
    render json: @recipe
  end

  def update
    @recipe = Recipe.find(params[:id])
    @recipe.update(
      name:        params[:name]       , 
      description: params[:description], 
      ingredients: params[:ingredients], 
      directions:  params[:directions] ,
      imgsrc:      params[:imgsrc]     ,
      rating:      params[:rating]     ,
      cooktime:    params[:cooktime]
    )
    render json: @recipe
  end

  def destroy
    @recipe = Recipe.find(params[:id])
    @recipe.destroy
  end

end 
