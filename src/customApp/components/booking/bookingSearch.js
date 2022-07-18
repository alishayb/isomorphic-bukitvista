import React, { Component } from "react";
import { Input } from "antd";
import Form from "../../../components/uielements/form";
import IntlMessages from "../../../components/utility/intlMessages";
import { injectIntl } from "react-intl";

const FormItem = Form.Item;

class BookingSearch extends Component {
  checkAlphanumeric = (rule, value, callback) => {
    if (value.match(/^[A-Z|0-9]*$/) === null) {
      callback("Should be combination of numbers & alphabets");
    } else {
      callback();
    }
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { intl } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };

    return (
      <FormItem
        {...formItemLayout}
        label={<IntlMessages id="forms.input.bookingCode" />}
        hasFeedback
      >
        {getFieldDecorator("bookingCode", {
          rules: [
            {
              required: false,
            },
            {
              validator: this.checkAlphanumeric,
            },
          ],
        })(<Input placeholder={intl.formatMessage({id: 'forms.input.bookingCode.placeholder'})} />)}
      </FormItem>
    );
  }
}

export default injectIntl(BookingSearch)
