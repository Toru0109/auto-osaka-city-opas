require 'webdrivers/chromedriver'
require 'selenium-webdriver'

class OsakaCityOpasOperator
  URL = 'https://reserve.opas.jp/osakashi/Welcome.cgi'.freeze

  attr_reader :user_id, :automation_setting_id

  def initialize(user_id, automation_setting_id)
    @user_id = user_id
    @automation_setting_id = automation_setting_id
  end

  def display_availability
    open_welcome_page
    login
    process_selection
    inquiry_method_selection
    category_selection(:category_id)
    category_selection(:sub_category_id)
    facility_selection
    driver.execute_script("alert('正常に終了しました。')")
  rescue => ex
    driver.execute_script("alert('エラーが発生しました。再度処理をやり直してください。')")
  end

  private

  def user
    @user ||= User.find(user_id)
  end

  def automation_setting
    @automation_setting ||= AutomationSetting.find_by(
      id: automation_setting_id,
      user_id: user_id
    )
  end

  def driver
    @driver ||= begin
      driver = Selenium::WebDriver.for :chrome,
        capabilities: Selenium::WebDriver::Remote::Capabilities.chrome("goog:chromeOptions" => { detach: true, excludeSwitches: ['enable-automation'] })
      driver.manage.window.maximize
      driver.manage.timeouts.implicit_wait = 10
      driver
    end
  end

  def open_welcome_page
    driver.get(URL)
    sleep 2
  end

  def login
    driver.find_element(:id, 'txtRiyoshaCode').send_keys(user.user_number)
    driver.find_element(:id, 'txtPassWord').send_keys(user.decrypted_password)
    driver.find_element(:class, 'loginbtn').find_element(:tag_name, 'a').click
    sleep 2
  end

  def process_selection
    driver.find_elements(:class, 'bgpng')[0].click
    sleep 2
  end

  def inquiry_method_selection
    driver.find_element(:tag_name, 'table').find_element(:tag_name, 'a').click
    sleep 2
  end

  def category_selection(key)
    id = category_ids_table[automation_setting.sports_type.to_s][key]
    driver.find_element(:id, id).click
    sleep 2
  end

  def facility_selection
    automation_setting.facility_types.split(',').each do |facility_type|
      facilities_table[automation_setting.sports_type.to_s][facility_type].each do |id|
        driver.find_element(:id, id).find_element(:xpath, './../../..').click
        sleep 1
      end
    end
    driver.find_element(:id, 'pagerbox').find_elements(:tag_name, 'a')[1].click
  end

  def facilities_table
    {
      AutomationSetting::TENNIS => {
        AutomationSetting::CHIDORI_GYMNASIUM => ['i_record0'],
        AutomationSetting::FITTNESS_21_EAST_YODOGAWA_GYMNASIUM => ['i_record1'],
        AutomationSetting::TSURUMIRYOKUCHI => ['i_record2'],
        AutomationSetting::NAGAI_PARK => ['i_record3'],
        AutomationSetting::NANKO_CENTRAL_PARK => ['i_record4', 'i_record5'],
        AutomationSetting::UTSUBO_PARK => ['i_record6', 'i_record7', 'i_record8'],
        AutomationSetting::NORTH_SPORTS_CENTER => ['i_record9'],
        AutomationSetting::MIYAKOJIMA_SPORTS_CENTER => ['i_record10'],
        AutomationSetting::FUKUSHIMA_SPORTS_CENTER => ['i_record11'],
        AutomationSetting::MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER => ['i_record12'],
        AutomationSetting::CENTRAL_SPORTS_CENTER => ['i_record13'],
        AutomationSetting::WEST_SPORTS_CENTER => ['i_record14'],
        AutomationSetting::PORT_SPORTS_CENTER => ['i_record15'],
        AutomationSetting::TAISHO_SPORTS_CENTER => ['i_record16'],
        AutomationSetting::TENNOJI_SPORTS_CENTER => ['i_record17'],
        AutomationSetting::MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER => ['i_record18'],
        AutomationSetting::WEST_YODOGAWA_SPORTS_CENTER => ['i_record19'],
        AutomationSetting::YODOGAWA_SPORTS_CENTER => ['i_record20'],
        AutomationSetting::EAST_YODOGAWA_SPORTS_CENTER => ['i_record21'],
        AutomationSetting::ZETTO_HIGASHINARI_SPORTS_CENTER => ['i_record22'],
        AutomationSetting::ZETTO_IKUNO_SPORTS_CENTER => ['i_record23'],
        AutomationSetting::ASAHI_SPORTS_CENTER => ['i_record24'],
        AutomationSetting::JOTO_SPORTS_CENTER=> ['i_record25'],
        AutomationSetting::TSURUMI_SPORTS_CENTER => ['i_record26'],
        AutomationSetting::SUMIYOSHI_SPORTS_CENTER => ['i_record27'],
        AutomationSetting::FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER => ['i_record28'],
        AutomationSetting::HST_HIRANO_SPORTS_CENTER => ['i_record29'],
        AutomationSetting::HST_NISHINARI_SPORTS_CENTER => ['i_record30'],
        AutomationSetting::NAGAI_PARK_OFFICE => ['i_record31', 'i_record32', 'i_record33', 'i_record34', 'i_record35'],
        AutomationSetting::OGIMACHI_PARK_OFFICE => ['i_record36', 'i_record37', 'i_record38', 'i_record39', 'i_record40', 'i_record41'],
        AutomationSetting::SANADAYAMA_PARK_OFFICE => ['i_record42', 'i_record43', 'i_record44', 'i_record45'],
        AutomationSetting::JYUSO_PARK_OFFICE => ['i_record46', 'i_record47', 'i_record48', 'i_record49', 'i_record50', 'i_record51'],
        AutomationSetting::TSURUMIRYOKUCHI_PARK_OFFICE => ['i_record52', 'i_record53'],
      },
      AutomationSetting::SOFT_TENNIS => {
        AutomationSetting::CHIDORI_GYMNASIUM => ['i_record0'],
        AutomationSetting::FITTNESS_21_EAST_YODOGAWA_GYMNASIUM => ['i_record1'],
        AutomationSetting::TSURUMIRYOKUCHI => ['i_record2'],
        AutomationSetting::NAGAI_PARK => ['i_record3'],
        AutomationSetting::NANKO_CENTRAL_PARK => ['i_record4', 'i_record5'],
        AutomationSetting::UTSUBO_PARK => ['i_record6', 'i_record7', 'i_record8'],
        AutomationSetting::NORTH_SPORTS_CENTER => ['i_record9'],
        AutomationSetting::MIYAKOJIMA_SPORTS_CENTER => ['i_record10'],
        AutomationSetting::FUKUSHIMA_SPORTS_CENTER => ['i_record11'],
        AutomationSetting::MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER => ['i_record12'],
        AutomationSetting::CENTRAL_SPORTS_CENTER => ['i_record13'],
        AutomationSetting::WEST_SPORTS_CENTER => ['i_record14'],
        AutomationSetting::PORT_SPORTS_CENTER => ['i_record15'],
        AutomationSetting::TAISHO_SPORTS_CENTER => ['i_record16'],
        AutomationSetting::TENNOJI_SPORTS_CENTER => ['i_record17'],
        AutomationSetting::MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER => ['i_record18'],
        AutomationSetting::WEST_YODOGAWA_SPORTS_CENTER => ['i_record19'],
        AutomationSetting::YODOGAWA_SPORTS_CENTER => ['i_record20'],
        AutomationSetting::EAST_YODOGAWA_SPORTS_CENTER => ['i_record21'],
        AutomationSetting::ZETTO_HIGASHINARI_SPORTS_CENTER => ['i_record22'],
        AutomationSetting::ZETTO_IKUNO_SPORTS_CENTER => ['i_record23'],
        AutomationSetting::ASAHI_SPORTS_CENTER => ['i_record24'],
        AutomationSetting::JOTO_SPORTS_CENTER=> ['i_record25'],
        AutomationSetting::TSURUMI_SPORTS_CENTER => ['i_record26'],
        AutomationSetting::SUMIYOSHI_SPORTS_CENTER => ['i_record27'],
        AutomationSetting::FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER => ['i_record28'],
        AutomationSetting::HST_HIRANO_SPORTS_CENTER => ['i_record29'],
        AutomationSetting::HST_NISHINARI_SPORTS_CENTER => ['i_record30'],
        AutomationSetting::NAGAI_PARK_OFFICE => ['i_record31', 'i_record32', 'i_record33', 'i_record34', 'i_record35'],
        AutomationSetting::OGIMACHI_PARK_OFFICE => ['i_record36', 'i_record37', 'i_record38', 'i_record39', 'i_record40', 'i_record41'],
        AutomationSetting::SANADAYAMA_PARK_OFFICE => ['i_record42', 'i_record43', 'i_record44', 'i_record45'],
        AutomationSetting::JYUSO_PARK_OFFICE => ['i_record46', 'i_record47', 'i_record48', 'i_record49', 'i_record50', 'i_record51'],
        AutomationSetting::TSURUMIRYOKUCHI_PARK_OFFICE => ['i_record52', 'i_record53'],
      }
    }
  end

  def category_ids_table
    {
      AutomationSetting::TENNIS => { :category_id => 'i_record4', :sub_category_id => 'i_record0' },
      AutomationSetting::SOFT_TENNIS => { :category_id => 'i_record4', :sub_category_id => 'i_record1' },
    }
  end
end
