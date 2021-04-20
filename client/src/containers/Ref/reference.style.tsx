import styled from "styled-components";

const PageWrapper = styled.div`
  background-color: #ffffff;
  .content {
    height: 100%;
    padding: 100px 0px 100px;
  }

  .content > div {
    height: 100%;
    padding: 30px;
  }
  .container {
    height: 100%;
    margin: 0 auto;
    max-width: 1060px;
    padding: 0 10px 0 10px;
    background-color: #f5f5f5;
  }
  [data-theme="compact"] .site-navigation-steps,
  .site-navigation-steps {
    margin-top: 13px;
    margin-bottom: 33px;
    align-items: center;
    box-shadow: 0px -1px 0 0 #e8e8e8 inset;
  }
  .btn {
    float: right;
    color: #fff;
    height: 46px !important;
    font-size: 18px !important;
    background-color: #ffa000 !important;
    font-weight: 500;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;
    display: inline-block;
    padding: 0 26px;
    margin: 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    touch-action: manipulation;
    background-image: none;
    text-align: center;
    line-height: 36px;
    vertical-align: middle;
    white-space: nowrap;
    font-family: inherit;
    letter-spacing: 0.03em;
    position: relative;
    overflow: hidden;
  }
  .booking_save_button,
  .booking_save_button:active,
  .booking_save_button:visited,
  .booking_save_button:focus,
  .booking_save_button:target,
  .booking_save_button:hover {
    float: right;
    color: #fff;
  }
  .mui-btn {
    width: 220px;
    height: 46px !important;
    font-size: 18px !important;
    color: #fff !important;
    float: right !important;
    font-weight: 500;
    padding: 0 26px;
    margin: 20px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    background-color: #43a047 !important;
  }
  .booking_save_button i {
    position: relative;
    left: 10px;
    float: left;
    line-height: 36px !important;
  }
  .pull-left {
    float: left !important;
  }
  .clearfix:after,
  .clearfix:before {
    content: " ";
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
`;

const EndWrapper = styled.div`
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
  .summary_table {
    font-size: 16px;
  }
  .summary_table .ant-row div:first-child {
    font-weight: bold;
  }
  .summary_table h4 {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  .data_table_content td {
    line-height: 2 !important;
  }
  .mui-clean-table {
    max-width: 100%;
    margin-bottom: 20px;
    width: 100%;
  }
  .mui-clean-table td:first-child,
  .mui-clean-table th:first-child {
    text-align: left !important;
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
  .mui--text-headline {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
  }
  .mui-thick-divider {
    display: block;
    height: 4px;
    margin: 5px 0 5px 0;
    background-color: #4caf50 !important;
  }
  .asterisk {
    font-size: 15px;
    font-weight: 400;
    color: #dd3d53;
    line-height: 1.2;
    margin: ${(props) =>
      props["data-rtl"] === "rtl" ? "0 3px 0 0" : "0 0 0 3px"};
  }
  @m @media only screen and (max-width: 760px),
    (max-device-width: 1024px) and (min-device-width: 768px) .mui-clean-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
    margin: 0 0 1rem 0;
    display: block;
  }
`;

export { PageWrapper, EndWrapper };
