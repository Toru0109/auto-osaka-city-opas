class TopsController < ApplicationController
  def index
    redirect_to automation_settings_path and return if current_user

    render layout: 'tops'
  end
end
