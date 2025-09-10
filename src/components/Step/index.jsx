import React from "react";

import { Img, Line, Text } from "components";

const Step = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-2 gap-4 items-center justify-start w-auto">
          <Img className="h-12 w-12" alt="share" src={props?.icon} />
          <Line className="bg-black-900 h-[100px] w-0.5" />
        </div>
        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
          <Text
            className="text-black-900 text-xl w-full"
            size="txtRobotoBold20"
          >
            {props?.title}
          </Text>
          <Text
            className="max-w-[528px] md:max-w-full text-base text-black-900"
            size="txtLatoRegular16"
          >
            {props?.text}
          </Text>
        </div>
      </div>
    </>
  );
};

Step.defaultProps = {
  icon: "images/img_file.svg",
  title: "Apply for Funding",
  text: "Enter your information to start your journey towards financial independence.",
};

export default Step;
