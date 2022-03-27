Rails.application.routes.draw do
  root to: "tops#index"

  get '/sign_up', to: 'users#new'
  post '/sign_up', to: 'users#create'

  get '/sign_in', to: 'sessions#new'
  post '/sign_in', to: 'sessions#create'
  delete '/sign_out', to: 'sessions#destroy'

  # get '/automation_settings', to: 'automation_settings#index'
  # get '/automation_settings/:id', to: 'automation_settings#show'
  # get '/automation_settings/:id/edit', to: 'automation_settings#edit'
  resources :automation_settings
end
