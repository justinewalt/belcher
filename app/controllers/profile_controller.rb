class ProfileController < ApplicationController
  def show
    @recents = Recent.all
  end

  private

  def user
    @user = User.find(params[:id])
  end
end
