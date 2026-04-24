class SessionsController < ApplicationController
  skip_before_action :authenticate_user!, only: [:new, :create]

  def new
    redirect_to user_recipes_path(current_user) if logged_in?
  end

  def create
    user = User.find_by("LOWER(email) = ?", params[:email].to_s.downcase)
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to user_recipes_path(user), notice: 'Welcome back!'
    else
      flash.now[:alert] = 'Incorrect email or password.'
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path, notice: 'You have been logged out.'
  end
end
