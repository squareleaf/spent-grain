class CreateGrainRequests < ActiveRecord::Migration[7.1]
  def change
    create_table :grain_requests do |t|
      t.float :desired_quantity, default: 0.0
      t.float :minimum_quantity, default: 0.0
      t.float :maximum_quantity, default: 0.0
      t.boolean :accepts_drop_off, default: false
      
      t.timestamps
    end
  end
end
