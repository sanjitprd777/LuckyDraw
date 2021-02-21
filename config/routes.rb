Rails.application.routes.draw do
  resources :sessions, only: [:create, :update]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"
  put :update, to: "sessions#update"
  root to: "static#home"
end
