Rails.application.routes.draw do
  root to: "tops#index"

  get '/sign_up', to: 'users#new'
  post '/sign_up', to: 'users#create'

  get '/sign_in', to: 'sessions#new'
  post '/sign_in', to: 'sessions#create'

  get '/automation_settings', to: 'automation_settings#index'
end
