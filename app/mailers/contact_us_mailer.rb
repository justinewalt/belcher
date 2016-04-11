class ContactUsMailer < ApplicationMailer
 default from: ENV['MAIL_FROM']

 def contact_form(body)
    binding.pry
   mail(to: ENV['MAIL_FROM'], subject: 'Message from Belcher', body: body)
 end
end
