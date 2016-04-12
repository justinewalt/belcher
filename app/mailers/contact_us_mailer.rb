class ContactUsMailer < ApplicationMailer
 default from: ENV['MAIL_FROM']

 def new_contact(body)
   mail(to: ENV['MAIL_FROM'], subject: 'Message from Belcher', body: body)
 end

 handle_asynchronously :new_contact
end
