class AuthenticationController < ApplicationController
  require 'securerandom'
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

  def fb_authenticate
    access_token = params[:access_token]
    
    # Make a request to Facebook's API to fetch user profile information
    graph = Koala::Facebook::API.new(access_token)
    profile = graph.get_object('me', fields: 'email')
    puts "*"*1000
    puts profile.inspect
  
    # Check if the user with the corresponding Facebook ID exists in your database
    user = User.find_by(facebook_id: profile['id'])
    
    if user
      # User exists, issue a token or session for the user
      token = encode(user_id: user.id)
      render json: { token: token, user: user }
    else
      # User does not exist, create a new user account
      email = profile['email']
      user = User.new(email: email, facebook_id: profile['id'])
      
      # Generate a random and secure password for the user
      generated_password = SecureRandom.alphanumeric(20)
      user.password = generated_password
      user.password_confirmation = generated_password
  
      if user.save
        # User account created successfully, issue a token or session for the user
        token = encode(user_id: user.id)
        render json: { token: token, user: user }
      else
        # Failed to create user account, return an error response
        render json: { error_message: user.errors.full_messages.join(", ") }, status: :bad_request
      end
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
