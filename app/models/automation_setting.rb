class AutomationSetting < ApplicationRecord
  belongs_to :user

  validates_length_of :name, maximum: 30, too_long: "は30文字以内で入力してください。"
  validates_inclusion_of :sports_type, :in => 1..43, message: 'が不正です。'

  SPORTS_FACILITIES_TABLE = {
    Constants::Sports::VOLLEYBALL        => Constants::VolleyballFacilities::NAMES_HASH,
    Constants::Sports::SOFT_VOLLEYBALL   => Constants::SoftVolleyballFacilities::NAMES_HASH,
    Constants::Sports::BASKETBALL        => Constants::BasketballFacilities::NAMES_HASH,
    Constants::Sports::BADMINTON         => Constants::BadmintonFacilities::NAMES_HASH,
    Constants::Sports::TABLE_TENNIS      => Constants::TableTennisFacilities::NAMES_HASH,
    Constants::Sports::TENNIS            => Constants::TennisFacilities::NAMES_HASH,
    Constants::Sports::SOFT_TENNIS       => Constants::SoftTennisFacilities::NAMES_HASH,
    Constants::Sports::YOGA              => Constants::YogaFacilities::NAMES_HASH,
    Constants::Sports::GIMNASTICS        => Constants::GimnasticsFacilities::NAMES_HASH,
    Constants::Sports::FOLK_DANCE        => Constants::FolkDanceFacilities::NAMES_HASH,
    Constants::Sports::BALLROOM_DANCE    => Constants::BallroomDanceFacilities::NAMES_HASH,
    Constants::Sports::AEROBICS          => Constants::AerobicsFacilities::NAMES_HASH,
    Constants::Sports::JAZZ_DANCE        => Constants::JazzDanceFacilities::NAMES_HASH,
    Constants::Sports::BATON_TWIRLING    => Constants::BatonTwirlingFacilities::NAMES_HASH,
    Constants::Sports::TAEKWONDO         => Constants::TaekwondoFacilities::NAMES_HASH,
    Constants::Sports::JUDO              => Constants::JudoFacilities::NAMES_HASH,
    Constants::Sports::KARATE            => Constants::KarateFacilities::NAMES_HASH,
    Constants::Sports::AIKIDO            => Constants::AikidoFacilities::NAMES_HASH,
    Constants::Sports::QIGONG            => Constants::QigongFacilities::NAMES_HASH,
    Constants::Sports::NAGINATA          => Constants::NaginataFacilities::NAMES_HASH,
    Constants::Sports::KENPO             => Constants::KenpoFacilities::NAMES_HASH,
    Constants::Sports::TAI_CHI           => Constants::TaiChiFacilities::NAMES_HASH,
    Constants::Sports::KENDO             => Constants::KendoFacilities::NAMES_HASH,
    Constants::Sports::IAIDO             => Constants::IaidoFacilities::NAMES_HASH,
    Constants::Sports::BASEBALL          => Constants::BaseballFacilities::NAMES_HASH,
    Constants::Sports::SOFT_BASEBALL     => Constants::SoftBaseballFacilities::NAMES_HASH,
    Constants::Sports::BOY_BASEBALL      => Constants::BoyBaseballFacilities::NAMES_HASH,
    Constants::Sports::BOY_SOFT_BASEBALL => Constants::BoySoftBaseballFacilities::NAMES_HASH,
    Constants::Sports::SOFTBALL          => Constants::SoftballFacilities::NAMES_HASH,
    Constants::Sports::SOCCER            => Constants::SoccerFacilities::NAMES_HASH,
    Constants::Sports::PRACTICE_SOCCER   => Constants::PracticeSoccerFacilities::NAMES_HASH,
    Constants::Sports::BOY_SOCCER        => Constants::BoySoccerFacilities::NAMES_HASH,
    Constants::Sports::FUTSAL            => Constants::FutsalFacilities::NAMES_HASH,
    Constants::Sports::INDIACA           => Constants::IndiacaFacilities::NAMES_HASH,
    Constants::Sports::GATEBALL          => Constants::GateballFacilities::NAMES_HASH,
    Constants::Sports::SPORTS_DAY        => Constants::SportsDayFacilities::NAMES_HASH,
    Constants::Sports::MEETING           => Constants::MeetingFacilities::NAMES_HASH,
    Constants::Sports::HANDBALL          => Constants::HandballFacilities::NAMES_HASH,
    Constants::Sports::DODGEBALL         => Constants::DodgeballFacilities::NAMES_HASH,
    Constants::Sports::RUGBY             => Constants::RugbyFacilities::NAMES_HASH,
    Constants::Sports::LACROSSE          => Constants::LacrosseFacilities::NAMES_HASH,
    Constants::Sports::AMERICAN_FOOTBALL => Constants::AmericanFootballFacilities::NAMES_HASH,
    Constants::Sports::OTHERS            => Constants::OthersFacilities::NAMES_HASH,
  }

  def sports_name
    Constants::Sports::NAMES[sports_type.to_s]
  end

  def facility_names
    facilities = SPORTS_FACILITIES_TABLE[sports_type.to_s]
    facility_types.split(',').map { |facility_type| facilities[facility_type] }
  end
end
