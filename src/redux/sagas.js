import { all } from 'redux-saga/effects';
import devSagas from '../customApp/redux/sagas';

export default function* rootSaga(getState) {
  yield all([
    devSagas(),
  ]);
}
