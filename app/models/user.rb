class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, omniauth_providers: [:facebook]

  def self.from_omniauth(facebook_info)
    where(provider: facebook_info.provider, uid: facebook_info.uid).first_or_create do |user|
      user.email = facebook_info.info.email
      user.password = Devise.friendly_token
    end
  end

  validates_uniqueness_of :username
  validates_uniqueness_of :email
  has_one :profile
  has_many :recents
end
