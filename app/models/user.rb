class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  has_many :comments
  validates :first, presence: true
  validates :last, presence: true
  validates :email, presence: true, uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 },
            format: { with: /\A(?=.*[a-zA-Z])(?=.*[0-9]).{6,}\z/ },
            on: :create

  has_many :recipes,  dependent: :destroy 
end
