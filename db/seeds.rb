# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.delete_all
User.delete_all
# Categories.delete_all


#USERS

demo = User.create!(
  email: "demo@demo.com",
  password: "password",
  first_name: "Demo",
  last_name: "Demo"
)

rain = User.create!(
  email: "rainrues@gmail.com",
  password: "password",

  first_name: "Rain",
  last_name: "Rues"
)

mckenna = User.create!(
  email: "mckenna@gmail.com",
  password: "password",
  first_name: "McKenna",
  last_name: "Potter"
)

kel = User.create!(
  email: "kel@gmail.com",
  password: "password",
  first_name: "Kel",
  last_name: "Bug"
)

haley = User.create!(
  email: "haley@gmail.com",
  password: "password",
  first_name: "Haley",
  last_name: "Smith"
)


#EVENTS
#STILL NEED TO ADD PHOTOS

a = Event.create!(
  title: "Dance the Night Away",
  age: 21,
  price: 15,
  num_tickets: 300,
  about: "Come dance all night with us at our little slice of heaven. Snacks 
    and non-alcoholic beverages provided.",
  venue_name: "Narnia",
  address: "521 Eastern Parkway",
  city: "Brooklyn",
  state: "NY",
  zip: "11216",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  end_time: Time.parse("04:00"),
  start_date: Date.parse("November 14 2019"),
  end_date: Date.parse("November 15 2019"),
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1554015157-e88b89214f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)

b = Event.create!(
  title: "Beach Festival",
  age: 21,
  price: 150,
  num_tickets: 3000,
  about: "Come dance all night with us at our little slice of heaven. Snacks 
    and non-alcoholic beverages provided.",
  venue_name: "Riche Beach",
  address: "521 Eastern Parkway",
  city: "Brooklyn",
  state: "NY",
  zip: "11216",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  end_time: Time.parse("04:00"),
  start_date: Date.parse("May 14 2019"),
  end_date: Date.parse("May 16 2019"),
  user_id: rain[:id], 
  image_url: "https://images.unsplash.com/photo-1550393763-e826a44bf2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
)

c = Event.create!(
  title: "Birthday Party",
  start_date: Date.parse("April 6 2019"),
  end_date: Date.parse("April 7 2019"),
  start_time: Time.parse("22:00"),
  end_time: Time.parse("4:00"),
  age: 21,
  price: 20,
  venue_name: "Founders Lab, NYC",
  address: "28 Montrose st",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "A night to celebrate, dance, and bring in my new year",
  num_tickets: 100,
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1483201811930-882b8be091e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
)

d = Event.create!(
  title: "Dance the Night Away",
  age: 21,
  price: 15,
  num_tickets: 300,
  about: "Come dance all night with us at our little slice of heaven. Snacks 
    and non-alcoholic beverages provided.",
  venue_name: "Narnia",
  address: "521 Eastern Parkway",
  city: "Brooklyn",
  state: "NY",
  zip: "11216",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  end_time: Time.parse("04:00"),
  start_date: Date.parse("November 14 2019"),
  end_date: Date.parse("November 15 2019"),
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1554015157-e88b89214f7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)

e = Event.create!(
  title: "Beach Festival",
  age: 21,
  price: 150,
  num_tickets: 3000,
  about: "Come dance all night with us at our little slice of heaven. Snacks 
    and non-alcoholic beverages provided.",
  venue_name: "Riche Beach",
  address: "521 Eastern Parkway",
  city: "Brooklyn",
  state: "NY",
  zip: "11216",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  end_time: Time.parse("04:00"),
  start_date: Date.parse("May 14 2019"),
  end_date: Date.parse("May 16 2019"),
  user_id: rain[:id], 
  image_url: "https://images.unsplash.com/photo-1550393763-e826a44bf2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
)

f = Event.create!(
  title: "Birthday Party",
  start_date: Date.parse("April 6 2019"),
  end_date: Date.parse("April 7 2019"),
  start_time: Time.parse("22:00"),
  end_time: Time.parse("4:00"),
  age: 21,
  price: 20,
  venue_name: "Founders Lab, NYC",
  address: "28 Montrose st",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "A night to celebrate, dance, and bring in my new year",
  num_tickets: 100,
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1483201811930-882b8be091e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
)


# EXAMPLE OF HOW TO DEAL WITH CATEGORIES FROM EVENT_SITE

# m = Event.new(
#   title: "Lucyfest",
#   description: "Lucy is the best dog ever and deserves to be celebrated",
#   venue_name: "The Fillmore",
#   address: "1805 Geary Blvd",
#   city: "San Francisco",
#   state: "CA",
#   zip: "94115",
#   country: "United States of America",
#   start_time: Time.parse("04:00"),
#   start_date: Date.parse("September 3"),
#   organizer_name: "Sahar",
#   organizer_description: "I love Lucy.",
#   user_id: sahar[:id]
# )

# photofile = File.open("app/assets/images/ticket.jpg")
# m.photo.attach(io: photofile, filename: "ticket.jpg")
# m.save!

# EventCategory.create!(
#     event_id: m.id,
#     category_id: music.id
#   )

# #Tickets

# Event.all.each do |event|
#   Ticket.create!(
#     event_id: event.id,
#     price: 10,
#     quantity: 1000,
#     name: "General Admission"
#   )
# end


# Categories

# music = Category.create!(
#   name: "Music",
#   description: "Sound!"
# )
# party = Category.create!(
#   name: "Party",
#   description: "Fun!"
# )
# food = Category.create!(
#   name: "Food & Drink",
#   description: "Yum!"
# )

# arts = Category.create!(
#   name: "Arts",
#   description: "Wow!"
# )

# business = Category.create!(
#   name: "Business",
#   description: "Networking!"
# )

# health = Category.create!(
#   name: "Health",
#   description: "Good!"
# )

#EVENT_CATEGORIES
# EventCategory.create!(
#     event_id: a.id,
#     category_id: party.id
#   )