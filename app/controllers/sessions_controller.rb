class SessionsController < ApplicationController
  def create
    user = User.find_by(user_number: session_params[:user_number])
    if user && user.decrypted_password == session_params[:password]
      flash[:success] = 'ログインに成功しました。'
      session[:user_id] = user.id
      redirect_to automation_settings_path
    else
      flash[:danger] = '利用者番号またはパスワードが間違っています。'
      redirect_to root_path
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to root_path
  end

  private

  def session_params
    params.require(:session).permit(:user_number, :password)
  end
end
