class RecipesController < ApplicationController

  def index
    @recipes = Recipe.includes(:user).with_attached_image.all
    recipes_data = @recipes.map do |recipe|
      recipe_hash = recipe.as_json(include: { user: { only: :username } })
      #if recipe.image.attached?
      #  recipe_hash.merge(image: { 
      #    content_type: recipe.image.content_type, 
      #    data: Base64.strict_encode64(recipe.image.download) 
      #  })
      #else
      #  recipe_hash
      #end
    end
    render json: recipes_data
  end
  
  def show
    @recipe = Recipe.includes(:user).with_attached_image.find(params[:id])
    recipe_data = @recipe.as_json(include: :user)
    #if @recipe.image.attached? && @recipe.image.download
    #  image_data = Base64.strict_encode64(@recipe.image.download)
    #  recipe_data.merge!(image: { content_type: @recipe.image.content_type, data: image_data })
    #end
    render json: recipe_data
  end


  def create
    @recipe = Recipe.new(recipe_params)
    if params[:recipe][:image].present?
      begin
        @recipe.image.attach(params[:recipe][:image])
      rescue => e
        render json: { error: e.message }, status: :unprocessable_entity
        return
      end
    end
    if @recipe.save
      render json: @recipe, status: :created
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  def update
    @recipe = Recipe.find(params[:id])
    if params[:recipe][:image].present?
      begin
        @recipe.image.attach(params[:recipe][:image])
      rescue => e
        render json: { error: e.message }, status: :unprocessable_entity
        return
      end
    end
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



