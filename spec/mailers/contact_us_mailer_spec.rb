require "rails_helper"

RSpec.describe ContactUsMailer, type: :mailer do
  @body = "body"
  let(:sender) { belcherapp@gmail.com }
  let(:mail) { ContactUsMailer.new_contact(@body).deliver_now }

   it 'should send an email' do
    expect(ActionMailer::Base.deliveries.count).to eq(0)
  end

  it 'sets to' do 
    expect(mail.to).to eq(["belcherapp@gmail.com"])
  end
end
