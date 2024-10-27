import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" tw-overflow-x-hidden tw-bg-[#161616]">
        <div className="container sm:tw-text-left tw-text-center tw-py-10">
          <div className="row tw-items-center  tw-justify-between">
            <div className="col-md-5">
              <img src={require("../../assets/images/logo.png")} className="" />

              <p className=" tw-text-[15px] tw-text-white tw-pt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when.
              </p>
            </div>
            <div className=" col-md-6">
              <div className="  sm:tw-float-right  tw-float-none ">
              <h4 className=" tw-uppercase  tw-font-poppins tw-text-white">
                Social media
              </h4>
              <ul className=" tw-pt-2 tw-p-0 tw-flex  tw-justify-center sm:tw-justify-start   tw-items-center">
                <li>
                  <Link
                    to={"#"}
                  >
                    <img src={require("../../assets/images/bi_facebook.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/twitter.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/instagram.png")} />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/youtube.png")} />
                  </Link>
                </li>
              </ul>

              <div className=" tw-flex sm:tw-flex-row tw-flex-col tw-gap-1  tw-justify-center sm:tw-justify-start  tw-items-center">
                <div>
                  <Link to={"#"}>
                    <img src={require("../../assets/images/mail.png")} />
                  </Link>
                </div>
                <h5 className=" tw-text-white tw-text-[17px]">
                  admin@booster.coach
                </h5>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-bg-button-gradient tw-w-full tw-py-2  tw-text-center">
        <p className=" sm:tw-text-lg tw-text-sm tw-m-0 tw-text-black  tw-font-medium tw-font-poppins">
          Copyright @2024 Booster.coach All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
