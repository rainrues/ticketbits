import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import NavBar from './navbar';

const msp = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id]
});

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);