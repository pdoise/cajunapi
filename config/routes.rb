Rails.application.routes.draw do

  resources :recipes
  resources :users

  # Keep at bottom of this file
  get '*other', to: 'static#index'
end
