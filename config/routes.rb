Rails.application.routes.draw do

  root 'home#index'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }

  post 'contact_us', to: 'home#contact_mailer' 
end
