class HomeController < ApplicationController
  def index
  end

  def contact_mailer
    ContactUsMailer.contact_form(params[:body])
    redirect_to root_path
  end
end
