class UsersController < ApplicationController 
  skip_before_action :authorize, only: [:index, :show]
  before_action :get_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users.map{ |user| serialize_user(user) }
  end

  def show
    render json: serialize_user(@user)
  end

  def create
    @user = User.create(user_params)
    if @user.save!
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private

  def get_user
    @user = User.find(params[:id])
  end

  def serialize_user(user)
    user_hash = user.as_json()
    user_hash[:image_url] = url_for(user.image) if user.image.attached?
    user_hash
  end

  def user_params
    params.require(:user).permit(:first, :last, :avatar, :location, :email, :bio, :password, :password_confirmation, :image)
  end

end
