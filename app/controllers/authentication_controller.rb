class AuthenticationController < ApplicationController
  skip_before_action :authorize
  
  def authenticate
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode(user_id: user.id)
      render json: { token: token, user:user }
    else
      render json: { error:"Incorrect user name or password" }, status: :unauthorized
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
end
