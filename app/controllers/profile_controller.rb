class ProfileController < ApplicationController
  def show
    @recents = current_user.recents
  end

  private

  def user
    @user = User.find(params[:id])
  end
end
