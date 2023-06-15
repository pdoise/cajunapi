class AuthenticationController < ApplicationController
  skip_before_action :authorize

  def create
    user = User.new(user_params)
    user.email.downcase!
    if user.save
      token = encode(user_id: user.id)
      render json: { token: token, user: user }
    else
      render json: { error_message: user.errors.full_messages.join(", ") }, status: :bad_request
    end
  end
  
  def authenticate
    email = params[:email].downcase
    user = User.find_by("LOWER(email) = ?", email)  
    if user && user.authenticate(params[:password])
      token = encode(user_id: user.id)
      render json: { token: token, user: user }
    else
      render json: { error_message:"Incorrect email or password." }, status: :unauthorized
    end
  end

  def logout
    if request.headers['Authorization'].present?
      token = request.headers['Authorization'].split(' ').last
      decoded_token = decode(token)
      if decoded_token.present?
        payload = { user_id: decoded_token[:user_id] }
        response.headers['Authorization'] = nil
        render json: { message: 'Logged out successfully' }, status: :ok
      end
    end
    render json: { message: 'No token found' }, status: :ok
  end

  def user_params
    params.require(:user).permit(:first, :last, :email, :location, :password, :password_confirmation)
  end
end
