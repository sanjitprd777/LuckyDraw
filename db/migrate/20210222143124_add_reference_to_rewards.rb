class AddReferenceToRewards < ActiveRecord::Migration[5.2]
  def change
    add_reference :rewards, :event, foreign_key: true
  end
end
