import React from "react";
const About = () => {
  return (
    <div
      id="aboutSection"
      className="  tw-relative tw-py-20  tw-w-full tw-h-auto"
    >
      <div className="container">
        <div className="row  sm:tw-text-start  tw-text-center g-5 tw-items-center">
          <div className="col-lg-7 col-md-12">
            <span className=" gradient-text tw-font-zen-dots  tw-font-semibold tw-text-[18px] sm:tw-justify-start tw-justify-center tw-flex tw-items-center tw-gap-4">
              {" "}
              <p className="tw-font-zen-dots tw-text-lg  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-1 tw-bg-button-gradient"></p>
              About us
            </span>
            <h1 className=" tw-text-white   tw-font-zen-dots  md:tw-text-[45px] tw-text-[28px]">
              Where innovation meets{" "}
              <span className="gradient-text tw-font-zen-dots">
                opportunity
              </span>
            </h1>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 tw-pt-4 ">
              Welcome to Booster.coach, where innovation meets opportunity! Our
              company is built on the revolutionary power of blockchain
              technology, providing a 100% blockchain-controlled income system.
              At Booster.coach, we are dedicated to offering a unique and
              transparent platform where anyone can earn through multiple
              avenues, from referral-based income to gaming rewards.
            </p>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 ">
              Our mission is to empower individuals around the globe to achieve
              financial freedom through innovative earning methods. With six
              powerful income streams, including our groundbreaking matrix
              system and global royalty opportunities, we provide an environment
              where both experienced and new networkers can thrive.{" "}
            </p>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 ">
              At Booster.coach, we believe in fairness, transparency, and the
              power of technology to transform lives. By leveraging blockchain,
              we ensure that every transaction and earning process is secure,
              decentralized, and reliable. Whether you’re looking to build a
              team, earn passively, or even make money through gaming, we have
              the tools and the community to help you succeed.
            </p>
            <p className=" tw-text-white  sm:tw-text-start tw-text-center  tw-leading-8 ">
              Join us and become part of a fast-growing community that’s
              redefining financial success in the digital age.
            </p>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="row">
              <div className="col-md-12 tw-mx-auto">
                <div className=" tw-relative ">
                  <img
                    src={require("../../assets/images/about.png")}
                    className=" tw-w-full"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
