import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants';

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  };
}

export function fetchUsersSuccess(users) {
    return {
      type: FETCH_USERS_SUCCESS,
      users
    };
  }

  export function fetchUsersFailure(error) {
     return {
         type: FETCH_USERS_FAILURE,
         error
     } 
  }