class Api::SessionsController < ApplicationController
# [POST] api/session: "sessions#create" (login),
# [DELETE] api/session: "sessions#destroy" (logout)

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show';
    else
      render json: ['Wrong user credentials!'], status: 401 
    end
  end

  def destroy
    if current_user
      logout!
      render json: { }
      # render json: ['Logout successful.'] WHY NOT THIS? 
    else
      render json: ["no user to logout"], status: 404
    end
  end
end
