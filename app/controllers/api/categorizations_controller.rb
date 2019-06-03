class Api::CategorizationsController < ApplicationController
  
  def create
    @categorization = Categorization.new(user_params)
    if @categorization.save
      render 'api/categorization/show'
    else
      render json: @categorization.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:categorization).permit(:category_id, :event_id)
  end

end