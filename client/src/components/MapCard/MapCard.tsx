import React, { useEffect } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { compose, withStateHandlers, withProps } from "recompose";
import {
  getPickUpAction,
  getDropOffAction,
} from "../../store/actions/location.action";

type mapProps = {
  pickUp: string;
  dropOff: string;
};

const MapCard: React.FC<mapProps> = compose(
  withStateHandlers(
    () => ({
      isOpen: false,
      // tslint:disable-next-line:align
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      }),
    }
  ),
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyA54JBsA6cxG0J32SRpAtOhUIIM_VrS40M&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({ pickUp, dropOff }) => {
  let dropOffReducer = useSelector(
    (state: RootStateOrAny) => state.dropOffReducer
  );

  let { dropOffLoading, dropOffError, dropOffData } = dropOffReducer;

  let pickUpReducer = useSelector(
    (state: RootStateOrAny) => state.pickUpReducer
  );
  let { pickUpLoading, pickUpError, pickUpData } = pickUpReducer;

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

  let markers = [
    {
      id: 1,
      latitude: pickUpLatitude,
      longitude: pickUpLongitude,
      shelter: "Pickup",
    },
    {
      id: 2,
      latitude: dropOffLatitude,
      longitude: dropOffLongitude,
      shelter: "Delivery",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPickUpAction(pickUp));
    dispatch(getDropOffAction(dropOff));

    return () => {};
  }, [dropOff, pickUp]);
  return (
    <>
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: 25.0391667, lng: 121.525 }}
        defaultOptions={{
          streetViewControl: false,
          scaleControl: false,
          mapTypeControl: false,
          panControl: false,
          zoomControl: false,
          rotateControl: false,
          fullscreenControl: false,
          disableDefaultUI: false,
          scrollwheel: false,
        }}
      >
        {markers.map((marker) => {
          //const onClick = props.onClick.bind(this, marker)
          return (
            <Marker
              key={marker.id}
              position={{ lat: marker.latitude, lng: marker.longitude }}
            >
              <InfoWindow>
                <div>{marker.shelter}</div>
              </InfoWindow>
            </Marker>
          );
        })}
      </GoogleMap>
    </>
  );
});

export default MapCard;
