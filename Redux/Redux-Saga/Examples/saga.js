import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_USER_REQUEST, fetchUserSuccess, fetchUserFailure } from './actions';

// Mock API request
const fetchUserApi = () => {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .catch(error => { throw error });
};

// Worker saga: will be fired on FETCH_USER_REQUEST actions
function* fetchUser() {
  try {
    const user = yield call(fetchUserApi);  // Call the API
    yield put(fetchUserSuccess(user));      // Dispatch success action with user data
  } catch (error) {
    yield put(fetchUserFailure(error.message)); // Dispatch failure action with error message
  }
}

// Watcher saga: watches for FETCH_USER_REQUEST action
function* watchFetchUser() {
  yield takeEvery(FETCH_USER_REQUEST, fetchUser); // For each FETCH_USER_REQUEST action, run fetchUser
}

export default watchFetchUser;
