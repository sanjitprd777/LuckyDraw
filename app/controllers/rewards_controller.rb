class RewardsController < ApplicationController
    def create
        reward = Reward.create!(
            event_id: params['event_id'],
            reward_name: params['reward_name']
        )
        if reward
            render json: {
                status: :created
            }
        else
            render json: { status: 500 }
        end
    end

    def index
        @rewards = Reward.where(event_id: params['event_id'])
        event_name = Event.find_by(id: params['event_id']).name
        event_rewards = []
        
        @rewards.each do |r|
            user = User.find_by(id: r.user_id)
            event_rewards << [user.email, r.reward_name]
        end

        event_winner = {
            event_name: event_name,
            event_rewards: event_rewards
        }

        puts(event_winner)
        
        if event_rewards.empty?
            render json: {
                status: :ok,
                event_winner: event_winner,
                found: false
            }
        else
            render json: {
                success: :ok,
                event_winner: event_winner,
                found: true
            } 
        end
    end
end