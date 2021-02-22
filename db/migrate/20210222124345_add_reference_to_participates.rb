class AddReferenceToParticipates < ActiveRecord::Migration[5.2]
  def change
    add_reference :participates, :user, foreign_key: true
    add_reference :participates, :event, foreign_key: true
  end
end
