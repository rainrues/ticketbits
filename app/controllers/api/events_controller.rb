class Api::EventsController < ApplicationController
    
    def index
        @events = Event.all
        render :index
    end

    # def show
    #     render :show
    # end

    def create
        @event = Event.new(event_params)

        if @event.save
            # render :show
        else
            render json: @event.errors.full_messages
        end
    end

    private

    def event_params
        params.require(:event).permit(:start_date, :end_date, :title, :start_time, :end_time, :age, :price, :location, :num_tickets, :user_id)
    end
end