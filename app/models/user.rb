class User < ApplicationRecord

validates :first_name, :last_name, presence: true 
validates :email, presence: true, uniqueness: true
validates :username, presence: true, uniqueness: true
validates :session_token, uniqueness: true
validates :producer_name, uniqueness: true, allow_nil: true
validates :password, length: {minimum: 6}, allow_nil: true  

# belongs_to :location (add in later if implementing location filtering for user dashboard)
# add associations for followers/followees if you get to that bonus
has_many :tickets
has_many :events

after_initialize :ensure_session_token

attr_reader :password

def password=(password)
  @password = password
  self.password_digest = BCrypt::Password.create(password)
end

def reset_session_token! 
  self.session_token = User.generate_session_token
  self.save!
  self.session_token
end

def ensure_session_token 
  self.session_token ||= User.generate_session_token
end

def self.find_by_credentials(username_or_email, password)
  user = User.find_by( username: username_or_email )
  unless user
    user = User.find_by( email: username_or_email )
  end
  return nil unless user && user.is_password?(password)
  user
end

def is_password?(password)
  encrypted_password = BCrypt::Password.new(self.password_digest)
  encrypted_password.is_password?(password)
end

def self.generate_session_token
  SecureRandom.urlsafe_base64(16)
end

end
