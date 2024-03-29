Rails.application.routes.draw do
  root to: "tops#index"

  resource :session, only: [:create, :destroy]

  resource :user, only: [:create, :edit, :update, :destroy] do
    get 'change_password'
    get 'login_info'
    put 'update_password'
  end

  resources :automation_settings, only: [:index, :new, :show, :create, :edit, :update] do
    delete :delete, action: :destroy, on: :collection
  end

  get '/manual', to: 'manuals#index'
end
