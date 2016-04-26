class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook]
  has_one :profile
  has_many :recents
  validates_uniqueness_of :username

  def self.from_omniauth(facebook_info)
    facebook_email = facebook_info.info.email
    where(provider: facebook_info.provider, uid: facebook_info.uid).first_or_create do |user|
      user.email = facebook_email
      user.password = Devise.friendly_token
      user.username = facebook_email
    end
  end
end