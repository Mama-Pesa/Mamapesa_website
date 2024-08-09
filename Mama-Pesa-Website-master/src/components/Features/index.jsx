import React from "react";

import { Img, Text } from "components";

const Features = (props) => {
  return (
    <>
    
      <div className={props.className}>
      <div className= 'outline outline-[1px] outline-black-900 w-full p-10 sm:p-5'>
        <Img className="h-12 w-12" alt="logos" src={props?.icon} />
        <div className="flex flex-col gap-6 items-start justify-start w-full">
          <Text
            className="text-2xl md:text-[22px] text-black-900 sm:text-xl tracking-[-0.48px] w-full"
            size="txtManropeSemiBold24"
          >
            {props?.title}
          </Text>
          <Text
            className="max-w-[405px] md:max-w-full text-base text-black-900"
            size="txtLatoRegular16"
          >
            {props?.description}
          </Text>
          </div>
        </div>
      </div>
    </>
  );
};

Features.defaultProps = {
  icon: "images/img_logos_gray_900.svg",
  title: "Unlock Your Potential",
  description: (
    <>
      MamaPesa is your go-to platform for securing funding and unlocking your
      potential. Whether you&#39;re an entrepreneur with a business idea or a
      career-driven individual, we provide the financial support you need to
      achieve your goals.
    </>
  ),
};

export default Features;
