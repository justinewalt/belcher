class ContactUsMailerPreview < ActionMailer::Preview
 def new_contact_preview
   ContactUsMailer.new_contact.deliver_now
 end
end