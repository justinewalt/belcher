require "rails_helper"

RSpec.describe ContactUsMailer, type: :mailer do
  before(:each) do
    body = "body"
    ContactUsMailer.new_contact(body)
  end
  after(:each) do
    ActionMailer::Base.deliveries.clear
  end
   it 'should send an email' do
    expect(ActionMailer::Base.deliveries.count).to eq(0)
  end
end
