class ContactUsController < ApplicationController
  def new_contact
    ContactUsMailer.new_contact(params[:body]).deliver_now
    redirect_to root_path
  end
end
