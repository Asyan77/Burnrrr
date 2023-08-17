class User < ApplicationRecord
    has_secure_password
    validates :username, :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6} , allow_nil: true
    before_validation :ensure_session_token

    # has_many :photos
    # dependent: :destroy

    # has_many: albums
    # dependent: :destroy

    #has_one_attached :photo
    has_many_attached :photos


    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        if user && user.authenticate(password)
            user
        else
            nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_token
        save!
        session_token
    end

    def ensure_session_token
        self.session_token ||= generate_unique_token
    end

    private
    def generate_unique_token
        loop do
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end

end
