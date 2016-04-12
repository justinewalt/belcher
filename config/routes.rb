Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {omniauth_callbacks: 'users/omniauth_callbacks'}


  post 'contact_us', to: 'contact_us#new_contact'

#==== GET ROUTES
  get '/search', to: 'home#search'

  
end
