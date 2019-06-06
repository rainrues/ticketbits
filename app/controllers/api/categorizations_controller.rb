class Api::CategorizationsController < ApplicationController
  
  def create
    debugger
    @categorization = Categorization.new(user_params)
    if @categorization.save
      render 'api/categorizations/categorization'
    else
      render json: @categorization.errors.full_messages, status: 401
    end
  end

  def destroy
    @categorization = Categorization.find(params[:id])
    if @categorization.destroy
      render 'api/categorizations/categorization'
    else
      render json: @categorization.errors.full_messages, status: 401
    end
  end  

  def user_params
    params.require(:categorization).permit(:category_id, :event_id)
  end

end