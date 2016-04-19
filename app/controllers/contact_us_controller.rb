class ContactUsController < ApplicationController
  def new_contact
    ContactUsMailer.delay.new_contact(params[:body])
    head :ok
    flash[:notice] = "Your Message has been sent!"
  end

  def index
  end
end
