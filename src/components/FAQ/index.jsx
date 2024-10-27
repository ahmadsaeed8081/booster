import React, { useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Button from '../Button';

const FAQ = () => {
  const [accordions, setAccordions] = useState([
    {
      key:1,
      id:"01",
      title: "What is Booster.coach?",
      data: "Booster.coach is a blockchain-powered platform that allows individuals to earn through various methods, such as matrix-based income, global royalties, and even playing games. Our system is fully transparent and controlled by blockchain technology to ensure security and fairness for all users.",
      isOpen: false,
    },
    {
      key:2,
      id:"02",
      title: "How can I earn with Booster.coach?",
      data: "There are six different ways to earn with Booster.coach: B-10 Matrix: Earn through a 10-placement system, where both working and non-working income is possible. B-5 Matrix: Similar to the B-10, but with 5 placements, giving you more earning flexibility. 25 Steps Generation Income: Earn a percentage of income from up to 25 generations of your downline. Monthly Global Royalty: Receive a percentage of global revenue based on the size of your team. Income by Playing Games: Enjoy games and earn money while having fun. Target Achievement Gifts: Unlock exclusive rewards every 10 days based on your performance.",
      isOpen: false,
    },
    {
      key:3,
      id:"03",
      title: "How does blockchain benefit me as a user?",
      data: "Blockchain ensures that all transactions are decentralized, transparent, and secure. It eliminates any risk of manipulation or fraud, meaning you can trust that all your earnings and activities on Booster.coach are fully protected.",
      isOpen: false,
    },
    {
      key:4,
      id:"04",
      title: "What is the Global Royalty system?",
      data: "Our Global Royalty system rewards achievers based on team size. As your team grows, you become eligible for higher royalty percentages, ranging from 4% to 40%, depending on your category (Iron, Bronze, Silver, Gold, Diamond, and Platinum).",
      isOpen: false,
    },
    {
      key:5,
      id:"05",
      title: "I really earn by playing games?",
      data: "Yes! One of the unique features of Booster.coach is that you can earn simply by playing games. This is perfect for those looking for an enjoyable and engaging way to boost their income.",
      isOpen: false,
    },
    {
      key:6,
      id:"06",
      title: "Do I need experience to join Booster.coach?",
      data: "Not at all! Whether you’re new to MLM or an experienced networker, Booster.coach provides the tools and community support needed for anyone to succeed. We offer training resources and a supportive network to guide you.",
      isOpen: false,
    },
    {
      key:7,
      id:"07",
      title: "What makes Booster.coach different from other MLM platforms?",
      data: "Booster.coach stands out because of its 100% blockchain-controlled system, providing total transparency and security. Plus, we offer six diverse ways to earn, including non-working income options and gaming income, which many platforms do not provide.",
      isOpen: false,
    },
    {
      key:8,
      id:"08",
      title: "How can I get started?",
      data: "Getting started is easy! Simply sign up on our platform, create your account, and explore the various earning opportunities available to you. Start building your team, play games, or dive into the matrix system to begin earning right away.",
      isOpen: false,
    }
  ]);

  const toggleAccordion = (accordionKey) => {
    const updatedAccordions = accordions.map((accordion) => {
      if (accordion.key === accordionKey) {
        return { ...accordion, isOpen: !accordion.isOpen };
      } else {
        return { ...accordion, isOpen: false };
      }
    });

    setAccordions(updatedAccordions);
  };

  return (
    <div id='faqs' className="tw-overflow-x-hidden  tw-relative tw-bg-no-repeat tw-w-full tw-bg-cover tw-h-auto tw-pb-20 tw-pt-10">
      <div className="tw-text-center">
        <Button label={'FAQs'} className={'tw-mx-auto tw-text-2xl'} />
        <h1 className="tw-text-white tw-pt-6 tw-font-zen-dots">
          Frequently Asked <b className="gradient-text tw-font-zen-dots">Questions</b>
        </h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="tw-mt-12">
              {accordions.slice(0, 4).map((accordion, index) => (
                <Accordion
                  key={accordion.key}
                  id={accordion.id}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                  customKey={`0${index + 1}`} 
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="sm:tw-mt-12 tw-mt-0">
              {accordions.slice(4).map((accordion, index) => (
                <Accordion
                  id={accordion.id}
                  title={accordion.title}
                  data={accordion.data}
                  isOpen={accordion.isOpen}
                  toggleAccordion={() => toggleAccordion(accordion.key)}
                  customKey={`${index + 5}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;