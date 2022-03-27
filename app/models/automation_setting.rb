class AutomationSetting < ApplicationRecord
  belongs_to :user

  # sports_type
  VOLLEY_BALL = '1'
  SOFT_VOLLEY_BALL = '2'
  BASKET_BALL = '3'
  BADMINTON = '4'
  TABLE_TENNIS = '5'
  TENNIS = '6'
  SOFT_TENNIS = '7'
  YOGA = '8'
  GIMNASTICS = '9'
  FOLK_DANCE = '10'
  BALLROOM_DANCE = '11'
  AEROBICS = '12'
  JAZZ_DANCE = '13'
  BATON_TWIRLING = '14'
  TAEKWONDO = '15'
  JUDO = '16'
  KARATE = '17'
  AIKIDO = '18'
  QIGONG = '19'
  NAGINATA = '20'
  KENPO = '21'
  TAI_CHI = '22' # 太極拳
  KENDO = '23'
  IAIDO = '24'
  BASEBALL = '25'
  SOFT_BASEBALL = '26'
  BOY_BASEBALL = '27'
  BOY_SOFT_BASEBALL = '28'
  SOFTBALL = '29'
  SOCCER = '30'
  PRACTICE_SOCCER = '31'
  BOY_SOCCER = '32'
  FUTSAL = '33'
  INDIACA = '34'
  GATEBALL = '35'
  SPORTS_DAY = '36' # 運動会
  MEETING = '37'
  HANDBALL = '38'
  DODGEBALL = '39'
  RUGBY = '40'
  LACROSSE = '41'
  AMERICAN_FOOTBALL = '42'
  OTHERS = '43'

  SPORTS_NAMES = [
    ['バレーボール', VOLLEY_BALL],
    ['ソフトバレーボール', SOFT_VOLLEY_BALL],
    ['バスケットボール', BASKET_BALL],
    ['バドミントン', BADMINTON],
    ['卓球', TABLE_TENNIS],
    ['硬式テニス', TENNIS],
    ['ソフトテニス', SOFT_TENNIS],
    ['ヨーガ', YOGA],
    ['体操', GIMNASTICS],
    ['フォークダンス', FOLK_DANCE],
    ['社交ダンス', BALLROOM_DANCE],
    ['エアロビクス', AEROBICS],
    ['ジャズダンス', JAZZ_DANCE],
    ['バトントワリング', BATON_TWIRLING],
    ['テコンドー', TAEKWONDO],
    ['柔道', JUDO],
    ['空手道', KARATE],
    ['合気道', AIKIDO],
    ['気功', QIGONG],
    ['なぎなた', NAGINATA],
    ['拳法', KENPO],
    ['太極拳', TAI_CHI],
    ['剣道', KENDO],
    ['居合道', IAIDO],
    ['硬式野球', BASEBALL],
    ['軟式野球', SOFT_BASEBALL],
    ['少年硬式野球', BOY_BASEBALL],
    ['少年軟式野球', BOY_SOFT_BASEBALL],
    ['ソフトボール', SOFTBALL],
    ['サッカー', SOCCER],
    ['サッカー（練習）', PRACTICE_SOCCER],
    ['少年サッカー', BOY_SOCCER],
    ['フットサル', FUTSAL],
    ['インディアカ', INDIACA],
    ['ゲートボール', GATEBALL],
    ['運動会', SPORTS_DAY],
    ['会議', MEETING],
    ['ハンドボール', HANDBALL],
    ['ドッジボール', DODGEBALL],
    ['ラグビー', RUGBY],
    ['ラクロス', LACROSSE],
    ['アメリカンフットボール', AMERICAN_FOOTBALL],
    ['その他', OTHERS]
  ]

  # facility_types_for_volleyball
  MARUZEN_INTEC_ARENA_OSAKA = '1'
  CHIDORI_GYMNASIUM = '2'
  FITTNESS_21_EAST_YODOGAWA_GYMNASIUM = '3'
  NORTH_SPORTS_CENTER = '4'
  MIYAKOJIMA_SPORTS_CENTER = '5'


  CHIDORI_GYMNASIUM = '1'
  FITTNESS_21_EAST_YODOGAWA_GYMNASIUM = '2'
  TSURUMIRYOKUCHI = '3'
  NAGAI_PARK = '4'
  NANKO_CENTRAL_PARK = '5'
  UTSUBO_PARK = '6'
  NORTH_SPORTS_CENTER = '7'
  MIYAKOJIMA_SPORTS_CENTER = '8'
  FUKUSHIMA_SPORTS_CENTER = '9'
  MEIJI_SPORTSPURAZA_KONOHANA_SPORTS_CENTER = '10'
  CENTRAL_SPORTS_CENTER = '11'
  WEST_SPORTS_CENTER = '12'
  PORT_SPORTS_CENTER = '13'
  TAISHO_SPORTS_CENTER = '14'
  TENNOJI_SPORTS_CENTER = '15'
  MEIJI_SPORTSPURAZA_NANIWA_SPORTS_CENTER = '16'
  WEST_YODOGAWA_SPORTS_CENTER = '17'
  YODOGAWA_SPORTS_CENTER = '18'
  EAST_YODOGAWA_SPORTS_CENTER = '19'
  ZETTO_HIGASHINARI_SPORTS_CENTER = '20'
  ZETTO_IKUNO_SPORTS_CENTER = '21'
  ASAHI_SPORTS_CENTER = '22'
  JOTO_SPORTS_CENTER= '23'
  TSURUMI_SPORTS_CENTER = '24'
  SUMIYOSHI_SPORTS_CENTER = '25'
  FITTNESS_21_EAST_SUMIYOSHI_SPORTS_CENTER = '26'
  HST_HIRANO_SPORTS_CENTER = '27'
  HST_NISHINARI_SPORTS_CENTER = '28'
  NAGAI_PARK_OFFICE = '29'
  OGIMACHI_PARK_OFFICE = '30'
  SANADAYAMA_PARK_OFFICE = '31'
  JYUSO_PARK_OFFICE = '32'
  TSURUMIRYOKUCHI_PARK_OFFICE = '33'

  { AutomationSetting::TENNIS =>
    {
      AutomationSetting::CHIDORI_GYMNASIUM => '千鳥橋体育館'
    }
  }

  def sports_name
    SPORTS_NAMES.rassoc(sports_type.to_s)[0]
  end
end
