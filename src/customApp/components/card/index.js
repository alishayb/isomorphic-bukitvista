import React, { Component } from "react";
import { CardWrapper } from "./style";
import IntlMessages from "../../../components/utility/intlMessages";
import { Card } from "antd";

export default class extends Component {
  render() {
    const { src, alt, name, property, checkIn, checkOut, arrival } = this.props;
    return (
      <CardWrapper className="guestDetailWrapper">
        <Card>
          <div className="guestImage">
            <img src={src} alt={alt} />
          </div>

          <div className="guestDetailInfo">
            <h3 className="guestName"><IntlMessages id="bookingDetail.greeting" />{name}</h3>
            
            <p className="description"><IntlMessages id="bookingDetail.description" /></p>
            <div className="guestBookDetail">
              <div className="detailKey">
                <div><IntlMessages id="bookingDetail.propertyName" /></div>
                <div><IntlMessages id="bookingDetail.checkIn" /></div>
                <div><IntlMessages id="bookingDetail.checkOut" /></div>
                <div><IntlMessages id="bookingDetail.arrivalTime" /></div>
              </div>
              <div className="detailValue">
                <p>{property}</p>
                <p>{checkIn}</p>
                <p>{checkOut}</p>
                {arrival}
              </div>
            </div>
          </div>
        </Card>
      </CardWrapper>
    );
  }
}
