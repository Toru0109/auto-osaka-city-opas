class User < ApplicationRecord
  has_many :automation_settings, dependent: :delete_all
  validates_length_of :user_name, maximum: 15, too_long: "は15文字以内で入力してください。"
  validates_length_of :user_number, maximum: 8, too_long: "は8文字以内で入力してください。"
  validates_confirmation_of :password, message: "がパスワードと一致していません。"
  before_create :substitute_encrypted_password

  def decrypted_password
    key_len = ActiveSupport::MessageEncryptor.key_len
    secret = Rails.application.key_generator.generate_key(user_number, key_len)
    encryptor = ActiveSupport::MessageEncryptor.new(secret)
    encryptor.decrypt_and_verify(password)
  end

  private

  def substitute_encrypted_password
    key_len = ActiveSupport::MessageEncryptor.key_len
    secret = Rails.application.key_generator.generate_key(user_number, key_len)
    encryptor = ActiveSupport::MessageEncryptor.new(secret)
    self.password = encryptor.encrypt_and_sign(password)
  end
end
