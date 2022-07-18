import React, { Component } from 'react';
import Form from '../../../components/uielements/form';
import BookingSearch from './bookingSearch';

class BookingForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.bookingSearch(values.bookingCode)
      }
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <BookingSearch form={this.props.form} />      
      </Form>
    );
  }
}

const WrappedBookingForm = Form.create()(BookingForm);
export default WrappedBookingForm;
