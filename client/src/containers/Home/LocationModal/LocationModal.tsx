import React, { useState } from "react";
import { closeModal } from "@redq/reuse-modal";
import MaskedInput from "react-text-mask";
import {
  Wrapper,
  Container,
  Heading,
  SubHeading,
  OfferSection,
  Offer,
  Button,
  Input,
} from "./LocationModal.style";
import { GiftBox } from "../../../components/AllSvgIcon";

export default function LocationModal() {
  const [zipcode, setZipcode] = useState("");
  const handleZipCode = () => {
    closeModal();
  };

  return (
    <Wrapper>
      <Container>
        <Heading>Select Your Location</Heading>
        <SubHeading>
          You have to select your location for deliver service perpous
        </SubHeading>
        <MaskedInput
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/]}
          placeholder="Enter Your ZIP Code:"
          id="input-id"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          render={(ref, props) => <Input ref={ref} {...props} />}
        />
        <Button onClick={handleZipCode} />
      </Container>
      <OfferSection>
        <GiftBox />
        <Offer>Free Delivery For 1st Order</Offer>
      </OfferSection>
    </Wrapper>
  );
}
