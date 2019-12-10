import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users.js';
import currentUserReducer from './reducers/currentUser.js';
import upcomingConcertsReducer from './reducers/upcomingConcerts.js';


const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  upcomingConcerts: upcomingConcertsReducer
})
// newer version of how middleware is put together
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
