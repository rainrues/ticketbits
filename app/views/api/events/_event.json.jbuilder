json.extract! event, :id,
                     :title,
                     :age,
                     :low_price,
                     :price,
                     :about,
                     :num_tickets,
                     :image_url,
                     :venue_name,
                     :address,
                     :address2,
                     :city,
                     :state,
                     :zip,
                     :country,
                     :start_time,
                     :end_time,
                     :start_date,
                     :end_date,
                     :user_id


json.start_time_object do
  json.hour event.start_time.hour
  json.minute event.start_time.min
end

json.end_time_object do
  json.hour event.start_time.hour
  json.minute event.start_time.min
end

json.start_date_object do
  json.year event.start_date.year
  json.month event.start_date.month
  json.date event.start_date.day
end

json.end_date_object do
  json.year event.start_date.year
  json.month event.start_date.month
  json.date event.start_date.day
end

# json.photoUrl url_for(event.photo) if event.photo.attached?