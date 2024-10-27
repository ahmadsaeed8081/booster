import React, { useState } from "react";
import Button from "../Button";
import Header from "../header";
import { Link, useNavigate } from "react-router-dom";

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";
import Web3 from "web3";


const Hero = (props) => {

  const { address, isConnecting ,isConnected,isDisconnected} = useAccount()
  const navigate = useNavigate();

 function checkLogin()
 {
    if(isDisconnected)
    {
      alert("Kindly Connect your Wallet");
      return;
    }
    if(!props.isRegister)
    {
      alert("You are not a register memeber, Kindly Register yourself in the booster community");
      return;
    }

    navigate('/user-pannel');
 }

 function checkRegistration()
 {
    if(isDisconnected)
    {
      alert("Kindly Connect your Wallet");
      return;
    }
    if(props.isRegister)
    {
      alert("You are already a registered memeber of booster community");
      return;
    }

    navigate('/register');
 }



  return (
    <div className="   tw-bg-cover tw-relative tw-bg-center tw-w-full tw-h-auto">
      <Header />
    

      <div className="container tw-relative tw-pt-6 tw-pb-28">
        <div className="row    sm:tw-text-left tw-text-center g-5 tw-items-center">
          <div className="col-lg-6 col-md-12">
            <h1 className="  text-white  tw-font-zen-dots  md:tw-text-5xl sm:tw-text-4xl tw-text-2xl">
            
              Welcome to <span className=" gradient-text tw-font-zen-dots   md:tw-text-5xl sm:tw-text-4xl tw-text-2xl">Booster.coach - </span> 100% Blockchain
             
            </h1>
            <p className=" tw-text-white sm:tw-text-start tw-text-center    tw-font-extralight tw-leading-7 tw-pt-4 tw-text-lg t">
            Are you ready to take control of your financial future? Booster.coach offers a revolutionary income system powered by blockchain technology,
            </p>
            <div className=" tw-flex tw-gap-5  tw-relative  tw-z-10 sm:tw-justify-start tw-justify-center">

              {/* <Link to={'/user-pannel'}> */}
              <Button

                onClick={checkLogin}
                Icons={<img  src={require('../../assets/images/ri_login-circle-line.png')} alt="" />}
                label={"Login"}
                className={"  tw-font-zen-dots tw-text-[19px]   tw-cursor-pointer tw-px-9  h-[80] tw-rounded-tl-lg tw-mt-7"}
                
              />
              {/* </Link> */}


              <Button
                onClick={checkRegistration}
                Icons={<img  src={require('../../assets/images/mdi_register.png')} alt="" />}
                label={"Registration"}
                className={"  tw-font-zen-dots tw-text-[19px] tw-px-6  h-[80] tw-rounded-tl-lg tw-mt-7"}
                
              />
            
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className=" row">
              <div className="col-md-10  tw-mx-auto">
              <img src={require('../../assets/images/home.png')} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" tw-absolute tw-right-0 tw-top-0">
        <img  src={require('../../assets/images/home_right.png')}  alt="" />
      </div>
    </div>
  );
};

export default Hero;
