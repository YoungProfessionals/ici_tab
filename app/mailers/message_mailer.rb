class MessageMailer < ActionMailer::Base
  default :from => "notification@example.com"
  
  def contact_email(message)
    @message = message
    mail(:to => "florian@ksuchan.de", :subject => "New Email via Contact Form")
  end
end