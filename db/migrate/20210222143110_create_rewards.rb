class CreateRewards < ActiveRecord::Migration[5.2]
  def change
    create_table :rewards do |t|
      t.string :reward_name, :null => false
      t.bigint :user_id

      t.timestamps
    end
  end
end
