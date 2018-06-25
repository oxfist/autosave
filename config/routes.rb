Rails.application.routes.draw do
  root to: 'pages#home'
  namespace :api do
    namespace :v1, defaults: { format: :json } do
      resources :games, only: [:show]
    end
  end
end
