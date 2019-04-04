import { connect } from 'react-redux';
import EventIndex from './event_index';
import { fetchAllEvents } from '../../actions/event_actions';

const msp = (state, ownProps) => {
  // debugger
  return { events: Object.values(state.entities.events) };
};

const mdp = (dispatch) => ({
  fetchAllEvents: () => dispatch(fetchAllEvents())
});

export default connect(msp, mdp)(EventIndex);