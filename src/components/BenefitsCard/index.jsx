import React from "react";

import { Img, Text } from "components";

const BenefitsCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col h-full items-end justify-center w-full">
          <Img
            className="sm:h-[Auto%] h-full object-cover w-full"
            alt="placeholderimag"
            src={props?.img}
          />
        </div>
        <div className="flex flex-1 flex-col h-full items-start justify-center p-6 md:p-[] md:pb-[] md:pl-[] md:pr-[] md:pt-[] sm:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col gap-2 items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.48px] w-full"
                size="txtManropeSemiBold24"
              >
                {props?.title}
              </Text>
              <Text
                className="max-w-[272px] md:max-w-full text-base text-black-900"
                size="txtLatoRegular16"
              >
                {props?.desc}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

BenefitsCard.defaultProps = {
  img: "images/img_placeholderimage_368x320.png",
  title: "Protect Your Future",
  desc: "Safeguard against unexpected events with our comprehensive insurance options. Get covered today!",
};

export default BenefitsCard;
