Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#index'
  resources :static_pages, only: [:index]

  scope :api do
    scope :v1 do
      resources :users, only: [:index]
      resources :boards
      resources :lists
      resources :tasks
      resources :user_boardings
    end
  end

end
