class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name, :null => false
      t.date :startDate, :null => false
      t.integer :day, :default => 1
      t.integer :winner, :default => 1
      t.integer :active, :default => 1
      t.integer :finished, :default => 1

      t.timestamps
    end
  end
end