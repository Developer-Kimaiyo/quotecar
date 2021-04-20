import styled from "styled-components";
const SectionWrapper = styled.div`
  .header {
    background-color: #c60e00;
    color: #fff;
    padding: 10px;
    font-size: 16px;
    font-weight: 300;
  }
  .quote_details_table {
    border: none;
    width: 100%;
  }
  .quote_details_table td {
    padding: 10px;
  }
  .quote_details_table_left_col {
    color: #888888;
    width: 120px;
    font-size: 16px;
    font-weight: 700;
  }
  .roboto_thin {
    font-family: "roboto", sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #888;
    text-transform: capitalize;
  }
  .vehicle_list {
    padding-left: 20px;
    margin: 0;
  }
  .rate_table,
  .rate_table td,
  .rate_table tr {
    border: 1px solid #e3e3e3;
  }
  .rate_table {
    border-collapse: collapse;
    width: 100%;
  }
  .quoteResultsPromoCodeForm > * {
    display: inline-block;
    margin: 0 4px;
  }
  .quoteResultsPromoCodeForm .ant-input {
    max-width: 300px;
  }
  .quoteResultsPromoCodeForm button {
    margin-left: 10px;
    cursor: pointer;
  }
  .promoCodeAppliedMessage {
    display: none;
  }
  .book_now_button {
    background-color: #549404;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-size: 17px;
    margin: 0 auto;
    padding: 18px 43px 18px 43px;
    outline: none;
    cursor: pointer;
  }
  .book_now_button:hover {
    background-color: #5f9434;
  }
  .feature_list li {
    list-style-type: none;
    padding: 5px 0 5px 0;
    border-bottom: 1px solid rgba(218, 222, 225, 0.86);
  }
  .feature_list_left {
    padding-left: 20px !important;
  }
  .blueArrow {
    font-weight: bold;
    color: #c60e00;
    font-size: 16px;
    top: 2px;
    position: relative;
  }

  .feature_list_text {
    padding-left: 4px;
  }
  .feature_list_right {
    padding-left: 20px !important;
  }
  .more_options_caption {
    color: #888888;
    font-weight: 300;
  }
  .terms_text {
    line-height: 2.1;
  }
  .email_label {
    font-weight: 700;
  }
  .rate_table {
    border: 1px solid #e3e3e3;
  }
  .rate_table tr {
    border: 1px solid #e3e3e3;
  }
  .rate_table td {
    border: 1px solid #e3e3e3;
  }
  .rate_col {
    padding: 30px 0 10px 0;
    width: 50%;
  }
  .mui--text-center {
    text-align: center !important;
  }
  .rate_location_text_start {
    font-size: 16px;
    color: #666;
    text-transform: capitalize;
  }
  .rate_location_text_end {
    font-size: 16px;
    color: #666;
    text-transform: capitalize;
  }
  .rate_price {
    position: relative;
    margin-top: 10px;
    color: #6dab3c;
    font-size: 35px;
    font-weight: 700;
  }
  .rate_price {
    position: relative;
    margin-top: 10px;
    color: #6dab3c;
    font-size: 35px;
    font-weight: 700;
  }
  .delivery_time_text {
    font-size: 15px;
    font-weight: 300;
  }
  .delivery_time_text {
    font-size: 15px;
    font-weight: 300;
  }
`;
const Container = styled("div")`
  max-width: 1170px;
  width: 100%;

  margin-right: auto;
  margin-left: auto;
`;
export { SectionWrapper, Container };
