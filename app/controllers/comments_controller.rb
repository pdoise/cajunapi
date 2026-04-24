class CommentsController < ApplicationController
  before_action :set_recipe

  def create
    @comment = @recipe.comments.build(comment_params)
    @comment.user = current_user
    @comment.save
    redirect_to user_recipe_path(@user, @recipe)
  end

  def destroy
    comment = @recipe.comments.find(params[:id])
    comment.destroy if comment.user == current_user
    redirect_to user_recipe_path(@user, @recipe)
  end

  private

  def set_recipe
    @user   = User.find(params[:user_id])
    @recipe = @user.recipes.find(params[:recipe_id])
  end

  def comment_params
    params.require(:comment).permit(:content)
  end
end
