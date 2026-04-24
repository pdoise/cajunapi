class UsersController < ApplicationController
  skip_before_action :authenticate_user!, only: [:show]
  before_action :set_user
  before_action :require_owner!, only: [:edit, :update]

  def show
    redirect_to user_recipes_path(@user)
  end

  def edit
  end

  def update
    if @user.update(user_params)
      @user.image.attach(params[:user][:image]) if params.dig(:user, :image).present?
      redirect_to user_recipes_path(@user), notice: 'Profile updated!'
    else
      flash.now[:alert] = @user.errors.full_messages.join(', ')
      render :edit, status: :unprocessable_entity
    end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def require_owner!
    redirect_to root_path, alert: 'Not authorized.' unless @user == current_user
  end

  def user_params
    params.require(:user).permit(:first, :last, :location, :bio, :image)
  end
end
