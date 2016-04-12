class ContactUsController < ApplicationController
  def new_contact
    ContactUsMailer.delay.new_contact(params[:body])
    head :ok
  end
end
