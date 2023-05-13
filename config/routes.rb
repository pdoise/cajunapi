Rails.application.routes.draw do

  resources :recipes
  resources :users

  get '*other', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
