class AddTicketToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :ticket, :integer, :default => 0
  end
end
