import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col } from "antd";
import PageHeader from "../../../components/utility/pageHeader";
import Box from "../../../components/utility/box";
import LayoutWrapper from "../../../components/utility/layoutWrapper";
import IntlMessages from "../../../components/utility/intlMessages";
import basicStyle from "../../../settings/basicStyle";
import actions from "../../redux/bookingSearch/actions";
import BookingValidation from "../../components/booking/bookingValidation"
import BookingDetail from "../../components/booking/bookingDetail";
import notifications from '../../../components/feedback/notification';
import { injectIntl } from 'react-intl'; 

const { bookingSearch, bookingArrival } = actions;

const openNotificationWithIcon = (type, message, description) => {
  notifications[type]({
    message,
    description
  });
};

class GuestPortal extends Component {

  render() {
    const { BookingSearch } = this.props;
    const { rowStyle, colStyle, gutter } = basicStyle;
    const { intl } = this.props;

    if (BookingSearch.showArrivalNotif) {
      const message = intl.formatMessage({id: 'bookingDetail.arrivalTimeSet'})
      openNotificationWithIcon("success", message)
    }

    return (
      <LayoutWrapper>
        <PageHeader>
          <IntlMessages id="sidebar.guestPortal" />
        </PageHeader>
        <Row style={rowStyle} gutter={gutter} justify="start">
          <Col md={24} sm={24} xs={24} style={colStyle}>
            <Box style={{ minHeight: 220 }}>
              <BookingValidation bookingSearch={this.props.bookingSearch}/>
              <BookingDetail BookingSearch={BookingSearch} bookingArrival={this.props.bookingArrival} />
            </Box>
          </Col>
        </Row>
      </LayoutWrapper>
    );
  }
}

function mapStateToProps(state) {
  return { BookingSearch: state.bookingSearch };
}

export default connect(
  mapStateToProps,
  { bookingSearch, bookingArrival }
)(injectIntl(GuestPortal));
