class RewardWorker
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform

    puts("**********************")
    puts("Reward Worker Invoked")
    puts("**********************")


    # Step 1: Get all 'Active Events'
    event_finished = []
    active_events = Event.where(active: 1)
 
    active_events.each do |ae|
      event_end_date = ae.startDate + ae.day
      if event_end_date <= Date.today
        ae.update_attributes(day: 0, active: 0, finished: 1)
        event_finished << ae
      else
        newDay = ae.day - 1
        ae.update_attributes(day: newDay)
      end
    end


    # Step 2: Update all 'Finished Events' reward
    event_finished.each do |ef|
      participate_user = []
      ef.participates.each do |ep|
        participate_user << ep.user_id
      end
      
      event_reward = []
      ef.rewards.each do |er|
        event_reward << er
      end

      participate_user.shuffle
      event_reward.shuffle

      reward_loop = [participate_user.size, event_reward.size].min

      for i in 1..reward_loop
        user_id = participate_user.shift
        get_event_reward = event_reward.shift
        get_event_reward.update_attributes(user_id: user_id)
      end
    end


    # Step 3: Update date for 'Upcoming Events'
    upcoming_events = Event.where(active: 0, finished: 0)

    upcoming_events.each do |ue|
      if ue.startDate === Date.today
        ue.update_attributes(active: 1)
      end
    end

  end
end