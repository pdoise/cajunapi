class ApplicationController < ActionController::API
  before_action :authorize
  attr_reader :current_user

  def authorize
    @headers = request.headers
    if @headers['Authorization'].present?
      token = @headers['Authorization'].split(' ').last
      decoded_token = decode(token)
      if decoded_token && decoded_token[:user_id].present?
        @current_user = User.find_by(id: decoded_token[:user_id])
        puts "*"*1000
        puts @current_user.inspect
        render json: { error: 'Not Authorized' }, status: 401 unless @current_user
      else
        render json: { error: 'Not Authorized' }, status: 401
      end
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end
  
   
  private

  def encode(payload, exp = 24.hours.from_now)
   payload[:exp] = exp.to_i
   JWT.encode(payload, Rails.env.production? ? Rails.application.credentials.read : Rails.application.secrets.secret_key_base)
  end

  def decode(token)
    body = JWT.decode(token, Rails.env.production? ? Rails.application.credentials.read : Rails.application.secrets.secret_key_base)[0]
    HashWithIndifferentAccess.new body
  rescue
    nil
  end
end
