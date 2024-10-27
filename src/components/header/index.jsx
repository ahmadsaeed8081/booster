import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";


const Header = () => {




  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();


  const [open1, setOpen] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);

  const handleNavigate = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`tw-top-0 tw-relative tw-w-full tw-z-20 ${
        scrollBackground ? "" : ""
      } `}
    >
      <div className="tw-flex tw-items-center tw-font-medium tw-h-32 container tw-mx-auto tw-justify-between">
        <div className="">
          <img
            src={require("../../assets/images/logo.png")}
            className="tw-object-contain tw-w-[180px]"
            alt="Logo"
          />
        </div>

        <div className=" tw-flex tw-gap-16  tw-items-center ">
          <ul className="lg:tw-flex tw-hidden tw-items-center tw-pt-2 tw-gap-8 tw-font-[Poppins]">
            <li>
              <Link className={`tw-text-[#DDA80E]`} to={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={() => handleNavigate("/", "aboutSection")}
                className="tw-text-white"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                onClick={() => handleNavigate("/", "roadSection")}
                className="tw-text-white"
              >
                Road Map
              </Link>
            </li>

            <li>
              <Link to={"#"} className="tw-text-white">
                Plan
              </Link>
            </li>

            <li>
              <Link
                to={"#"}
                onClick={() => handleNavigate("/", "faqs")}
                className="tw-text-white"
              >
                Faq
              </Link>
            </li>
          </ul>

          <div className="md:tw-block tw-hidden">
            <Button
              
              onClick={() => open()}
              Icons={<FaRegUser color="black" />}
              className={"  tw-font-semibold"}
              label={!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}
              />
          </div>
        </div>
        <div
          className="tw-text-3xl lg:tw-hidden  tw-z-50"
          onClick={() => setOpen(!open1)}
        >
          {open1 ? <MdOutlineClose color="white" /> : <MdMenu color="white" />}
        </div>

        {/* Mobile nav */}
        <div
          className={`
            lg:tw-hidden tw-z-40    tw-bg-black  tw-shadow-xl  tw-fixed tw-w-full tw-top-0 tw-overflow-y-auto tw-bottom-0 tw-leading-10 tw-py-10 
            tw-duration-500 ${open1 ? "tw-left-0 " : "  tw-left-[-100%]"}
          `}
        >
          <div className="tw-pb-5 tw-px-8">
            <img
              src={require("../../assets/images/logo.png")}
              className="tw-object-contain tw-w-[180px]"
              alt="Logo"
            />
          </div>

          <ul className="tw-p-0 tw-relative tw-px-9 tw-pt-3 ">
            <li>
              <Link
                className={`${
                  isActive("/") ? " tw-text-white" : "tw-text-white"
                }tw-text-white`}
                to={"/"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/"}
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/", "aboutSection");
                }}
                className="tw-text-white"
              >
                About us
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                onClick={() => {
                  setOpen(false);
                  handleNavigate("/", "roadSection");
                }}
                className="tw-text-white"
              >
                Road Map
              </Link>
            </li>
            <li>
              <Link to={"#"} className="tw-text-white">
                Plan
              </Link>
            </li>

            <li>
              <Link
                to={"/"}
                onClick={() => {
                  handleNavigate("/", "faqs");

                  setOpen(false);
                }}
                className="tw-text-white"
              >
                Faq
              </Link>
            </li>

            <li className=" tw-pt-5">
              <Button
                
                onClick={() => open()}
                Icons={<FaRegUser color="black" />}
                label={!isConnected?("Connect Wallet"):(address.slice(0,4)+"...."+address.slice(39,42))}
                
                />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
