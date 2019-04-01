import EntryForm from './entry';
import { check_email, login } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
  email: state.session.email,
  match: state.session.match,
  errors: Object.values(state.errors)
});

const mdp = dispatch => ({
  check_email: (email) => dispatch(check_email(email)),
  login: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(EntryForm);