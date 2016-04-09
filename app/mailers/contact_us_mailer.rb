class ContactUsMailer < ApplicationMailer
 default from: ENV['MAIL_FROM']

 def contact_us
   email = ENV['MAIL_FROM']
   mail(to: email, subject: 'Message from Belcher')
 end
end
