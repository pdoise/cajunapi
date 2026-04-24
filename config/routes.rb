Rails.application.routes.draw do
  # Auth
  get    '/login',  to: 'sessions#new',         as: 'login'
  post   '/login',  to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy',      as: 'logout'
  get    '/signup', to: 'registrations#new',     as: 'signup'
  post   '/signup', to: 'registrations#create'

  # Facebook OAuth
  get '/auth/facebook/callback', to: 'omniauth_callbacks#facebook'
  get '/auth/failure',           to: 'omniauth_callbacks#failure'

  # Resources (JSON API during migration, MVC views added per-phase)
  resources :users do
    resources :recipes do
      resources :comments, only: [:create, :destroy]
      member do
        post   :like
        delete :unlike
      end
    end
  end

  get '/recipes', to: 'recipes#index', as: 'all_recipes'

  post '/contact', to: 'pages#contact', as: 'contact'

  root to: 'pages#landing'
end
