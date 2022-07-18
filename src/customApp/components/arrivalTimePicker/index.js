import React, { Component } from "react";
import { TimePickerWrapper } from "./style";
import { Button, TimePicker, Form } from "antd";
import IntlMessages from "../../../components/utility/intlMessages";

const format = "HH:mm";

class ArrivalTimePicker extends Component {
  state = {
    timestring: "",
  };

  updateTime = (time, timestring) => {
    this.setState({ timestring });
  };

  putArrivalTime = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.bookingArrival(
          this.props.bookingCode,
          this.state.timestring
        );
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.putArrivalTime}>
        <TimePickerWrapper>
          <TimePicker format={format} onChange={this.updateTime} />
          <Button htmlType="submit">Set</Button>
        </TimePickerWrapper>
        <IntlMessages id="bookingDetail.arrivalTimeRequest" />
      </Form>
    );
  }
}

const ArrivalPickerForm = Form.create()(ArrivalTimePicker);
export default ArrivalPickerForm;
