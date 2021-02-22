class Event < ApplicationRecord
    has_many :participates, :class_name => 'Participate', :dependent => :destroy
    has_many :rewards, :class_name => 'Reward', :dependent => :destroy
end
