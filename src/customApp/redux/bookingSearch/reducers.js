import actions from './actions';

const initState = {
  searchCode: '',
  result: {},
  loading: false,
  error: false,
  setTime: '',
  showArrivalNotif: false
}

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.BOOKING_SEARCH:
      return {
        ...state,
        loading: true,
        showArrivalNotif: false,
        searchCode: action.payload.searchCode
      };
    case actions.BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        result: action.payload.result,
      };
    case actions.BOOKING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        result: action.payload.error
      };
    case actions.BOOKING_ARRIVAL:
      return {
        ...state,
        loading: true,
        showArrivalNotif: false,
        setTime: action.payload.arrivalTime
      };
    case actions.BOOKING_ARRIVAL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        showArrivalNotif: true,
        result: action.payload.result
      };
    default:
      return state;
  }
}
