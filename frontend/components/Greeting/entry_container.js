import EntryForm from './entry';
import { check_email } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => ({
  email: state.session.email,
  errors: Object.values(state.errors)
});

const mdp = dispatch => ({
  check_email: (email) => dispatch(check_email(email))
});

export default connect(msp, mdp)(EntryForm);