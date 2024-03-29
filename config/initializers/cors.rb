# config/initializers/cors.rb

# Be sure to restart your server when you modify this file.
# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept
# cross-origin AJAX requests.
# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do

  allow do
    if Rails.env.development?
      origins 'localhost:3000', 'localhost:4200', 'https://4af8-2601-283-4e81-2020-3521-d229-a451-37ce.ngrok-free.app'
    else
      origins 'https://cajuncookbook.herokuapp.com/'
    end

    resource '*',
      headers: :any,
      expose:  ['access-token', 'expiry', 'token-type', 'uid', 'client'],
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end