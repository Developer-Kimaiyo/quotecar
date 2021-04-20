import React, { useEffect, useState } from "react";
import { PageWrapper } from "./quote.style";
import { Row, Col } from "antd";
import MapCard from "../../components/MapCard/MapCard";
import QuoteRef from "./QuoteRef/QuoteRef";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { detailsQuote } from "../../store/actions/quote.action";
import {
  getDropOffAction,
  getPickUpAction,
} from "../../store/actions/location.action";
import { initialState } from "../../contexts/app/app.reducer";


function Quote(props){
  let quoteDetails = useSelector((state: RootStateOrAny) => state.quoteDetails);
  let { loading, error, quoteDetail } = quoteDetails;
  console.log(quoteDetails);
  const pickUp = !loading && !error ? quoteDetail.pickUp : "";
  const dropOff = !loading && !error ? quoteDetail.dropOff : "";

  let dropOffReducer = useSelector(
    (state: RootStateOrAny) => state.dropOffReducer
  );

  let { dropOffLoading, dropOffError, dropOffData } = dropOffReducer;

  let pickUpReducer = useSelector(
    (state: RootStateOrAny) => state.pickUpReducer
  );
  let { pickUpLoading, pickUpError, pickUpData } = pickUpReducer;



  //location
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

  const { quoteId } = props.match.params;

const [pickUps, setPickUps] = useState();
const [dropOffs, setDropOffs] = useState();
  //life cycle
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsQuote(quoteId));
    dispatch(getPickUpAction(pickUp));
    dispatch(getDropOffAction(dropOff));
  }, [quoteId]);

  function getDistance(lat1, lon1, lat2, lon2, unit) {
    if (lat1 === lat2 && lon1 === lon2) {
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
      if (unit === "K") {
        dist = dist * 1.609344;
      }
      if (unit === "N") {
        dist = dist * 0.8684;
      }
      return dist;
    }
  }

  let pickUpDepot = pickUpDc && pickUpDc.split(" ").slice(0, 2).join(" ").toLowerCase();

  let dropUpDepot = dropUpDc && dropUpDc
    .split(" ")
    .slice(0, 2)
    .join(" ")
    .toLowerCase();

  return (
    <>
      <PageWrapper>
        <div id="content" className="hide-header">
          <div className="quote-results" style={{ display: "block" }}>
            <div className="blue_banner">
              <div className="container">
                <div className="personalised_title">
                  YOUR PERSONALISED VEHICLE TRANSPORT QUOTE
                </div>
              </div>
            </div>
            <div className="container">
              <div className="content_spacing_1"></div>
              <div className="prepared_by_title">
                Prepared by TRANSCARGO Transport Services
                <div className="content_spacing_8"></div>
              </div>
              <Row justify="space-around">
                <Col sm={24} md={11} lg={11}>
                  <QuoteRef
                    reference={!loading && !error ? quoteDetail.reference : ""}
                    carType={
                      !loading && !error
                        ? quoteDetail.carMake + " " + quoteDetail.carModel
                        : ""
                    }
                    pickUp={
                      !loading && !error ? quoteDetail.pickUp.toLowerCase() : ""
                    }
                    dropOff={
                      !loading && !error
                        ? quoteDetail.dropOff.toLowerCase()
                        : ""
                    }
                    email={!loading && !error ? quoteDetail.email : ""}
                    distance={distance}
                    pickUpDepot={pickUpDepot}
                    dropUpDepot={dropUpDepot}
                  />
                </Col>
                <Col sm={24} md={11} lg={11}>
                  <div className="text-center need_help">
                    <div className="content_spacing_10" />
                    Need Help?
                    <br /> 1300 660 616
                  </div>
                  <div className="content_spacing_5" />
                  <div className="route_map">
                    <MapCard
                      pickUp={!loading && !error ? quoteDetail.pickUp : ""}
                      dropOff={!loading && !error ? quoteDetail.dropOff : ""}
                    />
                  </div>
                  <div className="content_spacing_1" />
                </Col>
              </Row>
              <div>
                <div className="content_spacing_5" />
                <p className="terms_text text-center">
                  If you require information, please contact one of our Customer
                  Relations Officers on
                  <a href="tel:1300 660 616">1300 660 616</a> and quote your
                  reference number (
                  <span className="quote_reference">
                    {!loading && !error ? quoteDetail.reference : ""}
                  </span>
                  ).
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Quote;
