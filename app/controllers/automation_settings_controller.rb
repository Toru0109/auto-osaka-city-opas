class AutomationSettingsController < ApplicationController
  before_action :logged_in_user, only: [:index]
  before_action :check_automation_setting_owner, only: [:edit]

  def index
    @automation_settings = AutomationSetting.where(user_id: @current_user.id)
  end

  def new
    
  end

  def show

  end

  def edit
    @automation_setting = AutomationSetting.find(params[:id])
  end

  def destroy
    @automation_setting = AutomationSetting.find_by(id: params[:id], user_id: current_user.id)
    if @automation_setting
      @automation_setting.destroy
      render :index
    end
  end

  private

  def check_automation_setting_owner
    automation_setting = AutomationSetting.find_by(id: params[:id])
    redirect_to root_path if !automation_setting || automation_setting.user.id != session[:user_id]
  end
end
