class ApplicationController < ActionController::API
  before_action :authorize

  def authorize
    @headers = request.headers
    if @headers['Authorization'].present?
      token = @headers['Authorization'].split(' ').last
      puts 'token'
      puts token
      decoded_token = decode(token)
      user = User.find_by(id: decoded_token[:user_id])
      render json:{ error: 'Not Authorized' }, status: 401 unless user
    else
      render json: { error: 'Not Authorized' }, status: 401
    end
  end
   
  private

  def encode(payload, exp = 1200.hours.from_now)
   payload[:exp] = exp.to_i
   JWT.encode(payload, Rails.application.credentials.read)
  end

  def decode(token)
    puts 'token'
    puts token
    body = JWT.decode(token, Rails.application.credentials.read)[0]
    puts "*"*1000
    puts 'secret key'
    puts Rails.application.credentials.read
    puts 'body'
    puts body
    puts 'hash' 
    puts HashWithIndifferentAccess.new body
    HashWithIndifferentAccess.new body
  rescue
    nil
  end
end
