class User < ApplicationRecord

validates: :first_name, :last_name, :username, :email, :password_digest, :session_token, presence: true  
validates: :password, length: {minimum: 6}, allow_nil: true  

after_initialize :ensure_session_token

attr_reader :password

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def reset_session_token! 
  self.session_token = self.generate_session_token
  self.save!
  self.session_token
end

def ensure_session_token 
  self.session_token ||= self.generate_session_token
end

def find_by_credentials(username_or_email, password)
  user = User.find_by( username: username_or_email )
  unless user
    user = User.find_by( email: username_or_email )
  end
  return nil unless user && user.valid_password?(password)
  user
end

def is_password?(password)
  encrypted_password = BCrypt::Password.new(self.password_digest)
  encrypted_password.is_password?(password)
end

def generate_session_token
  SecureRandom.urlsafe_base64(16)
end

end
