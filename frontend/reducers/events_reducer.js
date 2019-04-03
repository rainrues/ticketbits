import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      let newEvent = { [action.event.id]: action.event };
      return merge({}, state, newEvent);
    default:
      return state;
  }
}

export default EventsReducer;