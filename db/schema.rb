# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2026_01_29_023317) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "brew_days", force: :cascade do |t|
    t.integer "quantity_produced", default: 0
    t.string "type_of_grain"
    t.boolean "pickup_only", default: true
    t.boolean "provides_container", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "grain_requests", force: :cascade do |t|
    t.float "desired_quantity", default: 0.0
    t.float "minimum_quantity", default: 0.0
    t.float "maximum_quantity", default: 0.0
    t.boolean "accepts_drop_off", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.string "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
