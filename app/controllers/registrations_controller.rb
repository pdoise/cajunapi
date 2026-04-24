class RegistrationsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    redirect_to user_recipes_path(current_user) if logged_in?
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    @user.email = @user.email.to_s.downcase
    if @user.save
      session[:user_id] = @user.id
      redirect_to user_recipes_path(@user), notice: 'Welcome to Cajun Cookbook!'
    else
      flash.now[:alert] = @user.errors.full_messages.join(', ')
      render :new, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:first, :last, :email, :location, :password, :password_confirmation)
  end
end
