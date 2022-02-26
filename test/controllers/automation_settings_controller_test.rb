require 'test_helper'

class AutomationSettingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get automation_settings_index_url
    assert_response :success
  end

end
