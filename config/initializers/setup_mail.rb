ActionMailer::Base.smtp_settings = {
  :address => "smtp.gmail.com",
  :port => 587,
  :domain => "mail.gmail.com",
  :user_name => "flosukro@gmail.com",
  :password => "356porsche",
  :authentication => "plain",
  :enable_starttls_auto => true
}

ActionMailer::Base.default_url_options[:host] = "localhost:3000"