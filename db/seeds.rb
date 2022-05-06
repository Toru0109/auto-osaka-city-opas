user_id = 2

10.times do
  AutomationSetting.create(
    sports_type: 6,
    facility_types: "6",
    name: 'テストデータ',
    user_id: user_id
  )
end
