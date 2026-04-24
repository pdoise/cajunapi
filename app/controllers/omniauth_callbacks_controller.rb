class OmniauthCallbacksController < ApplicationController
  skip_before_action :authenticate_user!

  def facebook
    auth = request.env['omniauth.auth']
    user = User.find_by(facebook_id: auth.uid)

    if user.nil? && auth.info.email.present?
      user = User.find_by("LOWER(email) = ?", auth.info.email.downcase)
      user&.update_column(:facebook_id, auth.uid)
    end

    if user.nil?
      unless auth.info.email.present?
        redirect_to login_path, alert: "Facebook login requires email access. Please ensure the app has email permission enabled."
        return
      end
      generated_password = SecureRandom.alphanumeric(20)
      user = User.new(
        email: auth.info.email,
        facebook_id: auth.uid,
        first: auth.info.first_name,
        last: auth.info.last_name,
        password: generated_password,
        password_confirmation: generated_password
      )
      unless user.save
        redirect_to login_path, alert: "Facebook login failed: #{user.errors.full_messages.join(', ')}"
        return
      end
    end

    session[:user_id] = user.id
    redirect_to user_recipes_path(user), notice: 'Logged in with Facebook!'
  end

  def failure
    redirect_to login_path, alert: 'Facebook login failed. Please try again.'
  end
end
