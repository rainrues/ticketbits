export const fetchAllEvents = () => (
  $.ajax({
    method: 'GET',
    url: '/api/events'
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `/api/events/${id}`,
  })
);


export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: `/api/events`,
    data: { event },
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `/api/events/${event.id}`,
    data: { event }
  })
);
  
export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);



// export const fetchUserEvents = userId => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/users/${userId}/events`,
//   })
// );

// export const getEventsByCategory = name => (
//   $.ajax({
//     method: 'GET',
//     url: `/api/categories/${name}/events`
//   })
// )