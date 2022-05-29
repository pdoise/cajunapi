Rails.application.routes.draw do
  root 'welcome#index'
  resources :recipes
  resources :users
end
