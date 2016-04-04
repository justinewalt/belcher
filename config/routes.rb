Rails.application.routes.draw do

  root 'users/registrations#new'

  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
end
