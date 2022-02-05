Rails.application.routes.draw do
  root to: "tops#index"
  get '/sign_up', to: 'users#index'
  get '/sign_in', to: 'sessions#new'
end
