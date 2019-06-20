import { connect } from 'react-redux';
import Browse from './browse';
import { logout } from '../../actions/session_actions';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Browse);
