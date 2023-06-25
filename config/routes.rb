Rails.application.routes.draw do
  resources :users do
    resources :recipes do
      resources :comments, only: [:create, :destroy]
      member do
        post :like
        delete :unlike
      end
    end
  end
  
  get '/recipes', to: 'recipes#index', as: 'all_recipes'

  post 'create', to: 'authentication#create'
  post 'login', to: 'authentication#authenticate'
  post 'fblogin', to: 'authentication#fb_authenticate'
  get 'logout', to: 'authentication#logout'
  get '/auth/facebook/callback', to: 'sessions#create'

  get '*other', to: 'static#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
