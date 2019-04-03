# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.create!(start_date: 11142019, end_date: 11152019, title: "Dance the Night Away", start_time: 2200, end_time: 0400, age: 21, price: 15, location: "The Delux", num_tickets: 300, user_id: 1)
Event.create!(start_date: 05142019, end_date: 05162019, title: "Beach Festival", start_time: 2200, end_time: 0400, age: 21, price: 150, location: "Riche Beach", num_tickets: 3000, user_id: 1)