import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
// import usersReducer from './users_reducer' 
// import entitiesReducer from './entities_reducer';
// import errorsReducer from './errors_reducer';

export default combineReducers({
  session: sessionReducer,
});