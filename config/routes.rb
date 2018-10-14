Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'application#not_found'

  namespace :api do
    namespace :v1 do
      resources :test, only: [:index]
    end
  end
end
