class ContactUsMailer < ApplicationMailer
 default from: ENV['MAIL_FROM']

 def new_contact(body)
   @body = body
   mail(to: ENV['MAIL_FROM'], subject: 'Message from Belcher')
 end
end
