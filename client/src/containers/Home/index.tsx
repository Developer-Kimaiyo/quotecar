import React from "react";
import Banner from "./Banner/Banner";
import bannerData from "../../data/banner";
import trustData from "../../data/Partners";
import serviceData from "../../data/service";
import testimonial from "../../data/testimonial";
import blockData from "../../data/block";
import Quote from "./Quote/Quote";
import { openModal, Modal } from "@redq/reuse-modal";
import LocationModal from "./LocationModal/LocationModal";
import SubSectionA from "./SubSectionA/SubSectionA";
import SubSectionB from "./SubSectionB/SubSectionB";
import SubSectionC from "./SubSectionC/SubSectionC";
import Trust from "./Trust/Trust";

function HomePage({}) {
  React.useEffect(() => {
    const modalTimer = setTimeout(() => {
      openModal({
        show: true,
        overlayClassName: "quick-view-overlay",
        closeOnClickOutside: true,
        component: LocationModal,

        config: {
          enableResizing: false,
          disableDragging: true,
          className: "quick-view-modal",
          width: 458,
          height: "auto",
        },
      });
    }, 1800);
    return () => {
      clearTimeout(modalTimer);
    };
  }, []);

  return (
    <>
      <Modal>
        <Banner content={bannerData} />
        <Quote
          title="Vehicle Transport Quote"
          content="Enter a few basic details and you can have prices and options
                in-hand guaranteed for 28 days."
          subtitle=" Receive a vehicle transport quote in under a minute!"
        />
        <SubSectionA content={blockData} />
        <SubSectionB
          content={serviceData}
          title="PrixCar Services"
          subtitle="PrixCar is Australia’s premier automotive logistics services
            company. We have a proud history specialising in vehicle
            transportation, vehicle processing, fleet services & dealer
            services. We take the time to deliver superior results with every
            service."
        />
        <SubSectionC
          content={testimonial}
          title="WE ARE DEDICATED TO PROVIDE THE BEST SERVICE  AT THE
                LOWEST POSSIBLE COST"
          button="LEARN MORE"
        />
        <Trust
          content={trustData}
          title="PrixCar Partnerships"
          subtitle=" We are trusted by some of the most respected Automotive brands to
              provide services and transportation they need to operate
              successfully!"
        />
      </Modal>
    </>
  );
}

export default HomePage;
