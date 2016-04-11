class ContactUsController < ApplicationController
  def new_contact
    ContactUsMailer.new_contact(params[:body]).deliver_now
    flash[:notice] = "Message Sent!"
    redirect_to root_path
  end
end
