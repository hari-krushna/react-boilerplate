
import { fromJS } from 'immutable';
import { FETCH_USERS_SUCCESS, FETCH_USERS_REQUEST, FETCH_USERS_FAILURE } from './constants';

const initialState = fromJS({
    userData: {
        users: [],
      },
      users:[],
  loading: false,
  error: false,
});

function testableReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'users'], []);
    case FETCH_USERS_SUCCESS:
      return state
        .setIn(['userData', 'users'], action.users)
        .set('loading', false)
        .set('error', false);
    case FETCH_USERS_FAILURE:
      return state
      .set('error', action.error)
      .set('loading', false);
    default:
      return state;
  }
}

export default testableReducer;
