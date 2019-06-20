Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
<<<<<<< HEAD
    resources :events, except: [:new, :edit, :destroy]
    
    # get 'search', to: "api/track#search" (queery string)
    #  ^ in search form set up queery
    # create route util
    # can see example in Adrians full stack
    # Look up post request search (post body)
=======
    resources :events, except: [:new, :edit]
    resources :categorizations, only: [:create, :destroy]

>>>>>>> f8bd65c54a480a0090bcd4c68aad77a4a84b782b
    post '/email', to: 'sessions#email'
  end
end


# namespace :api, defaults: {format: :json} do
#     resources :users
#     get '/email', to: 'users#sign_in', as: 'user_sign_in'
#     resource :session, only: [:create, :destroy]
#     resources :events do 
#       resources :tickets
#     end
#     get 'users/:user_id/events', to: 'events#user_events', as: 'user_events'
#     get 'categories/:name/events', to: 'categories#category_events', as: 'category_events'
#     resources :user_tickets, only: [:index, :show, :create, :destroy]
#     get 'users/:user_id/user_tickets/:ticket_id', to: 'user_tickets#attending_count', as: 'ticket_count'
#     get 'users/:user_id/tickets/', to: 'tickets#attending', as: 'user_profile_tickets'
#     resources :categories, only: [:index, :show, :create]
#     resources :event_categories, only: [:index, :show, :create, :update]
#   end