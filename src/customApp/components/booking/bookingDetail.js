import React from "react";
import Loader from "../../../components/utility/loader";
import HelperText from "../../../components/utility/helper-text";
import Card from "../card";
import ArrivalTimePicker from "../arrivalTimePicker";
import IntlMessages from "../../../components/utility/intlMessages";

const BookingDetail = ({ BookingSearch, bookingArrival }) => {
  const { searchCode, result, loading, error } = BookingSearch;
  if (searchCode == "") {
    return <div />;
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <HelperText text={<IntlMessages id="feedback.alert.errorTitle" />} />;
  }

  const arrival =
    result.arrival_time == "" ? (
      <ArrivalTimePicker bookingArrival={bookingArrival} bookingCode={result.booking_code}/>
    ) : (
      result.arrival_time
    );

  return (
    <Card
      src={result.profile_picture}
      alt={result.guest_name}
      name={result.guest_name}
      property={result.property_name}
      checkIn={result.check_in_date}
      checkOut={result.check_out_date}
      arrival={arrival}
    />
  );
};

export default BookingDetail;
