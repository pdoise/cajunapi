class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def landing
    @featured_recipes = Recipe.joins(:image_attachment).with_attached_image.includes(:user).order(created_at: :desc).limit(6)
  end

  def contact
    redirect_to root_path, notice: "Thanks for your message! We'll be in touch soon."
  end
end
