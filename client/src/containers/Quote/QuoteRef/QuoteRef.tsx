import React from "react";
import { Row, Col } from "antd";
import { SectionWrapper } from "./QuoteRef.styles";
import { useHistory } from "react-router-dom";
type QuoteProps = {
  reference: string;
  carType: string;
  pickUp: string;
  dropOff: string;
  email: string;
  distance: number;
  pickUpDepot: string;
  dropUpDepot: string;
};

const QuoteRef: React.FC<QuoteProps> = ({
  reference,
  carType,
  pickUp,
  dropOff,
  email,
  distance,
  pickUpDepot,
  dropUpDepot,
}) => {
  let costDoorToDoor = Math.floor(3.25 * distance);
  let costDoorToDebot = Math.floor(3.15 * distance);
  let costDebotToDoor = Math.floor(2.85 * distance);
  let costDebotToDebot = Math.floor(2.65 * distance);
  let history = useHistory();

  const book = () => {
    if (reference) {
       history.push(`/ref/${reference}`);
  
    }
  };
  return (
    <SectionWrapper>
      <div className="header">
        Quote Reference Number:{reference}
        <span></span>
      </div>
      <table className="quote_details_table">
        <tbody>
          <tr>
            <td className="quote_details_table_left_col">Vehicle(s)</td>
            <td className="roboto_thin">
              <ul className="vehicle_list">
                <li>{carType}</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td className="quote_details_table_left_col">Pickup</td>
            <td className="roboto_thin">{pickUp}{" "+pickUpDepot ? " or " + pickUpDepot + " Depot" : ""}</td>
          </tr>        
            <tr>
            <td className="quote_details_table_left_col">Delivery</td>
            <td className="roboto_thin">{dropOff}{" "+dropUpDepot ? " or " + dropUpDepot + " Depot" : ""}</td>
          </tr>
        </tbody>
      </table>
      <div className="header">Vehicle Transport Options *</div>
      <table className="rate_table">
        <tbody>
          <tr className="rate_row">
            <td className="rate_col mui--text-center">
              <span className="rate_location_text_start">{pickUp}</span>
              <br />
              to
              <br />
              <span className="rate_location_text_end">{dropOff}</span>
              <div className="content_spacing_1" />
              <span className="rate_price">
                $<span className="large-price">{costDoorToDoor}</span>
              </span>
              <br />
            </td>
            {pickUpDepot && dropUpDepot && (
              <td className="rate_col mui--text-center">
                <span className="rate_location_text_start">{pickUp}</span>
                <br />
                to
                <br />
                <span className="rate_location_text_end">
                  {dropUpDepot ? dropUpDepot + " Depot" : ""}
                </span>
                <div className="content_spacing_1" />
                <span className="rate_price">
                  $<span className="large-price">{costDoorToDebot}</span>
                </span>
                <br />
              </td>
            )}
          </tr>
          <tr className="rate_row">
            {pickUpDepot && dropUpDepot && (
              <td className="rate_col mui--text-center">
                <span className="rate_location_text_start">
                  {pickUpDepot ? pickUpDepot + " Depot" : ""}
                </span>
                <br />
                to
                <br />
                <span className="rate_location_text_end">{dropOff}</span>
                <div className="content_spacing_1" />
                <span className="rate_price">
                  $<span className="large-price">{costDebotToDoor}</span>
                </span>
                <br />
              </td>
            )}
            {pickUpDepot && dropUpDepot && (
              <td className="rate_col mui--text-center">
                <span className="rate_location_text_start">
                  {pickUpDepot ? pickUpDepot + " Depot" : ""}
                </span>
                <br />
                to
                <br />
                <span className="rate_location_text_end">
                  {dropUpDepot ? dropUpDepot + " Depot" : ""}
                </span>
                <div className="content_spacing_1" />
                <span className="rate_price">
                  $<span className="large-price">{costDebotToDebot}</span>
                </span>
                <br />
              </td>
            )}
          </tr>
        </tbody>
      </table>
      <div className="text-center">
        <div className="content_spacing_1" />

        <button className="book_now_button" onClick={book}>
          BOOK NOW
        </button>
      </div>
      <div className="content_spacing_7" />
      <Row>
        <Col sm={24} md={14} lg={14}>
          <ul className="feature_list feature_list_left">
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>

              <span className="feature_list_text roboto_thin">
                Enclosed Vehicle Transport
              </span>
            </li>
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>
              <span className="feature_list_text roboto_thin">
                Vehicle model newer than 1985
              </span>
            </li>
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>
              <span className="feature_list_text roboto_thin">
                Vehicle drivable and unmodified
              </span>
            </li>
          </ul>
        </Col>
        <Col sm={24} md={10} lg={10}>
          <ul className="feature_list feature_list_right">
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>
              <span className="feature_list_text roboto_thin">
                Full Warranty
              </span>
            </li>
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>
              <span className="feature_list_text roboto_thin">
                Friendly Service
              </span>
            </li>
            <li>
              <i className="fas fa-arrow-right blueArrow"></i>
              <span className="feature_list_text roboto_thin">
                30 Years of Experience
              </span>
            </li>
          </ul>
        </Col>
      </Row>
      <div className="content_spacing_4" />
      <div className="text-center">
        <i className="more_options_caption">
          More options available when you book.
        </i>
      </div>
      <div className="content_spacing_5" />
      <p className="terms_text roboto_thin">
        * Quoted prices include GST &amp; fuel levy.
        <br />
        <span>
          A vehicle must travel enclosed. Prices quoted represent enclosed
          services. This service is not available to all suburbs.
          <br />
        </span>
        Transit days exclude weekends and public holidays.
        <br /> All vehicle transport is subject to our terms and conditions .
        <br /> A link to this quote has been sent to
        <b className="email_label"> {email}</b>.
      </p>
    </SectionWrapper>
  );
};
export default QuoteRef;
