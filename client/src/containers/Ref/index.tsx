import React, { useEffect, useState } from "react";
import { PageWrapper, EndWrapper } from "./reference.style";
import {
  Row,
  Col,
  Radio,
  Input,
  Checkbox,
  Select,
  Steps,
  notification,
  DatePicker,
  message,
} from "antd";
import {
  FaListAlt,
  FaCaravan,
  FaCar,
  FaShoppingCart,
  FaRegIdCard,
} from "react-icons/fa";
import { RiFileListFill } from "react-icons/ri";
import {
  PaymentWrapper,
  Container,
  SummaryWrapper,
  VehicleWrapper,
  PickupWrapper,
  InputBoxWrapper,
  TransportWrapper,
} from "./RefBlock.styles";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import TextArea from "antd/lib/input/TextArea";

import secure from "../../image/secure-processing.png";
import visa from "../../image/visa-mastercard.png";
import { createVehicleInfor } from "../../store/actions/vehicleInfor.action";
import { createCustomer } from "../../store/actions/customer.action";
import { createAddresss } from "../../store/actions/address.action";
import {
  getDropOffAction,
  getPickUpAction,
} from "../../store/actions/location.action";
import { detailsQuote } from "../../store/actions/quote.action";

const steps = [
  {
    title: "Summary",
    content: "1st-content",
    icon: <FaListAlt />,
  },
  {
    title: "Transport Type",
    content: "second-content",
    icon: <FaCaravan />,
  },
  {
    title: "Vehicle Info",
    content: "thirth-content",
    icon: <FaCar />,
  },
  {
    title: "Payment Option",
    content: "fourth-content",
    icon: <FaShoppingCart />,
  },
  {
    title: "Pickup/Delivery",
    content: "fiveth-content",
    icon: <FaRegIdCard />,
  },
  {
    title: "Confirm Details",
    content: "sixth-content",
    icon: <RiFileListFill />,
  },
];
const { Step } = Steps;
const { Option } = Select;
interface IState {
  quoteId?: string;
}
const Reference = (props) => {
  const { quoteId } = props.match.params;
  const dispatch = useDispatch();

  //page states
  const [page, setPage] = useState(true);
  const [end, setEnd] = useState(false);

  //Steps States
  const [current, setCurrent] = React.useState(0);

  //Api Data
  let quoteDetails = useSelector((state: RootStateOrAny) => state.quoteDetails);
  let { loading, error, quoteDetail } = quoteDetails;
  const pickUp = !loading && !error ? quoteDetail.pickUp : "";
  const reference = !loading && !error ? quoteDetail.reference : "";
  const name = !loading && !error ? quoteDetail.name : "";
  const email = !loading && !error ? quoteDetail.email : "";
  const phone = !loading && !error ? quoteDetail.phone : "";
  const carType =
    !loading && !error ? quoteDetail.carMake + " " + quoteDetail.carModel : "";
  const dropOff = !loading && !error ? quoteDetail.dropOff : "";

  let dropOffReducer = useSelector(
    (state: RootStateOrAny) => state.dropOffReducer
  );

  let { dropOffLoading, dropOffError, dropOffData } = dropOffReducer;

  let pickUpReducer = useSelector(
    (state: RootStateOrAny) => state.pickUpReducer
  );
  let { pickUpLoading, pickUpError, pickUpData } = pickUpReducer;
  //life cycle
  useEffect(() => {
    // if (quoteId) dispatch(detailsQuote(quoteId));
 
    return () => {};
  }, []);

  //Langitude and latitude
  const pickUpLatitude = parseFloat(
    !pickUpLoading && !pickUpError ? pickUpData.lat : null
  );
  const pickUpLongitude = parseFloat(
    !pickUpLoading && !pickUpError ? pickUpData.lon : null
  );
  const dropOffLatitude = parseFloat(
    !dropOffLoading && !dropOffError ? dropOffData.lat : null
  );
  const dropOffLongitude = parseFloat(
    !dropOffLoading && !dropOffError ? dropOffData.lon : null
  );

  //district
  const pickUpDc = !pickUpLoading && !pickUpError ? pickUpData.dc : "";
  const dropUpDc = !dropOffLoading && !dropOffError ? dropOffData.dc : "";
  const distance = getDistance(
    pickUpLatitude,
    pickUpLongitude,
    dropOffLatitude,
    dropOffLongitude,
    "K"
  );
  let pickUpDepot =
    pickUpDc && pickUpDc.split(" ").slice(0, 2).join(" ").toLowerCase();
  let dropUpDepot =
    dropUpDc && dropUpDc.split(" ").slice(0, 2).join(" ").toLowerCase();
  let costDoorToDoor = Math.floor(3.25 * distance);
  let costDoorToDebot = Math.floor(3.15 * distance);
  let costDebotToDoor = Math.floor(2.85 * distance);
  let costDebotToDebot = Math.floor(2.65 * distance);

  //Summary
  const [checked, setChecked] = useState(false);
  function onChange() {
  //  if (pickUp && dropOff) dispatch(getPickUpAction(pickUp));
  //  if (dropOff && pickUp) dispatch(getDropOffAction(dropOff));
    setTimeout(() => {
      setChecked(true);
    }, 1000);
  }

  //Transport Type
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);

  function onDoorToDoor(value) {
    setChecked(true);
    setType("Door To Door");
    setPrice(value);
  }
  function onDoorToDepot(value) {
    setChecked(true);
    setType("Door To Depot");
    setPrice(value);
  }
  function onDeportToDoor(value) {
    setChecked(true);
    setType("Deport To Door");
    setPrice(value);
  }
  function onDepotToDepot(value) {
    setChecked(true);
    setType("Depot To Depot");
    setPrice(value);
  }

  //Vehicle Info
  const [color, setColor] = useState("");
  const [reg, setReg] = useState("");
  const [goods, setGoods] = useState(false);
  function onColor(value) {
    setColor(value);
  }
  function onGoods() {
    setGoods(!goods);
  }

  //Payment Option
  const [credit, setCredit] = useState(false);
  function onCredit() {
    setChecked(true);
    setCredit(true);
  }

  //Pickup/Delivery
  const [pickUpFname, setPickUpFname] = useState("");
  const [pickUpLname, setPickUpLname] = useState("");
  const [pickUpMobile, setPickUpMobile] = useState("");
  const [dropOffFname, setDropOffFname] = useState("");
  const [dropOffLname, setDropOffLname] = useState("");
  const [dropOffMobile, setDropOffMobile] = useState("");
  const [pickUpCode, setPickUpCode] = useState("");
  const [pickUpInstructions, setPickUpInstructions] = useState("");
  const [DropOffInstructions, setDropOffInstructions] = useState("");
  const [pickUpAddress, setPickUpAddress] = useState("");
  const [datePickup, setDatePickup] = useState("");
  const [dateDropOff, setDateDropOff] = useState("");
  const [dropOffAddress, setDropOffAddress] = useState("");
  const [dropOffCode, setDropOffCode] = useState("");

  function onPickUpDate(_date, dateString) {
    setDatePickup(dateString);
  }
  function onDropOffDate(_date, dateString) {
    setDateDropOff(dateString);
  }

  //Confirm Details
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [Useremail, setUserEmail] = useState("");
  const [postCode, setPostCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [bAdress1, setBAdress1] = useState("");
  const [bAdress2, setBAdress2] = useState("");
  const [bname, setBname] = useState("");
  const [suburb, setSuburb] = useState("");
  const [state, setState] = useState("");

  // book
  const [bookState, setBookState] = useState(false);
  function onBook() {
    setBookState(!bookState);
  }

  //Stes Control
  const next = () => {
    if (current === 1) {
      setChecked(true);
      setCurrent(current + 1);
    } else if (current === 2) {
      if (!color || color === undefined || color === null) {
        notification["error"]({
          message: "Please Select Your Color  Preference",
        });
      } else if (!reg || reg === undefined || reg === null) {
        notification["error"]({
          message: "Please Input Your Car Registration",
        });
      } else {
        setCurrent(current + 1);
        setChecked(!checked);
      }
    } else if (current === 3) {
      setCurrent(current + 1);
      setChecked(true);
    } else if (current === 4) {
      if (!datePickup || datePickup === undefined || datePickup === null) {
        notification["error"]({
          message: "Please Input Your Pickup  Date",
        });
      } else if (
        !pickUpAddress ||
        pickUpAddress === undefined ||
        pickUpAddress === null
      ) {
        notification["error"]({
          message: "Please Input your PickUp Address",
        });
      } else if (
        !dropOffAddress ||
        dropOffAddress === undefined ||
        dropOffAddress === null
      ) {
        notification["error"]({
          message: "Please Input your DropOff Address",
        });
      } else if (
        !pickUpFname ||
        pickUpFname === null ||
        pickUpFname === undefined
      ) {
        notification["error"]({
          message: "Please Input you PickUp First Name",
        });
      } else if (
        !pickUpLname ||
        pickUpLname === null ||
        pickUpLname === undefined
      ) {
        notification["error"]({
          message: "Please Input you PickUp Last Name",
        });
      } else if (
        !dropOffFname ||
        dropOffFname === null ||
        dropOffFname === undefined
      ) {
        notification["error"]({
          message: "Please Input you DropOff First Name",
        });
      } else if (
        !dropOffLname ||
        dropOffLname === null ||
        dropOffLname === undefined
      ) {
        notification["error"]({
          message: "Please Input DropOff Last Name",
        });
      } else if (
        !pickUpMobile ||
        pickUpMobile === null ||
        pickUpMobile === undefined
      ) {
        notification["error"]({
          message: "Please Input Pickup Mobile Number",
        });
      } else if (
        !dropOffMobile ||
        dropOffMobile === null ||
        dropOffMobile === undefined
      ) {
        notification["error"]({
          message: "Please Input DropOff Mobile Number",
        });
      } else {
        setCurrent(current + 1);
        setChecked(true);
      }
    } else {
      setCurrent(current + 1);
      setChecked(!checked);
    }
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const confirm = () => {
    if (current === 5) {
      if (!fname || fname === undefined || fname === null) {
        notification["error"]({
          message: "Please Input Your First Name",
        });
      } else if (!lname || lname === undefined || lname === null) {
        notification["error"]({
          message: "Please Input Your Last Name",
        });
      } else if (!mobile || mobile === undefined || mobile === null) {
        notification["error"]({
          message: "Please Input Your Mobile Number ",
        });
      } else if (!bAdress1 || bAdress1 === null || bAdress1 === undefined) {
        notification["error"]({
          message: "Please Input Your Billing Address",
        });
      } else if (!suburb || suburb === undefined || suburb === null) {
        notification["error"]({
          message: "Please Input Your Suburb",
        });
      } else {
        setPage(false);
        setEnd(true);
      }
    }
  };
  const prevEnd = () => {
    setPage(true);
    setEnd(false);
  };

  const bookNow = () => {
    dispatch(
      createAddresss(
        reference,
        pickUpFname,
        pickUpLname,
        pickUpMobile,
        pickUpInstructions,
        pickUpAddress,
        pickUpCode,
        datePickup,
        dropOffFname,
        dropOffLname,
        dropOffMobile,
        DropOffInstructions,
        dateDropOff,
        dropOffAddress,
        dropOffCode
      )
    );
    dispatch(
      createCustomer(
        reference,
        fname,
        lname,
        Useremail,
        postCode,
        bAdress1,
        bAdress2,
        bname,
        suburb,
        state,
        credit,
        price,
        type
      )
    );
    dispatch(createVehicleInfor(reference, color, reg, goods));
    message.success("Save successfully");
  };
  function getDistance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist =
        Math.sin(radlat1) * Math.sin(radlat2) +
        Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit == "K") {
        dist = dist * 1.609344;
      }
      if (unit == "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }
  return (
    <>
      <PageWrapper>
        <div className="content">
          <div style={{ display: "block" }}>
            <div className="container">
              <>
                {page && (
                  <>
                    <div className="clearfix" />

                    <Steps
                      current={current}
                      responsive={true}
                      type="navigation"
                      className="site-navigation-steps"
                    >
                      {steps.map((item) => (
                        <Step
                          key={item.title}
                          title={item.title}
                          icon={item.icon}
                        />
                      ))}
                    </Steps>
                  </>
                )}
                {page &&
                  (steps[current].content === "1st-content" ? (
                    <SummaryWrapper>
                      <Container>
                        <div className="panel color-green message_box">
                          <div className="text-subhead retrieved_title">
                            <p>
                              SUCCESSFULLY RETRIEVED
                              <span style={{ fontWeight: "bolder" }}>
                                {reference}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="text-subhead">CONTACT DETAILS</div>
                          <div className="divider" />
                          <div className="summary_table summary_contact_table">
                            <Row justify="space-around">
                              <Col sm={24} md={8} lg={8}>
                                Name:
                              </Col>
                              <Col sm={24} md={16} lg={16}>
                                {name}
                              </Col>
                            </Row>
                            <Row justify="space-around">
                              <Col sm={24} md={8} lg={8}>
                                Email:
                              </Col>
                              <Col sm={24} md={16} lg={16}>
                                {email}
                              </Col>
                            </Row>
                            <Row justify="space-around">
                              <Col sm={24} md={8} lg={8}>
                                Phone:
                              </Col>
                              <Col sm={24} md={16} lg={16}>
                                {phone}
                              </Col>
                            </Row>
                          </div>
                        </div>
                        <div className="panel">
                          <div className="text-subhead">TRANSPORT DETAILS</div>
                          <div className="divider" />
                          <div className="summary_table summary_contact_table summary_t_table">
                            <Row justify="space-around">
                              <Col sm={24} md={8} lg={8}>
                                Leaving From:
                              </Col>
                              <Col sm={24} md={16} lg={16}>
                                {pickUp}
                              </Col>
                            </Row>
                            <Row justify="space-around">
                              <Col sm={24} md={8} lg={8}>
                                Going To:
                              </Col>
                              <Col sm={24} md={16} lg={16}>
                                {dropOff}
                              </Col>
                            </Row>
                          </div>
                          <div className="content_spacing_1" />
                          <label className="no-margin">
                            NOTE: You can select your desired transport option
                            on the next screen.
                          </label>
                        </div>
                        <div className="panel">
                          <div className="text-subhead">VEHICLE DETAILS</div>
                          <div className="divider" />
                          <div className="content_spacing_0" />
                          <div className="summary_table summary_contact_table summary_t_table">
                            <Row justify="space-around">
                              <Col sm={24} md={24} lg={24}>
                                <label>{carType}</label>
                              </Col>
                            </Row>
                          </div>
                          <div className="content_spacing_0" /> To book
                          additional vehicles, please call our Customer
                          Relations Department on 1300 660 616.
                        </div>
                        <div className="panel confirm_details">
                          <div className="text-subhead">
                            <b>ARE THE DETAILS CORRECT?</b>
                          </div>
                          <div className="divider" />
                          <div className="content_spacing_0" />
                          <p>
                            If any of the details displayed are incorrect,
                            please call our Customer Relations Department on
                            1300 660 616.
                          </p>
                          <table>
                            <tbody>
                              <tr>
                                <td>
                                  <Checkbox onChange={onChange} />
                                </td>
                                <td>
                                  <label
                                    htmlFor="details_correct_checkbox"
                                    className="pull-left details_correct_text"
                                  >
                                    I have carefully read the details, and
                                    confirm what appears on the screen is
                                    correct.
                                  </label>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Container>
                    </SummaryWrapper>
                  ) : steps[current].content === "second-content" ? (
                    <TransportWrapper>
                      <Container>
                        <div className="panel">
                          <div className="panel-header">
                            Select Your Transport Type
                          </div>
                          <div className="content_spacing_2" />
                          <p>
                            Select your preferred option below to get started.
                          </p>
                          <Row>
                            <Col sm={24} md={6} lg={6} className="part-a">
                              <div className="delivery_option">
                                <div className="delivery_option_title mui--text-title">
                                  DOOR TO DOOR
                                </div>
                                <div className="delivery_option_price mui--text-display2">
                                  $
                                  <span className="large-price">
                                    {costDoorToDoor}
                                  </span>
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Picking up from
                                  <br />
                                  <span className="start_label mui--text-subhead bold">
                                    {pickUp}
                                  </span>
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Delivering to
                                  <br />
                                  <span className="end_label mui--text-subhead bold">
                                    {dropOff}
                                  </span>
                                </div>
                                <div className="content_spacing_0" />
                                <button
                                  onClick={() => onDoorToDoor(costDoorToDoor)}
                                  className="mui-btn mui-btn-big select_btn"
                                >
                                  SELECT
                                </button>
                              </div>
                            </Col>
                            <Col sm={24} md={6} lg={6} className="part-a">
                              <div className="delivery_option">
                                <div className="delivery_option_title mui--text-title">
                                  DOOR TO DEPOT
                                </div>
                                <div className="delivery_option_price mui--text-display2">
                                  $
                                  <span className="large-price">
                                    {costDoorToDebot}
                                  </span>
                                  <br />
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Picking up from
                                  <br />
                                  <span className="start_label mui--text-subhead bold">
                                    {pickUp}
                                  </span>
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Delivering to
                                  <br />
                                  <span className="end_label mui--text-subhead bold">
                                    {dropUpDepot ? dropUpDepot + " Depot" : ""}
                                  </span>
                                </div>
                                <div className="content_spacing_0" />
                                <button
                                  onClick={() => onDoorToDepot(costDoorToDebot)}
                                  className="mui-btn mui-btn-big select_btn"
                                >
                                  SELECT
                                </button>
                              </div>
                            </Col>
                            <Col sm={24} md={6} lg={6} className="part-a">
                              <div className="delivery_option">
                                <div className="delivery_option_title mui--text-title">
                                  DEPOT TO Door
                                </div>
                                <div className="delivery_option_price mui--text-display2">
                                  $
                                  <span className="large-price">
                                    {costDebotToDoor}
                                  </span>
                                  <br />
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Picking up from
                                  <br />
                                  <span className="start_label mui--text-subhead bold">
                                    {pickUpDepot ? pickUpDepot + " Depot" : ""}
                                  </span>
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Delivering to
                                  <br />
                                  <span className="end_label mui--text-subhead bold">
                                    {dropOff}
                                  </span>
                                </div>
                                <div className="content_spacing_0" />
                                <button
                                  onClick={() =>
                                    onDeportToDoor(costDebotToDoor)
                                  }
                                  className="mui-btn mui-btn-big select_btn"
                                >
                                  SELECT
                                </button>
                              </div>
                            </Col>
                            <Col sm={24} md={6} lg={6} className="part-a">
                              <div className="delivery_option">
                                <div className="delivery_option_title mui--text-title">
                                  DEPOT TO DEPOT
                                </div>
                                <div className="delivery_option_price mui--text-display2">
                                  $
                                  <span className="large-price">
                                    {costDebotToDebot}
                                  </span>
                                  <br />
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Picking up from
                                  <br />
                                  <span className="start_label mui--text-subhead bold">
                                    {pickUpDepot ? pickUpDepot + " Depot" : ""}
                                  </span>
                                </div>
                                <div className="delivery_option_white_box mui--text-subhead">
                                  Delivering to
                                  <br />
                                  <span className="end_label mui--text-subhead bold">
                                    {dropUpDepot ? dropUpDepot + " Depot" : ""}
                                  </span>
                                </div>
                                <div className="content_spacing_0" />
                                <button
                                  onClick={() =>
                                    onDepotToDepot(costDebotToDebot)
                                  }
                                  className="mui-btn mui-btn-big select_btn"
                                >
                                  SELECT
                                </button>
                              </div>
                            </Col>
                          </Row>
                          <div className="clearfix" />
                          <div className="content_spacing_1" />
                        </div>
                      </Container>
                    </TransportWrapper>
                  ) : steps[current].content === "thirth-content" ? (
                    <VehicleWrapper>
                      <Container>
                        <div className="panel">
                          <div style={{ display: "block" }}>
                            <div
                              className="panel-header"
                              style={{ float: "right" }}
                            >
                              {price}
                            </div>
                            <div className="panel-header">Vehicle Details</div>
                            <div className="content_spacing_2" />
                            <p>
                              Enter your vehicle details and select any
                              additional services. The total price above will
                              update based upon your selection.
                            </p>
                            <p>
                              <b>
                                To book additional vehicles, please call us on
                                1300 660 616.
                              </b>
                            </p>

                            <table
                              role="table"
                              className="mui-clean-table vehicle_table vehicle-info-vehicle-table"
                              cellSpacing={0}
                            >
                              <thead role="rowgroup">
                                <tr role="row" className="data_table_header">
                                  <th role="columnheader">Make/Model</th>
                                  <th
                                    role="columnheader"
                                    style={{ textAlign: "left" }}
                                  >
                                    Registration/VIN
                                    <span className="asterisk "> *</span>
                                  </th>
                                  <th
                                    role="columnheader"
                                    style={{ textAlign: "left" }}
                                  >
                                    Colour
                                    <span className="asterisk "> *</span>
                                  </th>
                                  <th
                                    role="columnheader"
                                    style={{ textAlign: "center" }}
                                  >
                                    <a
                                      id="goodsInCarInformationURL"
                                      target="_blank"
                                      title="Click for more information"
                                      href=""
                                    >
                                      Goods in Car
                                      <br />
                                      Service
                                    </a>
                                  </th>
                                  <th
                                    role="columnheader"
                                    style={{ textAlign: "center" }}
                                  ></th>
                                </tr>
                              </thead>
                              <tbody
                                role="rowgroup"
                                className="data_table_content"
                              >
                                <tr>
                                  <td>{carType}</td>
                                  <td data-label="Registration/VIN">
                                    <div
                                      className="mui-textfield"
                                      style={{ width: "17ch" }}
                                    >
                                      <InputBoxWrapper className="isoInputBox">
                                        <Input
                                          placeholder="Registration"
                                          onChange={(e) =>
                                            setReg(e.target.value)
                                          }
                                        />
                                      </InputBoxWrapper>
                                    </div>
                                  </td>
                                  <td
                                    data-label="Colour"
                                    style={{ textAlign: "left" }}
                                  >
                                    <InputBoxWrapper className="isoInputBox">
                                      <Select
                                        showSearch
                                        size="large"
                                        onChange={onColor}
                                      >
                                        <Option value="black">black</Option>
                                        <Option value="white">white</Option>
                                        <Option value="red">red</Option>
                                        <Option value="green">green</Option>
                                        <Option value="yellow">yellow</Option>
                                        <Option value="blue">blue</Option>
                                        <Option value="pink">pink</Option>
                                        <Option value="gray">gray</Option>
                                        <Option value="brown">brown</Option>
                                        <Option value="orange">orange</Option>
                                        <Option value="purple">purple</Option>
                                      </Select>
                                    </InputBoxWrapper>
                                  </td>
                                  <td
                                    data-label="Enclosed"
                                    style={{ textAlign: "center" }}
                                  >
                                    <Checkbox onChange={onGoods} />
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </Container>
                    </VehicleWrapper>
                  ) : steps[current].content === "fourth-content" ? (
                    <PaymentWrapper>
                      <Container>
                        <div className="panel">
                          <div style={{ display: "block" }}>
                            <div className="panel-header">Payment option</div>
                            <div className="content_spacing_3" />
                            <div className="mui--text-subhead bold">
                              How will you be paying today?
                              <span className="asterisk ">*</span>
                            </div>
                            <div className="content_spacing_0" />
                            <div>
                              <div>
                                <div id="credit_card_text">
                                  <Radio onChange={onCredit}>Credit Card</Radio>
                                </div>
                                <div id="credit_card_popup">
                                  <div className="arrow-up" /> Accepted Credit
                                  Cards <img src="Images/cc.png" />
                                </div>
                              </div>
                            </div>
                            <div className="content_spacing_1" />
                            <div className="mui-divider" />
                            <div className="content_spacing_1" />
                            <div id="cc_section">
                              <Row>
                                <Col md={12}>
                                  <p className="bold">Paying By Credit Card?</p>
                                  <div className="content_spacing_0" /> For your
                                  security, we do not store, keep or share your
                                  Credit Card payment information.
                                  <br />
                                  <br /> We accept Mastercard and VISA and use
                                  Australia Post's SecurePay Online Payments
                                  solution to securely process customer payments
                                  online. <br />
                                  <br /> We'll ask you to enter your Credit Card
                                  when you confirm your booking.
                                </Col>
                                <Col md={6} className="cc_image_row">
                                  <div className="content_spacing_8" />
                                  <img src={secure} className="cc_images" />
                                </Col>
                                <Col md={6} className="cc_image_row">
                                  <div className="content_spacing_8" />
                                  <img src={visa} className="cc_images" />
                                </Col>
                              </Row>
                            </div>

                            <div className="content_spacing_0" />
                            <div className="mui-divider" />
                          </div>
                        </div>
                      </Container>
                    </PaymentWrapper>
                  ) : steps[current].content === "fiveth-content" ? (
                    <PickupWrapper>
                      <div className="container_micro">
                        <div className="panel">
                          <div className="panel-header">Address Details</div>
                          <div className="content_spacing_2" />

                          <Row justify="space-around">
                            <Col md={11}>
                              <div className="mui--text-title">
                                Pickup Information
                              </div>
                              <div className="content_spacing_1" />
                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>
                                    Available Date
                                    <span className="asterisk">*</span>
                                  </label>
                                  <DatePicker onChange={onPickUpDate} />
                                </InputBoxWrapper>
                              </div>
                              <div
                                className="mui-textfield"
                                id="pickupAddressContainer"
                              >
                                <InputBoxWrapper className="isoInputBox">
                                  <label>
                                    Pickup Address Line 1
                                    <span className="asterisk ">*</span>
                                  </label>
                                  <Input
                                    onChange={(e) =>
                                      setPickUpAddress(e.target.value)
                                    }
                                    placeholder="Pickup Address"
                                  />
                                </InputBoxWrapper>
                              </div>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Suburb</label>
                                  <Input
                                    placeholder="Suburb"
                                    value={pickUp ? pickUp : null}
                                  />
                                </InputBoxWrapper>
                              </div>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Postcode</label>
                                  <Input
                                    placeholder="Postcode"
                                    onChange={(e) =>
                                      setPickUpCode(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                            </Col>
                            <Col md={11}>
                              <div className="mui--text-title">
                                Delivery Information
                              </div>
                              <div className="content_spacing_1" />
                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Target Delivery Date</label>
                                  <DatePicker onChange={onDropOffDate} />
                                </InputBoxWrapper>
                              </div>
                              <div
                                className="mui-textfield"
                                id="deliveryAddressContainer"
                              >
                                <InputBoxWrapper className="isoInputBox">
                                  <label>
                                    Delivery Address Line 1
                                    <span className="asterisk ">*</span>
                                  </label>
                                  <Input
                                    onChange={(e) =>
                                      setDropOffAddress(e.target.value)
                                    }
                                    placeholder="DropOff Address"
                                  />
                                </InputBoxWrapper>
                              </div>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Suburb</label>
                                  <Input
                                    placeholder="Suburb"
                                    value={dropOff ? dropOff : null}
                                  />
                                </InputBoxWrapper>
                              </div>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Postcode</label>
                                  <Input
                                    placeholder="Postcode"
                                    onChange={(e) =>
                                      setDropOffCode(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                            </Col>
                          </Row>
                          <div className="content_spacing_2" />
                          <Row justify="space-around">
                            <Col md={11}>
                              <div className="mui--text-title">
                                Contact Details for Pickup
                              </div>
                              <div className="content_spacing_7" />
                              <Row justify="space-around">
                                <Col md={11}>
                                  <div className="mui-textfield">
                                    <InputBoxWrapper className="isoInputBox">
                                      <label>
                                        First Name
                                        <span className="asterisk ">*</span>
                                      </label>
                                      <Input
                                        placeholder="First Name"
                                        onChange={(e) =>
                                          setPickUpFname(e.target.value)
                                        }
                                      />
                                    </InputBoxWrapper>
                                  </div>
                                </Col>
                                <Col md={11}>
                                  <div className="mui-textfield">
                                    <InputBoxWrapper className="isoInputBox">
                                      <label>
                                        Last Name
                                        <span className="asterisk ">*</span>
                                      </label>
                                      <Input
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                          setPickUpLname(e.target.value)
                                        }
                                      />
                                    </InputBoxWrapper>
                                  </div>
                                </Col>
                              </Row>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>
                                    Contact Telephone number
                                    <span className="asterisk ">*</span>
                                  </label>
                                  <Input
                                    placeholder="Mobile Number"
                                    onChange={(e) =>
                                      setPickUpMobile(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Pickup Instructions</label>
                                  <TextArea
                                    rows={3}
                                    onChange={(e) =>
                                      setPickUpInstructions(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                            </Col>
                            <Col md={11}>
                              <div>
                                <div className="mui--text-title">
                                  Contact Details for Delivery
                                </div>
                              </div>
                              <div className="content_spacing_7" />
                              <Row justify="space-around">
                                <Col md={11}>
                                  <div className="mui-textfield">
                                    <InputBoxWrapper className="isoInputBox">
                                      <label>
                                        First Name
                                        <span className="asterisk ">*</span>
                                      </label>
                                      <Input
                                        placeholder="First Name"
                                        onChange={(e) =>
                                          setDropOffFname(e.target.value)
                                        }
                                      />
                                    </InputBoxWrapper>
                                  </div>
                                </Col>
                                <Col md={11}>
                                  <div className="mui-textfield">
                                    <InputBoxWrapper className="isoInputBox">
                                      <label>
                                        Last Name
                                        <span className="asterisk ">*</span>
                                      </label>
                                      <Input
                                        placeholder="Last Name"
                                        onChange={(e) =>
                                          setDropOffLname(e.target.value)
                                        }
                                      />
                                    </InputBoxWrapper>
                                  </div>
                                </Col>
                              </Row>

                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>
                                    Contact Telephone number
                                    <span className="asterisk ">*</span>
                                  </label>
                                  <Input
                                    placeholder="Mobile Number"
                                    onChange={(e) =>
                                      setDropOffMobile(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                              <div className="mui-textfield">
                                <InputBoxWrapper className="isoInputBox">
                                  <label>Delivery Instructions</label>
                                  <TextArea
                                    rows={3}
                                    onChange={(e) =>
                                      setDropOffInstructions(e.target.value)
                                    }
                                  />
                                </InputBoxWrapper>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </PickupWrapper>
                  ) : (
                    <PickupWrapper>
                      <div className=" container_micro">
                        <div className="panel">
                          <div
                            className="loader_content"
                            style={{ display: "block" }}
                          >
                            <div className="panel-header">
                              Tax Invoice Details
                            </div>

                            <div className="content_spacing_0" />

                            <Row justify="space-between">
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>
                                      First Name
                                      <span className="asterisk ">*</span>
                                    </label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) => setFname(e.target.value)}
                                    />
                                  </InputBoxWrapper>
                                </div>
                              </Col>
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>
                                      Last Name
                                      <span className="asterisk ">*</span>
                                    </label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) => setLname(e.target.value)}
                                    />
                                  </InputBoxWrapper>
                                </div>
                              </Col>
                            </Row>
                            <div className="mui-textfield">
                              <InputBoxWrapper className="isoInputBox">
                                <label>Business Name</label>
                                <Input
                                  placeholder="First Name"
                                  onChange={(e) => setBname(e.target.value)}
                                />
                              </InputBoxWrapper>
                            </div>
                            <div className="mui-textfield">
                              <InputBoxWrapper className="isoInputBox">
                                <label>
                                  Billing Address 1
                                  <span className="asterisk ">*</span>
                                </label>
                                <Input
                                  placeholder="First Name"
                                  onChange={(e) => setBAdress1(e.target.value)}
                                />
                              </InputBoxWrapper>
                            </div>
                            <div className="mui-textfield">
                              <InputBoxWrapper className="isoInputBox">
                                <label>
                                  Billing Address 2
                                  <span className="asterisk ">*</span>
                                </label>
                                <Input
                                  placeholder="First Name"
                                  onChange={(e) => setBAdress2(e.target.value)}
                                />
                              </InputBoxWrapper>
                            </div>
                            <Row justify="space-between">
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>
                                      Suburb
                                      <span className="asterisk ">*</span>
                                    </label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) =>
                                        setSuburb(e.target.value)
                                      }
                                    />
                                  </InputBoxWrapper>
                                  <span className="lkup-img" />
                                </div>
                              </Col>
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>Postcode</label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) =>
                                        setPostCode(e.target.value)
                                      }
                                    />
                                  </InputBoxWrapper>
                                </div>
                              </Col>
                            </Row>
                            <div className="mui-textfield">
                              <InputBoxWrapper className="isoInputBox">
                                <label>State or Territory</label>
                                <Input
                                  placeholder="First Name"
                                  onChange={(e) => setState(e.target.value)}
                                />
                              </InputBoxWrapper>
                            </div>
                            <Row justify="space-between">
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>
                                      Phone <span className="asterisk ">*</span>
                                    </label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) =>
                                        setMobile(e.target.value)
                                      }
                                    />
                                  </InputBoxWrapper>
                                </div>
                              </Col>
                              <Col md={11}>
                                <div className="mui-textfield">
                                  <InputBoxWrapper className="isoInputBox">
                                    <label>
                                      Email <span className="asterisk ">*</span>
                                    </label>
                                    <Input
                                      placeholder="First Name"
                                      onChange={(e) =>
                                        setUserEmail(e.target.value)
                                      }
                                    />
                                  </InputBoxWrapper>
                                </div>
                              </Col>
                            </Row>
                            <div className="content_spacing_0" />
                          </div>
                        </div>
                      </div>
                    </PickupWrapper>
                  ))}
                {end && (
                  <EndWrapper>
                    <div className="container_micro">
                      <div className="panel">
                        <div
                          className="loader_content"
                          style={{ display: "block" }}
                        >
                          <div className="mui--hide">
                            <div className="panel-header">Booking Summary</div>
                            <div className="content_spacing_0" />
                            <div className="summary_table">
                              <Row justify="space-between">
                                <Col md={11}> Booking Reference: </Col>
                                <Col md={11}>{reference}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Name: </Col>
                                <Col md={11}>{fname + " " + lname}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Email: </Col>
                                <Col md={11}>{Useremail}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Phone: </Col>
                                <Col md={11}> {mobile}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}>
                                  Requested Transportation Date:
                                </Col>
                                <Col md={11}>{datePickup}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Collecting From: </Col>
                                <Col md={11}>{pickUp}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Contact: </Col>
                                <Col md={11}>{pickUpMobile}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}>Target Delivery Date: </Col>
                                <Col md={11}>{dateDropOff}</Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Delivering To: </Col>
                                <Col md={11}>
                                  {dropOffFname + " " + dropOffLname}
                                </Col>
                              </Row>
                              <Row justify="space-between">
                                <Col md={11}> Contact: </Col>
                                <Col md={11}>{dropOffMobile}</Col>
                              </Row>

                              <Row justify="space-between">
                                <Col md={11}>
                                  Total Amount Payable:
                                  <span className="light">
                                    (Incl. GST &amp; Fuel Levy)
                                  </span>
                                </Col>
                                <Col md={11}>{price}</Col>
                              </Row>
                            </div>
                            <div className="content_spacing_0" />
                            <table
                              role="table"
                              className="mui-clean-table vehicle_table"
                              cellSpacing={0}
                            >
                              <thead role="rowgroup">
                                <tr role="row" className="data_table_header">
                                  <th role="columnheader">Make/Model</th>
                                  <th role="columnheader">
                                    Registration
                                    <wbr />
                                    /VIN
                                  </th>
                                  <th role="columnheader">Colour</th>

                                  <th role="columnheader">
                                    Goods in Car Service
                                  </th>
                                </tr>
                              </thead>
                              <tbody
                                role="rowgroup"
                                className="data_table_content"
                              >
                                <tr>
                                  <td data-label="Make/Model">{carType}</td>
                                  <td data-label="Registration/VIN">{reg}</td>
                                  <td data-label="Colour">{color}</td>
                                  <td data-label="Goods-in-car">
                                    {goods ? "✔" : ""}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <span className="total_vehicles_label">
                              Total vehicles:
                              <span className="vehicle_count">1</span>
                            </span>
                            <div className="mui--clearfix" />
                          </div>
                          <div id="cc_form">
                            <div className="content_spacing_10" />
                            <div className="mui--text-headline">
                              Are the booking details correct?
                              <span className="asterisk">*</span>
                            </div>

                            <div className="mui-thick-divider mui--bg-color-blue" />
                            <div className="content_spacing_2" />
                            <Checkbox onChange={onBook}>
                              I confirm the booking details are correct and that
                              I have read and understood the checklist above.
                            </Checkbox>
                          </div>
                        </div>
                      </div>
                    </div>
                  </EndWrapper>
                )}
                {end && bookState && (
                  <button
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-grey-300 back_btn"
                    onClick={() => bookNow()}
                  >
                    BOOK NOW
                  </button>
                )}
                {end && (
                  <button
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-grey-300 back_btn"
                    onClick={() => prevEnd()}
                  >
                    BACK
                  </button>
                )}
                {page && checked && current > 0 && current < steps.length - 1 && (
                  <button
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-grey-300 back_btn"
                    onClick={() => prev()}
                  >
                    BACK
                  </button>
                )}
                {page && checked && current === steps.length - 1 && (
                  <button
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-grey-300 back_btn"
                    onClick={() => prev()}
                  >
                    BACK
                  </button>
                )}
                {page && checked && current === steps.length - 1 && (
                  <button
                    onClick={() => confirm()}
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-grey-300 back_btn"
                  >
                    CONFIRM DETAILS
                  </button>
                )}
                {page && checked && current < steps.length - 1 && (
                  <button
                    onClick={() => next()}
                    className="mui-btn mui-btn-big mui-btn-long mui--bg-color-green-500 mui--color-white next_btn"
                  >
                    NEXT
                  </button>
                )}
              </>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Reference;
