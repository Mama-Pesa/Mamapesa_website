import React from "react";

import { Img, Text } from "components";

const Testimonial = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-colors !rounded-[20px] flex flex-col p-10 sm:p-5 gap-8 items-center justify-start">
          <Text
            className="max-w-3xl md:max-w-full text-2xl md:text-[22px] text-black-900 text-center sm:text-xl tracking-[-0.48px]"
            size="txtManropeSemiBold24"
          >
            {props?.txt}
          </Text>
          <div className="flex flex-col gap-4 items-center justify-start w-[300px]">
            <Img
              className="h-14 md:h-auto rounded-[50%] w-14"
              alt="avatarimage"
              src={props?.profileImage}
            />
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtManropeSemiBold16"
              >
                {props?.name}
              </Text>
              <Text
                className="text-base text-black-900 text-center w-full"
                size="txtLatoRegular16"
              >
                {props?.title}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Testimonial.defaultProps = {
  txt: (
    <>
      &quot;MamaPesa has been a game-changer for my small business. The app not
      only helped me secure financing for crucial assets but also provided
      valuable financial insights. It&#39;s more than a tool; it&#39;s a partner
      in my journey to success.&quot;
    </>
  ),
  profileImage: "images/img_avatarimage.png",
  name: "Maria R.",
  title: "Entrepreneur",
};

export default Testimonial;
