class CreateBrewDays < ActiveRecord::Migration[7.1]
  def change
    create_table :brew_days do |t|
      t.integer :quantity_produced, default: 0
      t.string :type_of_grain
      t.boolean :pickup_only, default: true
      t.boolean :provides_container, default: false

      t.timestamps
    end
  end
end
