class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all 
    render :json => @recipes.as_json(include: :user)
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    render json: @recipe.as_json(include: :user)
  end

  def create
    user = User.find_by_email('p.doise@gmail.com')
    @recipe = Recipe.create(
      user_id:     user.id             , 
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
