class ContactUsController < ApplicationController
  def new_contact
    ContactUsMailer.delay.new_contact(params[:body])
    flash[:notice] = "Your Message has been sent!"
    redirect_to root_path
  end

  def index
  end
end
