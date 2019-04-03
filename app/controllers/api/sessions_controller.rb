class Api::SessionsController < ApplicationController
# [POST] api/session: "sessions#create" (login),
# [DELETE] api/session: "sessions#destroy" (logout)
# [POST] api/email: "sessions#email" (check that email exists)

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show';
    else
      render json: ['Incorrect password'], status: 401 
    end
  end

  def destroy
    if current_user
      logout!
      render json: { }
    else
      render json: ["no user to logout"], status: 404
    end
  end

  def email
    user = User.find_by(email: params[:email])
    if user
      email = user.email
      render json: { email: email, match: true }
    else
      render json: { email: params[:email], match: false }
    end
  end

end
