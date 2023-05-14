Rails.application.routes.draw do
  resources :users do
    resources :recipes
  end
  
  get '/recipes', to: 'recipes#index', as: 'all_recipes'

  post 'create', to: 'authentication#create'
  post 'login', to: 'authentication#authenticate'
  get 'logout', to: 'authentication#logout'

  get '*other', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
