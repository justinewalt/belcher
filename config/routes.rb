Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations', omniauth_callbacks: "users/omniauth_callbacks"
  }

  post 'contact_us', to: 'contact_us#new_contact'

  get '/search', to: 'home#search'
  get '/about', to: 'about#index'
  get '/profile', to: 'profile#show'
  get '/contact', to: 'contact_us#index'
end
