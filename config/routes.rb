Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :photos, only: [:show]
  end

  Rails.application.routes.draw do
    resources :posts, only: [:show]
    namespace :api, defaults: { format: :json } do
      resources :posts, only: [:create, :index]
    end
  end

  get '*path', 
    to: 'static_pages#frontend', 
    constraints: lambda{|req| !req.xhr? && req.format.html? }

  root to: 'static_pages#frontend'
end
