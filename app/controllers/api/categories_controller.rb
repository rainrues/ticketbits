class Api::CategoriesController < ApplicationController
  
  def create
    @category = Category.new(user_params)
    if @category.save
      render 'api/category/show'
    else
      render json: @category.errors.full_messages, status: 401
    end
  end

  def user_params
    params.require(:category).permit(:name)
  end

end