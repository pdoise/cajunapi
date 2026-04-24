class PagesController < ApplicationController
  skip_before_action :authenticate_user!

  def landing
    @featured_recipes = Recipe.with_attached_image.order(created_at: :desc).limit(6)
  end
end
