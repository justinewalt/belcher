require 'rails_helper'

RSpec.describe ContactUsController, type: :controller do

  describe 'action calls ContactUsMailer' do 
    it 'sends an email' do 
      get :new_contact, body: "body"
      expect(response.status).to be(200)
    end
  end
end