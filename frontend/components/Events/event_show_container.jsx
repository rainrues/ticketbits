import { connect } from 'react-redux';
import EventShow from './event_show';
import { fetchEvent } from '../../actions/event_actions';
import { fetchUser } from '../../actions/user_actions';

const msp = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId],
});

const mdp = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(msp, mdp)(EventShow);