# Preview all emails at http://localhost:3000/rails/mailers/contact_us_mailer
class ContactUsMailerPreview < ActionMailer::Preview
 def new_contact
   body = 'body'
   ContactUsMailer.new_contact(body)
 end
end
