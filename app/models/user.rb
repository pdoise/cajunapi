class User < ApplicationRecord
  has_secure_password
  validates :first, presence: true
  validates :last, presence: true
  validates :email, presence: true, uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 },
            format: { with: /\A(?=.*[a-zA-Z])(?=.*[0-9]).{6,}\z/ }

  has_many :recipes,  dependent: :destroy 

  def passwords_match
    if password != password_confirmation
      errors.add(:password_confirmation, "Password and password confirmation don't match")
    end
  end
end
