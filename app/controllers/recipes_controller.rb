class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all 
    render :json => @recipes.as_json(include: :user)
  end
  
  def show
    @recipe = Recipe.find(params[:id])
    if @recipe.image.download
      data = @recipe.image.download
      image_data = Base64.strict_encode64(data)
      render json: { recipe: @recipe, image: { content_type: @recipe.image.content_type, data: image_data } }
    else
      render json: { recipe: @recipe, image: nil }
    end
  end


  def create
    @recipe = Recipe.new(recipe_params)
    @recipe.image.attach(params[:recipe][:image])
    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
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
