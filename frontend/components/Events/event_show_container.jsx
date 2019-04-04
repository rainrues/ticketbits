// import { connect } from 'react-redux';
// import EventShow from './event_show';
// import { fetchEvent } from '../../actions/event_actions';
// import { fetchUser } from '../../actions/user_actions';
// import { fetchAllTickets } from "../../actions/ticket_actions";
// import { getEventTickets } from '../../reducers/selectors';

// const mapStateToProps = (state, ownProps) => ({
//   event: state.entities.events[ownProps.match.params.eventId],
//   tickets: state.entities.tickets
// });

// const mapDispatchToProps = dispatch => ({
//   fetchEvent: id => dispatch(fetchEvent(id)),
//   fetchUser: userId => dispatch(fetchUser(userId)),
//   fetchAllTickets: eventId => dispatch(fetchAllTickets(eventId))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(EventShow);