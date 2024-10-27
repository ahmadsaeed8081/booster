import React from "react";
import Button from "../Button";

const RoadMap = () => {
  return (
    <div id="roadSection" className="  container   tw-pb-12">
      <div className="  sm:tw-pb-0 ">
        <span className=" gradient-text tw-font-zen-dots  tw-font-semibold tw-text-[18px] tw-justify-center tw-flex tw-items-center tw-gap-4">
          {" "}
          <p className="tw-font-zen-dots tw-text-lg  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-0.5 tw-bg-button-gradient"></p>{" "}
          Road map{" "}
          <p className="tw-font-zen-dots tw-text-lg  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-0.5 tw-bg-button-gradient"></p>{" "}
        </span>
        <div className=" tw-text-center">
          <h1 className="tw-text-white tw-pt-6 tw-font-zen-dots">
            Millionaire Maker
          </h1>
          <p>
            <h3 className="  text-white  tw-font-zen-dots">
              Booster lite
              <span className=" gradient-text tw-font-zen-dots  ">
                {" "}
                (First Program)
              </span>
            </h3>
          </p>
        </div>

        <div className=" ">
       
        <div className="  tw-border-t tw-mt-16 tw-border-[#FFD66D]"></div>

        <div className=" tw-grid  -tw-translate-y-5 tw-gap-3 sm:tw-grid-cols-4 tw-grid-cols-2">
          <div>
            <img
              src={require("../../assets/images/check.png")}
              className=" tw-mx-auto"
              alt=""
            />

            <div className=" tw-pt-12">
              <div
                className={`  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
              >
                <h6 className="tw-text-white  tw-font-zen-dots ">
                First Target Achievers Reward Distribution
                </h6>
              </div>
            </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}   className=" tw-mx-auto" alt="" />
            <div className=" tw-pt-12" >
        <div
          className={`   tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white sm:tw-text-base tw-text-sm  tw-font-zen-dots  ">
          First Monthly Global royalty distribution 
          </h6>
        </div>
      </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}   className=" tw-mx-auto" alt="" />
            <div className=" tw-pt-12" >
        <div
          className={`  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white sm:tw-text-base tw-text-sm  tw-font-zen-dots ">
          Start Earn by playing games 
          </h6>
        </div>
      </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}   className=" tw-mx-auto" alt="" />
            <div
          className={` tw-flex   tw-mt-12 tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white   sm:tw-text-base tw-text-sm tw-font-zen-dots ">
          Booster Coin launch 
          </h6>
        </div>
          </div>
        </div>
       
      </div>
      </div>

      <div className="  tw-pt-5">
        <div className=" tw-text-center">
          <h2 className="tw-text-white tw-pt-6 tw-font-zen-dots">
            Billionaire Maker
          </h2>
          <p>
            <h3 className="  text-white  tw-font-zen-dots">
              Global Booster
              <span className=" gradient-text tw-font-zen-dots  ">
                {" "}
                (Second Program)
              </span>
            </h3>
          </p>
        </div>


        <div className="  tw-border-t tw-mt-16 tw-border-[#FFD66D]"></div>

        <div className=" tw-grid  tw-gap-3  -tw-translate-y-5 sm:tw-grid-cols-4 tw-grid-cols-2">
          <div>
            <img
              src={require("../../assets/images/check.png")}
              className=" tw-mx-auto"
              alt=""
            />

            <div className=" tw-pt-12">
              <div
                className={`   tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
              >
                <h6 className="tw-text-white sm:tw-text-base tw-text-sm  tw-font-zen-dots ">
                  Start Monthly Global Royalty Distribution Without any
                  condition
                </h6>
              </div>
            </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}  className=" tw-mx-auto" alt="" />
            <div className=" tw-pt-12">
        <div
          className={`  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white   sm:tw-text-base tw-text-sm tw-font-zen-dots">
            Booster wallet{" "}
          </h6>
        </div>
      </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}  className=" tw-mx-auto" alt="" />
            <div className=" tw-pt-12" >
        <div
          className={`  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white sm:tw-text-base tw-text-sm  tw-font-zen-dots ">
            (Continue){" "}
          </h6>
        </div>
      </div>
          </div>
          <div>
            <img src={require("../../assets/images/check.png")}  className=" tw-mx-auto" alt="" />
            
          </div>
        </div>
       
      </div>
    </div>
  );
};

const RoadMapPhase = ({ phase, title, items, para, className }) => (
  <div className="">
    <div className="row  tw-pt-3 tw-items-center">
      <div className={`col-md-3  tw-mx-auto `}>
        <div
          className={` tw-flex tw-justify-center tw-items-center  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white  tw-font-zen-dots  tw-pt-4">
            First Target Achievers Reward Distribution
          </h6>
        </div>
      </div>

      <div className={`col-md-3  tw-mx-auto `}>
        <div
          className={` tw-flex tw-justify-center tw-items-center  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white  tw-font-zen-dots  tw-pt-4">
            First Monthly Global royalty distribution{" "}
          </h6>
        </div>
      </div>
      <div className={`col-md-3  tw-mx-auto `}>
        <div
          className={` tw-flex tw-justify-center tw-items-center  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white  tw-font-zen-dots  tw-pt-4">
            Start Earn by playing games{" "}
          </h6>
        </div>
      </div>
      <div className={`col-md-3  tw-mx-auto `}>
        <div
          className={` tw-flex tw-justify-center tw-items-center  tw-border-[#FFD66D]   tw-pl-3 tw-border-l-2`}
        >
          <h6 className="tw-text-white  tw-font-zen-dots  tw-pt-4">
            Booster Coin launch{" "}
          </h6>
        </div>
      </div>
    </div>
  </div>
);



export default RoadMap;
