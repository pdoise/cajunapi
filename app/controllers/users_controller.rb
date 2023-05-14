class UsersController < ApplicationController 
  skip_before_action :authorize, only: [:create]
  before_action :get_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 503
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: 503
    end
  end

  def destroy
    @user.destroy
  end

  private

  def get_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:name, :username, :avatar, :location, :email, :password)
  end

  def serialize_recipe(recipe)
    recipe_hash = recipe.as_json(include: { user: { only: :username } })
    recipe_hash[:image_url] = url_for(recipe.image) if recipe.image.attached?
    recipe_hash
  end

end
