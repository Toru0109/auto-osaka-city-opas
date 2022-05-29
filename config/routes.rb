Rails.application.routes.draw do
  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

  root to: "tops#index"

  get '/sign_up', to: 'users#new'
  post '/sign_up', to: 'users#create'
  get '/user/edit', to: 'users#edit'
  put '/user/update', to: 'users#update'
  delete '/user/destroy', to: 'users#destroy'

  get '/sign_in', to: 'sessions#new'
  post '/sign_in', to: 'sessions#create'
  delete '/sign_out', to: 'sessions#destroy'

  resources :automation_settings
  post '/execute', to: 'automation_settings#execute'
end
