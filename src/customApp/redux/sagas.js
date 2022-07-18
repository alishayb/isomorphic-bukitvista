import { all } from 'redux-saga/effects';
import bookingSearchSagas from './bookingSearch/sagas';

export default function* devSaga() {
  yield all([bookingSearchSagas()]);
}
