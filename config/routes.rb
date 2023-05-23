Rails.application.routes.draw do
  resources :users do
    resources :recipes do
      resources :comments, only: [:create, :delete]
      member do
        post 'rate'
      end
    end
  end
  
  get '/recipes', to: 'recipes#index', as: 'all_recipes'

  post 'create', to: 'authentication#create'
  post 'login', to: 'authentication#authenticate'
  get 'logout', to: 'authentication#logout'

  get '*other', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
