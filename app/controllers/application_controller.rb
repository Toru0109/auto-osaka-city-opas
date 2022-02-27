class ApplicationController < ActionController::Base

  private

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def logged_in_user
    return if current_user

    flash[:danger] = 'ログインしてください。'
    redirect_to root_path
  end
end
