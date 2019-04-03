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



#EVENTS & EVENT_CATEGORIES

a = Event.new(
  title: "It's Sahar's Birthday",
  description: "Come to Memorial Glade this Tuesday for an event you aren't likely to forget!  Once a year, we get a chance to celebrate Sahar and all that she has accomplished, and the time has finally come.
  There will be Cheeseboard pizza provided, but come early because we will run out",
  venue_name: "Memorial Glade",
  address: "University Drive",
  city: "Berkeley",
  state: "CA",
  zip: "94708",
  country: "United States of America",
  start_time: Time.parse("23:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Nick",
  organizer_description: "Nick loves throwing events for Sahar!",
  user_id: nick[:id]
)

photofile = File.open("app/assets/images/birthday.jpg")
a.photo.attach(io: photofile, filename: "birthday.jpg")
a.save!

EventCategory.create!(
    event_id: a.id,
    category_id: party.id
  )

b = Event.new(
  title: "San Francisco Pirate Party",
  description: "Yo Ho Ho! While the 1700s were by far one of the best centuries of our existence. The sea-faring fashion was uhh-mayy-zing. The lingo was super dope, savvy? And the shanty's were better than watching a landlubber get hornswaggled. So don't be an old Sea Dog, flying the yellow jack! Stike ye colors, splice the mainbrace, and grab a pint o' grog! Even the old salts will be three sheets to the wind, ye scallywag!
  Network with the Scourges of the Seven Seas themselves, and win a chance to visit Davey Jones' Locker! So bring that spring upon 'er, and batten down the hatches for one great party, bucko!",
  venue_name: "The Docks",
  address: "1 Dock Place",
  city: "San Francisco",
  state: "CA",
  zip: "94321",
  country: "United States of America",
  start_time: Time.parse("14:00"),
  start_date: Date.parse("September 30"),
  organizer_name: "Jolly Roger Industries",
  organizer_description: "Helping worthless maggots go on account since 1646!",
  user_id: nick[:id]
)

photofile = File.open("app/assets/images/map.jpg")
b.photo.attach(io: photofile, filename: "map.jpg")
b.save!

EventCategory.create!(
    event_id: b.id,
    category_id: party.id
  )

c = Event.new(
  title: "Kitten Parade",
  description: "All of the Kittens in San Francisco will be parading through the city this Sunday.  The parade will start on the golden gate bridge, and from there, they will disperse in any direction they choose!  This year, we will be providing laser pointers to all attendees in an effort to keep the parade more cohesive!",
  venue_name: "The Golden Gate Bridge",
  address: "321 Golden Gate Bridge Boulevard",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "United States of America",
  start_time: Time.parse("02:00"),
  start_date: Date.parse("August 19"),
  organizer_name: "The SPCA",
  organizer_description: "CATS CATS CATS",
  user_id: jane[:id]
)

photofile = File.open("app/assets/images/kittens.jpg")
c.photo.attach(io: photofile, filename: "kittens.jpg")
c.save!

EventCategory.create!(
    event_id: c.id,
    category_id: arts.id
  )

d = Event.new(
  title: "Dance Party",
  description: "Dance the night away!",
  venue_name: "Church of 8 Wheels",
  address: "554 Fillmore St",
  city: "San Francisco",
  state: "CA",
  zip: "94117",
  country: "United States of America",
  start_time: Time.parse("13:00"),
  start_date: Date.parse("August 19"),
  organizer_name: "Fun Company",
  organizer_description: "We only serve fun!",
  user_id: jane[:id]
)

photofile = File.open("app/assets/images/mosh.jpg")
d.photo.attach(io: photofile, filename: "mosh.jpg")
d.save!

EventCategory.create!(
    event_id: d.id,
    category_id: party.id
  )

e = Event.new(
  title: "Pizza Networking Social",
  description: "Pizza is the future! Come find your way into this budding marker and talk with industry greats!",
  venue_name: "Golden Boy Pizza",
  address: "542 Green St",
  city: "San Francisco",
  state: "CA",
  zip: "94133",
  country: "United States of America",
  start_time: Time.parse("06:00"),
  start_date: Date.parse("September 4"),
  organizer_name: "The Pizza Conglomerate",
  organizer_description: "Controlling the pizza business by hostile take overs since 1983!",
  user_id: demo[:id]
)

photofile = File.open("app/assets/images/audience.jpg")
e.photo.attach(io: photofile, filename: "audience.jpg")
e.save!

EventCategory.create!(
    event_id: e.id,
    category_id: business.id
  )

f = Event.new(
  title: "Painting Class",
  description: "This is a finger-painting only event.",
  venue_name: "SF MOMA",
  address: "151 3rd St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  start_time: Time.parse("09:00"),
  start_date: Date.parse("August 21"),
  organizer_name: "Let's Paint!",
  organizer_description: "Painting! It's not boring anymore!",
  user_id: john[:id]
)

photofile = File.open("app/assets/images/balloons.jpg")
f.photo.attach(io: photofile, filename: "balloons.jpg")
f.save!

EventCategory.create!(
    event_id: f.id,
    category_id: arts.id
  )


g = Event.new(
  title: "Hamburger City",
  description: "In every person's lifetime, they are given a chance to witness something incredible.  For many, their chance has come.  From October 12 through the end of May, The Palace of Fine Arts will be showing the world reknowned 'Hamburger City'.  Many have described it as 'awe-inspiring' and 'life-changing,' leaving the exhibit with their notion of reality shifted.
   Critics around the world are saying the same thing, 'Mere words could never capture the earth-shaking gravity of this work'.  Philosophers from all over are retiring, claiming that after seeing 'Hamburger City', there are no more questions that need answers.  Tickets are limited so buy soon.  Black tie only.",
  venue_name: "The Palace of Fine Arts",
  address: "3301 Lyon St",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("02:00"),
  start_date: Date.parse("October 12"),
  organizer_name: "Magna Opera and More!",
  organizer_description: "We know art.",
  user_id: john[:id]
)

photofile = File.open("app/assets/images/bike.jpg")
g.photo.attach(io: photofile, filename: "bike.jpg")
g.save!

EventCategory.create!(
    event_id: g.id,
    category_id: arts.id
  )

h = Event.new(
  title: "Burrito and Beer Festival",
  description: "All you can eat burritos and beer! Enjoy the final days of summer the best way possible, relaxing and eating in the sun (or fog)!",
  venue_name: "Mission Dolores Park",
  address: "Dolores St & 19th St",
  city: "San Francisco",
  state: "CA",
  zip: "94114",
  country: "United States of America",
  start_time: Time.parse("05:00"),
  start_date: Date.parse("September 15"),
  organizer_name: "The San Francisco Advisory Council on Beer and Burritos",
  organizer_description: "Protecting the City by the Bay from subpar beer and burritos since 1946.",
  user_id: john[:id]
)

photofile = File.open("app/assets/images/concert.jpg")
h.photo.attach(io: photofile, filename: "concert.jpg")
h.save!

EventCategory.create!(
    event_id: h.id,
    category_id: food.id
  )

i = Event.new(
  title: "SoMa Yogathon",
  description: "Greet the dawn at AT&T park for our monthly Yogathon with Rep. Nancy Pelosi!",
  venue_name: "AT&T Park",
  address: "24 Willie Mays Plaza",
  city: "San Francisco",
  state: "CA",
  zip: "94107",
  country: "United States of America",
  start_time: Time.parse("22:00"),
  start_date: Date.parse("December 13"),
  organizer_name: "The Office of Nancy Pelosi",
  organizer_description: "Yay yoga!",
  user_id: demo[:id]
)

photofile = File.open("app/assets/images/dj.jpg")
i.photo.attach(io: photofile, filename: "dj.jpg")
i.save!

EventCategory.create!(
    event_id: i.id,
    category_id: health.id
  )

j = Event.new(
  title: "Vote",
  description: "Literally, please just vote.",
  venue_name: "Your Polling Place",
  address: "1 Your Polling Place Rd",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("00:00"),
  start_date: Date.parse("November 9"),
  organizer_name: "Please Vote",
  organizer_description: "It's your civc duty!",
  user_id: demo[:id]
)

photofile = File.open("app/assets/images/food.jpg")
j.photo.attach(io: photofile, filename: "food.jpg")
j.save!

EventCategory.create!(
    event_id: j.id,
    category_id: business.id
  )

k = Event.new(
  title: "Midnight Marathon",
  description: "Everyone's favorite marathon is back! Despite permit set backs due to last year's glowstick incident, we're back and better than ever!  BYOhead-lamp and reflective gear.",
  venue_name: "The Bay Bridge",
  address: "1 Bay Bridge Park",
  city: "San Francisco",
  state: "CA",
  zip: "94123",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "The Marathon Brothers",
  organizer_description: "Party like it's 490 BCE!",
  user_id: demo[:id]
)

photofile = File.open("app/assets/images/skateboard.jpg")
k.photo.attach(io: photofile, filename: "skateboard.jpg")
k.save!

EventCategory.create!(
    event_id: k.id,
    category_id: health.id
  )

l = Event.new(
  title: "How Many Times Can You Watch 'The Room'?",
  description: "Last person standing wins a TGIFriday's gift card.",
  venue_name: "The Metreon",
  address: "135 4th St",
  city: "San Francisco",
  state: "CA",
  zip: "94103",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "Movies R Us",
  organizer_description: "We're big picture people!",
  user_id: demo[:id]
)

photofile = File.open("app/assets/images/spin.jpg")
l.photo.attach(io: photofile, filename: "spin.jpg")
l.save!

EventCategory.create!(
    event_id: l.id,
    category_id: arts.id
  )

m = Event.new(
  title: "Lucyfest",
  description: "Lucy is the best dog ever and deserves to be celebrated",
  venue_name: "The Fillmore",
  address: "1805 Geary Blvd",
  city: "San Francisco",
  state: "CA",
  zip: "94115",
  country: "United States of America",
  start_time: Time.parse("04:00"),
  start_date: Date.parse("September 3"),
  organizer_name: "Sahar",
  organizer_description: "I love Lucy.",
  user_id: sahar[:id]
)

photofile = File.open("app/assets/images/ticket.jpg")
m.photo.attach(io: photofile, filename: "ticket.jpg")
m.save!

EventCategory.create!(
    event_id: m.id,
    category_id: music.id
  )

#Tickets

Event.all.each do |event|
  Ticket.create!(
    event_id: event.id,
    price: 10,
    quantity: 1000,
    name: "General Admission"
  )
end

Event.create!(start_date: 11142019, end_date: 11152019, title: "Dance the Night Away", start_time: 2200, end_time: 0400, age: 21, price: 15, location: "The Delux", num_tickets: 300, user_id: 1)
Event.create!(start_date: 05142019, end_date: 05162019, title: "Beach Festival", start_time: 2200, end_time: 0400, age: 21, price: 150, location: "Riche Beach", num_tickets: 3000, user_id: 1)