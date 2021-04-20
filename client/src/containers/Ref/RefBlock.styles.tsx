import styled from "styled-components";

const SummaryWrapper = styled.div`
  .panel {
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
  .panel:after,
  .panel:before {
    content: " ";
    display: table;
  }
  .message_box {
    color: #3c763d;
  }

  .color-green {
    background-color: #c8e6c9 !important;
  }
  .pull-left {
    float: left !important;
  }
  .retrieved_check {
    font-weight: bold;
  }
  .text-subhead {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
  }
  .text-subhead p {
    font-size: 16px;
  }
  .divider {
    display: block;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.12);
  }
  .summary_table {
    font-size: 16px;
  }
  .summary_table .ant-row div:first-child {
    font-weight: bold;
  }
  .summary_table .ant-col:last-child,
  .summary_table .light {
    font-weight: 400;
  }
  .summary_contact_table .ant-row {
    margin-top: 5px;
    margin-top: 5px;
  }
  .no-margin {
    margin: 0 !important;
  }
  .vehicle_list label {
    top: 8px;
    position: relative;
  }

  .spaced_table .ant-row {
    margin-top: 6px;
    height: 30px;
  }
  .details_correct_text {
    font-weight: bold;
  }
  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
`;
const TransportWrapper = styled.div`
  .container_small {
    margin: 0 auto;
    max-width: 900px;
  }

  panel {
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
  .panel-header {
    font-size: 22px;
    font-weight: 500;
  }
  .delivery_option {
    width: 260px;
    height: 400px;
    background-color: #eee;
    border: 7px solid #eee;
    border-radius: 10px;
    float: left;
    margin: 0.8%;
    text-align: center;
    padding: 0;
  }
  .delivery_option_title {
    background-color: #f9f9f9;
    height: 60px;
    line-height: 60px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .start_label {
    font-size: 16px;
    color: #666;
    text-transform: capitalize;
  }
  .end_label {
    font-size: 16px;
    color: #666;
    text-transform: capitalize;
  }
  .mui--text-display2 {
    font-weight: 400;
    font-size: 45px;
    line-height: 48px;
  }
  .delivery_option_price {
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #cd2c20;
    color: #fff;
    position: relative;
  }
  .delivery_option_price {
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #cd2c20;
    color: #fff;
    position: relative;
  }
  .delivery_option .addons-price {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 3px;
    font-size: 19px;
    font-weight: 300;
    line-height: 1.2em;
    color: #fff;
  }
  .delivery_option .addons-price-price {
    font-weight: 400;
  }
  .delivery_option_white_box {
    height: 50px;
    padding: 5px;
    background-color: #fff;
    margin-top: 2px;
  }
  .mui-clean-table {
    max-width: 100%;
    margin-bottom: 20px;
    width: 100%;
  }
  .mui-clean-table th:first-child {
    text-align: left !important;
    color: #757575;
  }
  .mui-clean-table th,
  .mui-clean-table td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    text-align: right;
    color: #757575;
  }
  .mui-clean-table td:first-child,
  .mui-clean-table th:first-child {
    text-align: left !important;
  }
  .data_table_content td {
    line-height: 2 !important;
  }
  .data_table_header th {
    padding-bottom: 3px !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
    padding-left: 9px;
    padding-right: 9px;
  }
  @media only screen and (max-width: 760px),
    (max-device-width: 1024px) and (min-device-width: 768px) .mui-clean-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
    margin: 0 0 1rem 0;
    display: block;
  }

  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
`;
const VehicleWrapper = styled.div`
  panel {
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
  .panel-header {
    font-size: 22px;
    font-weight: 500;
  }
  .delivery_option {
    width: 100%;
    height: 400px;
    background-color: #eee;
    border: 7px solid #eee;
    border-radius: 10px;
    float: left;
    margin: 0.8%;
    text-align: center;
    padding: 0;
  }
  .delivery_option_title {
    background-color: #f9f9f9;
    height: 60px;
    line-height: 60px;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    font-weight: 700;
    text-transform: uppercase;
  }
  .mui--text-display2 {
    font-weight: 400;
    font-size: 35px;
    line-height: 48px;
  }
  .delivery_option_price {
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #cd2c20;
    color: #fff;
    position: relative;
  }
  .delivery_option_price {
    width: 100%;
    height: 140px;
    line-height: 140px;
    background-color: #cd2c20;
    color: #fff;
    position: relative;
  }
  .delivery_option .addons-price {
    position: absolute;
    left: 0;
    width: 100%;
    bottom: 3px;
    font-size: 19px;
    font-weight: 300;
    line-height: 1.2em;
    color: #fff;
  }
  .delivery_option .addons-price-price {
    font-weight: 400;
  }
  .delivery_option_white_box {
    height: 50px;
    padding: 5px;
    background-color: #fff;
    margin-top: 2px;
  }
  .mui-clean-table {
    max-width: 100%;
    margin-bottom: 20px;
    width: 100%;
  }
  .mui-clean-table th:first-child {
    text-align: left !important;
    color: #757575;
  }
  .mui-clean-table th,
  .mui-clean-table td {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    text-align: right;
    color: #757575;
  }
  .mui-clean-table td:first-child,
  .mui-clean-table th:first-child {
    text-align: left !important;
  }
  .data_table_content td {
    line-height: 2 !important;
  }
  .data_table_header th {
    padding-bottom: 3px !important;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12) !important;
    padding-left: 9px;
    padding-right: 9px;
  }
  @media only screen and (max-width: 760px),
    (max-device-width: 1024px) and (min-device-width: 768px) .mui-clean-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
    margin: 0 0 1rem 0;
    display: block;
  }

  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
`;
const Container = styled("div")`
  margin: 0 auto;
  max-width: 900px;
`;
const PaymentWrapper = styled("div")`
  .container_micro {
    margin: 0 auto;
    max-width: 760px;
  }

  panel {
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
  .panel-header {
    font-size: 22px;
    font-weight: 500;
  }
  .bold {
    font-weight: bold;
  }

  .mui--text-subhead,
  h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  #credit_card_text {
    height: 30px;
    float: left;
  }
  #credit_card_popup {
    border-radius: 5px;
    color: #fff;
    font-size: 12px;
    position: absolute;
    background-color: #000;
    width: 132px;
    height: 50px;
    text-align: center;
    padding: 3px 3px 2px 3px;
    margin: 30px 0 0 -13px;
    visibility: hidden;
    opacity: 0;
  }
  .arrow-up {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid black;
    top: -5px;
    left: 50%;
    position: absolute;
  }
  .cc_images {
    width: 100%;
    max-width: 110px;
  }
  .cc_image_row {
    padding: 0 20px 0 20px;
  }
  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
`;
const PickupWrapper = styled("div")`
  .container_micro {
    margin: 0 auto;
    max-width: 760px;
  }

  panel {
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 0;
    background-color: #fff;
    -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16),
      0 0 2px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 2px 0 rgba(0, 0, 0, 0.12);
  }
  .panel-header {
    font-size: 22px;
    font-weight: 500;
  }
  .mui--text-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  }
`;
const InputBoxWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 35px;
  margin-bottom: 15px;
  font-size: 14px;
  label {
    display: block;

    margin: 0;
    font-size: 0.875rem;
    line-height: 1.8;
    font-weight: 600;
    color: #555;
    line-height: 1.2;
    margin-bottom: 15px;
    display: flex;
    position: relative;
  }
  .ant-select-selection-item {
    font-size: 14px;
  }
  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
`;
export {
  SummaryWrapper,
  Container,
  TransportWrapper,
  VehicleWrapper,
  PaymentWrapper,
  PickupWrapper,
  InputBoxWrapper,
};
