# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.delete_all
User.delete_all
Category.delete_all
Categorization.delete_all

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
  start_time: "22:00",
  end_time: "04:00",
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
  start_time: "22:00",
  end_time: "04:00",
  start_date: Date.parse("May 14 2019"),
  end_date: Date.parse("May 16 2019"),
  user_id: rain[:id], 
  image_url: "https://images.unsplash.com/photo-1550393763-e826a44bf2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
)

c = Event.create!(
  title: "Queer Brunch",
  start_date: Date.parse("June 9 2019"),
  end_date: Date.parse("June 9 2019"),
  start_time: "14:00",
  end_time: "16:00",
  age: 18,
  price: 0,
  venue_name: "Breuklyn",
  address: "15 Franklin ave",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "Come have brunch with fellow queers. Feed yourself, treat yourself, 
    and build community",
  num_tickets: 15,
  user_id: mckenna[:id],
  image_url: "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)

d = Event.create!(
  title: "Sunset picnic",
  age: 18,
  price: 15,
  num_tickets: 30,
  about: "Come hike a beautiful pass, ending on an overlook with a great view 
    of the Hudson valley and the Hudson river. Food will be provided. Please 
    bring a flashlight for the hike back down. Price does not include train ticket.",
  venue_name: "Harlem 125 Station",
  address: "128 Dr Martin Luther King Jr. blvd",
  city: "Harlem",
  state: "NY",
  zip: "10035",
  country: "United States of America",
  start_time: "15:00",
  end_time: "20:00",
  start_date: Date.parse("May 14 2019"),
  end_date: Date.parse("May 14 2019"),
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
)

e = Event.create!(
  title: "Upstate Camping",
  age: 18,
  price: 100,
  num_tickets: 20,
  about: "We will be taking the train upstate to camp for the weekend. Price 
    includes train ticket, food for the weekend, and other camping necessities. 
    Please bring your own sleeping bag and anything else you need to feel 
    comfortable.",
  venue_name: "Harlem 125 Station",
  address: "128 Dr Martin Luther King Jr. blvd",
  city: "Harlem",
  state: "NY",
  zip: "10035",
  country: "United States of America",
  start_time: "16:00",
  end_time: "16:00",
  start_date: Date.parse("July 23 2019"),
  end_date: Date.parse("July 25 2019"),
  user_id: kel[:id], 
  image_url: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
)

f = Event.create!(
  title: "Birthday Party",
  start_date: Date.parse("April 6 2019"),
  end_date: Date.parse("April 7 2019"),
  start_time: "22:00",
  end_time: "4:00",
  age: 18,
  price: 0,
  venue_name: "Narnia",
  address: "521 Eastern Parkway",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "A night to celebrate, dance, and bring in my new year",
  num_tickets: 100,
  user_id: rain[:id],
  image_url: "https://images.unsplash.com/photo-1483201811930-882b8be091e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
)

g = Event.create!(
  title: "Families Belong Together - Benefit Show",
  start_date: Date.parse("August 6 2019"),
  end_date: Date.parse("August 7 2019"),
  start_time: "22:00",
  end_time: "4:00",
  age: 21,
  price: 30,
  venue_name: "Founders Lab, NYC",
  address: "28 Montrose st",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "Come dance to fresh beats and spend your money on raffel items from some 
    of NYC's most ethically focused bussinesses and brands. Seperating families is
    a crime against humanity and we are here to raise money in order to reunite as 
    many as possible. If you do nothing, you are a part of the problem.",
  num_tickets: 100,
  user_id: haley[:id],
  image_url: "https://images.unsplash.com/photo-1524606625607-19a826875531?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)

h = Event.create!(
  title: "Full Moon Fiesta",
  start_date: Date.parse("April 16 2019"),
  end_date: Date.parse("April 17 2019"),
  start_time: "22:00",
  end_time: "4:00",
  age: 21,
  price: 15,
  venue_name: "Founders Lab, NYC",
  address: "28 Montrose st",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "Come celebrate the full moon with dance and ritual. There will be a great 
    DJ as well as on site tarot card readings and mini herbal tea consultations.",
  num_tickets: 100,
  user_id: mckenna[:id],
  image_url: "https://images.unsplash.com/photo-1502351799375-da153b6e80f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
)

i = Event.create!(
  title: "New fashion, Fashion Show",
  start_date: Date.parse("June 6 2019"),
  end_date: Date.parse("June 7 2019"),
  start_time: "22:00",
  end_time: "4:00",
  age: 21,
  price: 30,
  venue_name: "Founders Lab, NYC",
  address: "28 Montrose st",
  city: "Brooklyn",
  state: "New York",
  country: "United States of America",
  zip: 11116,
  about: "The night will kick off with a runway show by designer, Moona Marie, 
    and will evolve into a full on party. This is a night you aren't going to want to miss.",
  num_tickets: 100,
  user_id: haley[:id],
  image_url: "https://images.unsplash.com/photo-1493655430214-3dd7718460bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
)


# EXAMPLES FROM EVENT_SITE

# photofile = File.open("app/assets/images/ticket.jpg")
# m.photo.attach(io: photofile, filename: "ticket.jpg")
# m.save!

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

music = Category.create!(
  name: "Music"
)

party = Category.create!(
  name: "Party"
)

business = Category.create!(
  name: "Business"
)

activism = Category.create!(
  name: "Activism"
)

lgbtq = Category.create!(
  name: "lgbtq"
)

food = Category.create!(
  name: "Food"
)

nature = Category.create!(
  name: "Nature"
)

arts = Category.create!(
  name: "Arts"
)

#EVENT_CATEGORIZATIONS

one = Categorization.create!(
  event_id: a[:id],
  category_id: party[:id]
)

two = Categorization.create!(
  event_id: a[:id],
  category_id: music[:id]
)

three = Categorization.create!(
  event_id: b[:id],
  category_id: party[:id]
)

four = Categorization.create!(
  event_id: b[:id],
  category_id: music[:id]
)

five = Categorization.create!(
  event_id: c[:id],
  category_id: food[:id]
)

six = Categorization.create!(
  event_id: c[:id],
  category_id: lgbtq[:id]
)

seven = Categorization.create!(
  event_id: d[:id],
  category_id: food[:id]
)

eight = Categorization.create!(
  event_id: d[:id],
  category_id: nature[:id]
)

nine = Categorization.create!(
  event_id: e[:id],
  category_id: nature[:id]
)

ten = Categorization.create!(
  event_id: f[:id],
  category_id: party[:id]
)

eleven = Categorization.create!(
  event_id: g[:id],
  category_id: party[:id]
)

twelve = Categorization.create!(
  event_id: g[:id],
  category_id: activism[:id]
)

thirteen = Categorization.create!(
  event_id: g[:id],
  category_id: music[:id]
)

fourteen = Categorization.create!(
  event_id: h[:id],
  category_id: party[:id]
)

fifteen = Categorization.create!(
  event_id: h[:id],
  category_id: lgbtq[:id]
)

sixteen = Categorization.create!(
  event_id: h[:id],
  category_id: nature[:id]
)

seventeen = Categorization.create!(
  event_id: i[:id],
  category_id: party[:id]
)

eighteen = Categorization.create!(
  event_id: i[:id],
  category_id: arts[:id]
)