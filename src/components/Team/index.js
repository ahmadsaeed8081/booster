import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <div
      id="teamSection"
      className=""
    >
      <div className="container tw-py-16">
      <span className=' gradient-text tw-font-zen-dots  tw-font-semibold tw-text-[18px] tw-justify-center tw-flex tw-items-center tw-gap-4'>  <p className='tw-font-zen-dots tw-text-lg  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-0.5 tw-bg-button-gradient'></p>Why Choose us   <p className='tw-font-zen-dots tw-text-lg  sm:tw-block tw-hidden m-0 tw-w-16 tw-h-0.5 tw-bg-button-gradient'></p> </span>
        <h1 className="tw-text-white tw-pt-4  tw-text-center tw-font-zen-dots md:tw-text-[45px] tw-text-[30px]">
        Core Benefits
        </h1>
        <p className=" tw-text-white tw-text-center">By leveraging blockchain, we ensure that every transaction and earning process is secure, decentralized, and reliable. Whether you’re looking to build a team, earn passively, or even make money through gaming, we have the tools and the community to help you succeed.</p>
        <div className="row  tw-pt-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-lg-4 g-4 col-md-6 ">
              <div className=" tw-rounded-xl tw-h-72 tw-p-5 tw-border tw-border-[#FFE39C]">
                <div className="">
                  
                  <div className="row">
                  <div className=" col-md-9">
                  <img
                      src={member.image}
                      className=" tw-h-[86px] tw-object-center"
                      alt={member.name}
                    />
                  </div>
                  </div>
                </div>
                <div className="tw-pb-8 ">
                  <h3 className=" tw-text-white tw-text-2xl  tw-font-zen-dots ">
                    {member.name}
                  </h3>
                  <p className="tw-text-white m-0">{member.role}</p>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Zero Risk",
    role: "The human factor is excluded. The smart contract does not depend on anyone, there is no way to stop the platform",
    image: require("../../assets/images/fluent_time-and-weather-20-filled.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Instant transactions",
    role: "The profit routes from other members directly into your personal wallet. There is no hoarding in the system, the income belongs only to you",
    image: require("../../assets/images/hugeicons_bitcoin-transaction.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Immutability of conditions",
    role: "Nobody can exclude you from the platform, because there is no such function in the contract. And the information recorded in the network blocks cannot be changed",
    image: require("../../assets/images/flowbite_chart-mixed-dollar-solid.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Transparency and Anonymity",
    role: "The smart contract is public. Anyone can see the code and the entire transaction history. This guarantees the integrity of the system and real project statistics.",
    image: require("../../assets/images/f7_person-3-fill.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "Decentralization",
    role: "There are no managers or administrators, there are only the creators who are equal participants in the project, like everyone else",
    image: require("../../assets/images/tdesign_map-setting.png"),
    
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
  {
    name: "100% online",
    role: "All funds are transferred between members, there are no hidden fees. The contract balance is always zero",
    image: require("../../assets/images/hugeicons_presentation-online.png"),
    links: [
      { url: "", icon: "ic_sharp-discord.png", alt: "Discord" },
      { url: "", icon: "Symbol.png", alt: "Symbol" },
      { url: "", icon: "iconoir_telegram.png", alt: "Telegram" },
    ],
  },
];

export default Team;
