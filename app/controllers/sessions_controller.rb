class SessionsController < ApplicationController
  def create
    user = User.find_by(user_number: params[:user_number])
    if user && user.decrypted_password == params[:password]
      flash[:success] = 'ログインに成功しました。'
      redirect_to automation_settings_path
    else
      flash[:danger] = '利用者番号またはパスワードが間違っています。'
      redirect_to root_path
    end
  end
end
