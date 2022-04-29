class AutomationSettingsController < ApplicationController
  before_action :logged_in_user, only: [:index]
  before_action :check_automation_setting_owner, only: [:edit]
  before_action :set_automation_setting, only: [:edit, :destroy, :execute]

  def index
    @automation_settings = AutomationSetting
      .where(user_id: @current_user.id)
      .order(:id)

    @automation_settings = @automation_settings
      .where("name LIKE ?", "%#{params[:search_keyword]}%") if params[:search_keyword].present?
  end

  def new
  end

  def show

  end

  def edit
  end

  def destroy
    if @automation_setting
      @automation_setting.destroy
      render :index
    end
  end

  def execute
    render status: :not_found and return unless @automation_setting

    OsakaCityOpasOperateWorker.perform_at(3.second, session[:user_id], params[:id])
    render status: :accepted
  rescue => ex
    p '==============='
    p ex.class
    p ex.message
    p ex.backtrace
    p '==============='

    # DB接続エラー
    render status: :internal_server_error
  end

  private

  def set_automation_setting
    @automation_setting = AutomationSetting.find_by(
      id: params[:id],
      user_id: session[:user_id]
    )
  end

  def check_automation_setting_owner
    automation_setting = AutomationSetting.find_by(id: params[:id])
    redirect_to root_path if !automation_setting || automation_setting.user.id != session[:user_id]
  end
end
