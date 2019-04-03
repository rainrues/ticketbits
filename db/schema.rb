# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_04_02_224259) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.integer "age", null: false
    t.integer "low_price"
    t.integer "price", null: false
    t.string "location", null: false
    t.text "about"
    t.integer "num_tickets", null: false
    t.string "image_url"
    t.integer "location_id"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.time "start_time", null: false
    t.time "end_time", null: false
    t.index ["age"], name: "index_events_on_age"
    t.index ["location"], name: "index_events_on_location"
    t.index ["low_price"], name: "index_events_on_low_price"
    t.index ["price"], name: "index_events_on_price"
    t.index ["start_date"], name: "index_events_on_start_date"
    t.index ["title"], name: "index_events_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "producer_name"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "image_url"
    t.integer "location_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["producer_name"], name: "index_users_on_producer_name", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
