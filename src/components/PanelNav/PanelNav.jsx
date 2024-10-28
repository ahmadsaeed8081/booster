import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import Button from "../Button";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { FiSearch } from "react-icons/fi";


import { useWeb3Modal,useWeb3ModalTheme,use } from '@web3modal/wagmi/react'
import { useAccount, useReadContract, useWriteContract } from "wagmi";

const PanelNav = (props) => {
  const [searchUser, set_searchUser] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (route) => location.pathname.includes(route);
  
  const { open, close } = useWeb3Modal()
  const { isConnected,isDisconnected,chain } = useAccount()
  const { address } = useAccount();


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
      setScrollBackground(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

useEffect(()=>{

  if(isDisconnected)
  {
    navigate("/")
  }




},[address])
  
  return (
    <nav className={`tw-top-0  tw-w-full tw-z-20 ${scrollBackground ? "tw-bg-black" : ""}`}>
      <div className="tw-flex  tw-relative  tw-items-center tw-font-medium tw-h-32 tw-container sm:tw-px-5 tw-px-3 tw-mx-auto tw-justify-between">
        <div>
          <img
            src={require("../../assets/images/logo.png")}
            className="tw-object-contain tw-w-[180px]"
            alt="Logo"
          />
        </div>

        {/* Desktop Search */}
        

        {/* Mobile Search */}
        <div className="tw-flex  tw-gap-3 tw-items-center lg:hidden">
        <div className="hidden  tw-relative xl:tw-w-[800px] tw-w-[280px] cursor-pointer tw-hidden sm:tw-block">
          <input
            placeholder="Search User Code"
            className="tw-bg-[#1E1E1E] tw-text-white tw-outline-none tw-pl-12 tw-p-3 tw-rounded-full tw-w-full"
            type="number"
            value={searchUser}
            onChange={(e) =>
              set_searchUser(e.target.value)
            }
          />
          <FiSearch onClick={()=>props.search_user(searchUser)} color="#A0A0A0" size={25} className="tw-absolute tw-top-3 tw-left-4" />
        </div>
          <div onClick={() => setSearchVisible(!searchVisible)} className="cursor-pointer tw-block sm:tw-hidden">
            <FiSearch color="#A0A0A0" size={25} />
          </div>
          {searchVisible && (
            <div className="tw-absolute tw-left-2 tw-top-9 tw-w-[75%]">
              <input
                placeholder="Search"
                className="tw-bg-[#1E1E1E] tw-text-white tw-pl-12 tw-p-3 tw-w-full tw-rounded-full"
                type="number"
                value={searchUser}
                onChange={(e) =>
                  set_searchUser(e.target.value)
                }
              />
              <FiSearch
              onClick={()=>props.search_user(searchUser)}
                color="#A0A0A0"
                size={25}
                className="tw-absolute tw-top-3 tw-left-4"
              />
            </div>
          )}
          <div className="tw-flex tw-gap-4 tw-items-center"
                          onClick={() => open()}                          >
            <p className="tw-text-white sm:tw-block tw-hidden tw-m-0 tw-font-poppins tw-font-medium"
            
            >
              {isConnected?("Logout"):("Connect")}
            </p>
            <img src={require("../../assets/images/logout.png")} alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PanelNav;
