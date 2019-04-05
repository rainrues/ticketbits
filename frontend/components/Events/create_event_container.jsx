import { connect } from 'react-redux';
import CreateEvent from './create_event';
import { createEvent } from '../../actions/event_actions';

const msp = (state) => {
  return ({
    event: {
      title: '', venue_name: '', address: '', 
      address2: '', city: '', state: '', 
      country: '', zip: '', start_date: '', 
      start_time: '', end_date: '', end_time: '',
      image_url: '', about: '', age: '', 
      num_tickets: '', price: '', 
      user_id: state.entities.users[state.session.id]
    },
    errors: state.errors.events,
    // session: state.session,
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = (dispatch) => {
  return ({
    createEvent: (event) => dispatch(createEvent(event))
  });
};

export default connect(msp, mdp)(CreateEvent);