Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  # GET routes
  get '/search', to: 'home#search'
end
