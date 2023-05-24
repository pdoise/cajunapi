class Recipe < ApplicationRecord
  belongs_to :user
  has_one_attached :image
  has_many :comments
  has_many :likes, dependent: :destroy
  has_many :liking_users, through: :likes, source: :user

  def like_count
    likes.count
  end
end
