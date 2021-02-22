Rails.application.routes.draw do
  resources :sessions, only: [:create]
  resources :registrations, only: [:create]
  resources :events, only: [:create, :index]
  resources :participates, only: [:create]
  resources :rewards, only: [:create, :index, :update]

  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  put :update_ticket, to: "sessions#update_ticket"
  root to: "static#home"
end