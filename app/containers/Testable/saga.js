import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_USERS_REQUEST } from 'containers/Testable/constants';
import {
    fetchUsersSuccess,
  fetchUsersFailure,
} from 'containers/Testable/actions';

import request from 'utils/request';

function* fetchUsers() {
  const requestURL = `https://jsonplaceholder.typicode.com/users`;
  try {
    const users = yield call(request, requestURL);
    if (Array.isArray(users)) {
        yield put(fetchUsersSuccess(users));
    }
   
  } catch (err) {
    yield put(fetchUsersFailure(err));
  }
}

export default function* testableData() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers);
}
