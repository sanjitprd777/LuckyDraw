class User < ApplicationRecord
    has_secure_password
    has_many :participates, :class_name => 'Participate', :dependent => :destroy

    validates_presence_of :email
    validates_uniqueness_of :email
end