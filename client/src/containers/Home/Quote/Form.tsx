import React, { useEffect, useState } from "react";
import { Select, Row, Col, Input, message, notification, Button } from "antd";
import { InputBoxWrapper } from "./Quote.style";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import {
  carMakeAction,
  carModelAction,
} from "../../../store/actions/carType.action";
import { useHistory } from "react-router-dom";
import { getLocationAction } from "../../../store/actions/location.action";
import { createQuote } from "../../../store/actions/quote.action";

const Form = () => {
  let history = useHistory();
  const { Option } = Select;
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //Global states
  let make = useSelector((state: RootStateOrAny) => state.make);
  let { load, error, makes } = make;
  let model = useSelector((state: RootStateOrAny) => state.model);
  let { loadings, errors, models } = model;
  let location = useSelector((state: RootStateOrAny) => state.location);
  let { locLoading, locError, locations } = location;

  //Local states
  const [reference, setReference] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  //life cycle
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(carMakeAction());
    dispatch(carModelAction(carMake));
    dispatch(getLocationAction());

    return () => {};
  }, [dispatch, carMake]);

  //Functions
  function handleMake(value) {
    setCarMake(value);
    setCarModel("");
  }

  function handleModel(value) {
    setCarModel(value);
  }
  function handlePickUp(value) {
    setPickUp(value);
    if (pickUp) {
    }
  }
  function handleDropOff(value) {
    setDropOff(value);

    setReference(new Date().getTime().toString(36).toUpperCase());
  }

  function calculate() {
    if (!carMake || carMake === undefined || carMake === null) {
      notification["error"]({
        message: "No make selected",
      });
    } else if (!carModel || carModel === undefined || carModel === null) {
      notification["error"]({
        message: "No model selected",
      });
    } else if (!pickUp || pickUp === undefined || pickUp === null) {
      notification["error"]({
        message: "Please select a pickup location",
      });
    } else if (!dropOff || dropOff === null || dropOff === undefined) {
      notification["error"]({
        message: "Please select a drop-off location",
      });
    } else if (!name || name === null || name === undefined) {
      notification["error"]({
        message: "Please enter your name",
      });
    } else if (!email || email === null || email === undefined) {
      notification["error"]({
        message: "Please enter your email",
      });
    } else if (!regEmail.test(email)) {
      notification["error"]({
        message: "Invalid Email Address",
      });
    } else {
      setButtonLoading(true);
      dispatch(
        createQuote(
          reference,
          carMake,
          carModel,
          pickUp,
          dropOff,
          name,
          email,
          phone
        )
      );

      setTimeout(() => {
        setButtonLoading(false);
        if (reference) {
          history.push(`/quote/${reference}`);
        }
      }, 3000);
    }
  }

  return (
    <div className="quote-form">
      <div className="hgroup">
        <h1 className="color-1">GET A FREE QUOTE</h1>
        <h2>we always use best &amp; fastest fleets</h2>
      </div>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Make</label>

              <Select
                showSearch
                size="large"
                placeholder="Select Make"
                onChange={handleMake}
                loading={load}
                value={carMake ? carMake : null}
              >
                {load ? (
                  <></>
                ) : error ? (
                  message.error(error)
                ) : (
                  makes.map((make, i) => {
                    return (
                      <Option key={i} value={make}>
                        {make}
                      </Option>
                    );
                  })
                )}
              </Select>
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Full Name</label>
              <Input
                placeholder="Full Name"
                onChange={(e) => setName(e.target.value)}
              />
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Model</label>
              <Select
                showSearch
                size="large"
                placeholder="Select Model"
                onChange={handleModel}
                value={carModel ? carModel : null}
                loading={loadings}
              >
                {loadings ? (
                  <></>
                ) : errors ? (
                  message.error(errors)
                ) : (
                  models.map((model, i) => {
                    return (
                      <Option key={i} value={model}>
                        {model}
                      </Option>
                    );
                  })
                )}
              </Select>
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Email</label>
              <Input
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Pick-up postcode/suburb</label>
              <Select
                showSearch
                size="large"
                placeholder="Select Pick-up"
                onChange={handlePickUp}
                loading={locLoading}
                value={pickUp ? pickUp : null}
              >
                {locLoading ? (
                  <></>
                ) : locError ? (
                  message.error(locError)
                ) : (
                  locations.map((location, i) => {
                    return (
                      <Option key={i} value={location}>
                        {location}
                      </Option>
                    );
                  })
                )}
              </Select>
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Phone (optional)</label>
              <Input
                placeholder="Phone (optional)"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <label>Drop-off postcode/suburb</label>
              <Select
                showSearch
                size="large"
                placeholder="Select Drop-off"
                onChange={handleDropOff}
                loading={locLoading}
                value={dropOff ? dropOff : null}
              >
                {locLoading ? (
                  <></>
                ) : locError ? (
                  message.error(locError)
                ) : (
                  locations.map((location, i) => {
                    return (
                      <Option key={i} value={location}>
                        {location}
                      </Option>
                    );
                  })
                )}
              </Select>
            </InputBoxWrapper>
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div className="form-group ">
            <InputBoxWrapper className="isoInputBox">
              <Button loading={buttonLoading} onClick={calculate}>
                Submit
              </Button>
            </InputBoxWrapper>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Form;
