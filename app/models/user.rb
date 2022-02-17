class User < ApplicationRecord
  has_secure_password
  validates_length_of :user_name, maximum: 15, too_long: "は15文字以内で入力してください。"
  validates_length_of :user_number, maximum: 8, too_long: "は8文字以内で入力してください。"
end
