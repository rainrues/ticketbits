import * as eventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS"


export const fetchAllEvents = () => (dispatch) => {
  return eventApiUtil.fetchAllEvents().then(
    (events) => dispatch(receiveAllEvents(events)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON)))
}

export const fetchEvent = (eventId) => (dispatch) => {
  return eventApiUtil.fetchEvent(eventId).then(
    (event) => dispatch(receiveEvent(event)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON)))
}

export const createEvent = (event) => (dispatch) => (
  eventApiUtil.createEvent(event).then(
    (event) => dispatch(receiveEvent(event)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON)))
);

export const updateEvent = (event) => (dispatch) => (
  eventApiUtil.updateEvent(event).then(
    (event) => dispatch(receiveEvent(event)),
    (errors) => dispatch(receiveEventErrors(errors.responseJSON))
  )
);

const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events: events
});

const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event: event
});

const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors: errors
});







// export const fetchUserEvents = userId => dispatch => (
//   eventApiUtil.fetchUserEvents(userId).then(
//     events => dispatch(receiveAllEvents(events)),
//     errors => dispatch(receiveEventErrors(errors.responseJSON))
//   )
// );

// export const getEventsByCategory = category => dispatch => (
//   eventApiUtil.getEventsByCategory(category).then(
//     events => dispatch(receiveAllEvents(events)),
//     errors => dispatch(receiveEventErrors(errors.responseJSON))
//   )
// );