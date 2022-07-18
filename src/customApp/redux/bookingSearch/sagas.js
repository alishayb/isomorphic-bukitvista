import { takeLatest, put, call } from "redux-saga/effects";
import actions from "./actions";

const bookingAPI = `https://bv-online-assessment.herokuapp.com/api/bookings/`;

const onSearchRequest = async (bookingCode) =>
  await fetch(`${bookingAPI}${bookingCode}`)
    .then((res) => res.json())
    .catch((error) => error);

const onUpdateRequest = async (bookingCode, config) => 
  await fetch(`${bookingAPI}${bookingCode}/update-eta`, config)
    .then((res) => res.json())
    .catch((error) => error);


function* searchRequest({ type, payload }) {
  try {
    if (type === actions.BOOKING_SEARCH) {
      const { searchCode } = payload;
      const result = yield call(onSearchRequest, searchCode);

      if (result.guest_name) {
        yield put(actions.bookingSearchSuccess(result));
      } else {
        yield put(actions.bookingSearchError(result));
      }

    } else if (type === actions.BOOKING_ARRIVAL) {
      const { code, arrivalTime } = payload;
      const config = {
        method: "PUT",
        headers: {
          "Accept": 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arrival_time: arrivalTime }),
      }; 

      const result = yield call(onUpdateRequest, code, config);
      
      if (result) {
        yield put(actions.bookingArrivalSuccess(result));
      } else {
        yield put(actions.bookingSearchError(result));
      }
    }

  } catch (error) {
    yield put(actions.bookingSearchError(error));
  }
}
export default function* root() {
  yield takeLatest(
    [actions.BOOKING_SEARCH, actions.BOOKING_ARRIVAL],
    searchRequest
  );
}
