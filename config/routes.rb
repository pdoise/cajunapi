Rails.application.routes.draw do

  resources :recipes
  resources :users

  post 'login', to: 'authentication#authenticate'
  get 'logout', to: 'authentication#logout'

  get '*other', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
