class ChangeLengthForUserNumberAndPasswordDigest < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :user_number, :string, null: false, default: '', limit: 8
    change_column :users, :password_digest, :string, null: false, default: '', limit: 8
  end
end
