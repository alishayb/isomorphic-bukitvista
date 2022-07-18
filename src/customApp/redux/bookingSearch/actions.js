const actions = {
  BOOKING_SEARCH: "BOOKING_SEARCH",
  BOOKING_SUCCESS: "BOOKING_SUCCESS",
  BOOKING_ERROR: "BOOKING_ERROR",
  BOOKING_ARRIVAL: "BOOKING_ARRIVAL",
  BOOKING_ARRIVAL_SUCCESS: "BOOKING_ARRIVAL_SUCCESS ",

  bookingSearch: searchCode => ({
    type: actions.BOOKING_SEARCH,
    payload: { searchCode },
  }),

  bookingSearchSuccess: result => ({
    type: actions.BOOKING_SUCCESS,
    payload: { result },
  }),

  bookingSearchError: (error) => ({
    type: actions.BOOKING_ERROR,
    payload: { error }
  }),

  bookingArrival: (code, arrivalTime) => ({
    type: actions.BOOKING_ARRIVAL,
    payload: { code, arrivalTime }
  }),

  bookingArrivalSuccess: (result) => ({
    type: actions.BOOKING_ARRIVAL_SUCCESS,
    payload: { result }
  }),
};
export default actions;
