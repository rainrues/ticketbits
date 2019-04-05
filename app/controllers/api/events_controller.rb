class Api::EventsController < ApplicationController
    # before_action :require_login, only: [:create, :update]

    def index
        @events = Event.all
        render :index
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    # NEEDED ONCE I HAVE A USER'S TICKETED EVENTS INDEX PAGE
    # WILL DO A SIMILAR THING FOR USER'S CREATED EVENTS
    # def user_events
    #     @user = User.find(params[:user_id])
    #     @events = @user.attending_events
    #     if @events 
    #         render 'api/events/index'
    #     else 
    #         render json: @events.errors.full_messages, status: 422
    #     end
    # end

    def create
        @event = Event.new(event_params)
        @event.user_id = current_user.id
        if @event.save
            render 'api/events/show'
        else
            render json: @event.errors.full_messages
        end
    end

    def update
        @event = current_user.events.find(params[:id])
        if @event.update!(event_params)
            render 'api/events/show'
        else
            render json: @event.errors.full_messages
        end
    end


    private

    def event_params
        params.require(:event).permit(
            :start_date, 
            :end_date, 
            :title, 
            :start_time, 
            :end_time, 
            :age, 
            :price, 
            :location, 
            :num_tickets, 
            :user_id,
            :low_price,
            :about,
            :image_url,
            :location_id,
            :venue_name,
            :address,
            :address2,
            :city,
            :state,
            :country,
            :zip
        )
    end
end