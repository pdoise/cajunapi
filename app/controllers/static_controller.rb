class StaticController < ApplicationController
  #skip_before_action :authorize

  def index
    render file: Rails.root.join('public', 'index.html')
  end
end