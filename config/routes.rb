Rails.application.routes.draw do

  resources :recipes do
    put :image, on: :member
  end
  resources :users
  # Keep at bottom of this file
  get '*other', to: 'static#index'
end
