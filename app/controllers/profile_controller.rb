class ProfileController < ApplicationController
  def show
  end

  private

  def user
    @user = User.find(params[:id])
  end
end
