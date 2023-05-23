class PasswordResetsController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.find_by(email: params[:email])
    if user
      user.generate_reset_password_token
      UserMailer.password_reset(user: user).deliver_later
    end
    render json: { message: 'If an account with this email exists, a password reset link has been sent to your email address.' }
  end

  def edit
    user = User.find_by(reset_password_token: params[:reset_password_token])
    if user&.reset_password_token_valid?
      # Render the password reset form
    else
      render json: { error_message: 'Invalid or expired reset password token.' }, status: :bad_request
    end
  end

  def update
    user = User.find_by(reset_password_token: params[:reset_password_token])
    if user&.reset_password_token_valid?
      if user.update(password: params[:password], password_confirmation: params[:password_confirmation])
        user.update(reset_password_token: nil, reset_password_token_sent_at: nil)
        render json: { message: 'Password has been reset successfully.' }
      else
        render json: { error_message: user.errors.full_messages.join(', ') }, status: :bad_request
      end
    else
      render json: { error_message: 'Invalid or expired reset password token.' }, status: :bad_request
    end
  end
end