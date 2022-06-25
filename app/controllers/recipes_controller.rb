class RecipesController < ApplicationController
  include ActiveStorage::SetCurrent

  before_action :get_recipe, except: [:index, :create]

  def index
    @recipes = Recipe.all 
    render :json => @recipes.as_json(include: :user)
  end
  
  def show
    render json: @recipe.attributes.merge!(:user => @recipe.user, :image => @recipe.image)
  end

  def create
    user = User.find_by_email('p.doise@gmail.com')
    @recipe = Recipe.create(recipe_params)
    render json: @recipe
  end

  def update
    @recipe.update(recipe_params)
    render json: @recipe.attributes.merge!(:user => @recipe.user, :image => @recipe.image)
  end

  def destroy
    @recipe.destroy
  end

  def image
    @recipe.image.attach(params[:image])
    if @recipe.image.attached?
      puts @recipe.image.inspect
      #render json: rails_blob_url(@recipe.image, only_path: true)
      #rails_blob_path(@recipe.image, disposition: "attachment")
      #render json: @recipe.attributes.merge!(:user => @recipe.user, :image => @recipe.image)

      puts "*"*1000
      puts url_for(@recipe.image)
      render json: url_for(@recipe.image)
    else
      head :not_found
    end
  end

  def recipe_params
    params.permit(:user_id, :name, :description, :ingredients, :directions, :rating, :cooktime, image: {})
  end

  def get_recipe
    @recipe = Recipe.find(params[:id])
  end

end 
