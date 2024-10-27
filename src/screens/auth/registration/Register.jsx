import React, { useState } from "react";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Button from "../../../components/Button";
import { FaRegUser } from "react-icons/fa";

import {
  cont_address,
  cont_abi,
  usdt_address,
  token_abi,
} from "../../../configs/Contracts";


import { Link, useNavigate } from "react-router-dom";

import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";
import Web3 from "web3";
import { useEffect } from "react";


const Register = (props) => {

  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();



  const { address, isConnecting ,isConnected,isDisconnected} = useAccount()
  const navigate = useNavigate();


    const [selectedOption, setSelectedOption] = useState("");
    const [refId, set_refId] = useState("");

    const { isLoading: isConfirming, isSuccess: isConfirmed} =
    useWaitForTransactionReceipt({
      hash,
    })
  
    function Convert_To_eth(val) {
      const web3 = new Web3(
        new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
      );
  
      val = web3.utils.fromWei(val.toString(), "ether");
      return val;
    }
  
    function Convert_To_Wei(val) {
      const web3 = new Web3(
        new Web3.providers.HttpProvider("https://polygon.meowrpc.com")
      );
  
      val = web3.utils.toWei(val.toString(), "ether");
      return val;
    }

    async function Register1() {

      try {
          const tx = await writeContractAsync({
            abi: cont_abi,
            address: cont_address,
            functionName: "register", 
            args: [
              
              refId
            ],
            value:( props.regFee)
          });
  

      } catch (err) {
          console.error(err);
      }

  }

  useEffect(()=>{
    if(isConfirmed)
    {
      navigate('/user-pannel');
    }
  
  
  },[isConfirmed])


   async function Register(option)
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

       if(option==0)
       {
          if(refId == "")
          {
          alert("kindly paste the referal ID");
          return;
          }

          const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com	"));
          const contract=new web3.eth.Contract(cont_abi,cont_address);

          let ref_add = await contract.methods.codeToAdress(refId).call();
          let ref = await contract.methods.user(ref_add).call();

          if(!ref[0])
          {
            alert("Given id is not registered, kindly use different id")
            return;
          }

       }
      //  else
      //  {
      //   set_refId("0");

      //  }

       if (chainId != currentChainId )
       {
         await switchChainAsync({ chainId });
         await Register1?.();
       } 
       else 
       {
         await Register1?.();
       }

       

       
       


   
    }






  return (
    <>
      <Header />
      <div id="teamSection" className=" tw-overflow-x-hidden">
        <div className=" container-fluid  sm:tw-py-16 tw-py-12">
          <div className="row  flex-column-reverse flex-md-row tw-items-center">
            <div className=" col-lg-6  col-md-12  p-0">
              <div className="  tw-bg-register_bg sm:tw-p-16 tw-p-5">
                <h1 className="  text-white sm:tw-text-left tw-text-center tw-font-zen-dots  md:tw-text-5xl sm:tw-text-4xl tw-text-2xl">
                  Welcome to the{" "}
                  <span className=" gradient-text tw-font-zen-dots   md:tw-text-5xl sm:tw-text-4xl tw-text-2xl">
                    Booster.coach{" "}
                  </span>
                </h1>

                <p className=" tw-text-white tw-text-xl sm:tw-text-left tw-text-center">
                  Meta force is the flagship of decentralized systems, offering
                  a wide range of product
                </p>

                <div className="row  g-4 tw-pt-12">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="col-md-6">
                      <div className=" tw-rounded-xl tw-h-64 tw-p-5 tw-border tw-border-[#FFE39C]">
                        <div className="">
                          <div className="row">
                            <div className=" col-md-9">
                              <img
                                src={member.image}
                                className="  tw-object-center"
                                alt={member.name}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="tw-pb-8 ">
                          <h3 className=" tw-text-white tw-text-xl  tw-font-zen-dots ">
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
            <div className=" col-lg-6 col-md-12">
              <div className="  sm:tw-text-left tw-text-center sm:tw-p-16 tw-p-5">
                <h1 className="  text-white   tw-font-zen-dots  md:tw-text-4xl sm:tw-text-3xl tw-text-2xl">
                  Registering for <br />
                  <span className=" gradient-text tw-font-zen-dots   md:tw-text-4xl sm:tw-text-3xl tw-text-2xl">
                    Booster.coach
                  </span>
                </h1>
                <p className=" tw-text-white tw-text-lg">
                  Do you already have an upline?
                </p>

                <div className=" tw-flex tw-gap-3.5">
                  <button onClick={() => setSelectedOption("yes")} className={`tw-border ${selectedOption==='yes'?' tw-bg-[#FFEA44]  tw-text-black':' tw-text-white'}  tw-py-4 tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-[#FFEA44] hover:tw-text-black`}>
                    Yes
                  </button>
                  <button   onClick={() => setSelectedOption("no")} className={`tw-border ${selectedOption==='no'?' tw-bg-[#FFEA44]  tw-text-black':' tw-text-white'}  tw-py-4 tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300 hover:tw-bg-[#FFEA44] hover:tw-text-black`}>
                    No
                  </button>
                </div>

                <div className="tw-pt-8">
        {selectedOption === "yes" ? (
          <>
             
           <div className=" tw-pb-5">
             <input  
             className=" tw-bg-[#1B1B1B] tw-w-full tw-py-5 tw-text-white tw-font-poppins px-4 tw-rounded-md" 
             placeholder="Write upline id" 
             value={refId}
             onChange={(e) => {
              set_refId(e.target.value);

             }}
             
             />
            
            
            </div>  

              <button  
              onClick={()=>Register(0)}
              className={`tw-border tw-text-black tw-py-4 tw-font-poppins tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300 tw-bg-[#FFEA44] hover:tw-text-black`}>
                  Register
                  </button>
          </>
        ) : selectedOption === "no" ? (
          <>
             <button
               className={`tw-border tw-text-black tw-py-4 tw-font-poppins tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300 tw-bg-[#FFEA44] hover:tw-text-black`}
               onClick={()=>Register(1)}
               >
                  Register
                  </button>
          </>
        ) : (
          <>
            <h5 className="tw-text-white tw-font-poppins ">
              Need help using the Booster.coach platform?
            </h5>
            <p className="tw-font-normal tw-text-white tw-font-poppins tw-py-3">
              Get professional support from Booster.coach specialists in the online chat.
            </p>

            
            <Button
                  Icons={<FaRegUser color="black" />}
                  className={"  tw-font-semibold tw-rounded-tl-md tw-w-full"}
                  label={"Contact Support"}
                />
          </>
        )}
      </div>




              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

const teamMembers = [
  {
    name: "Direct Income",
    role: "Register with a referral link, then you have a better chance that the people you invite will register strictly by your link.",
    image: require("../../../assets/images/material-symbols_data-exploration-outline.png"),
  },
  {
    name: "Level Income",
    role: "By participating in the program, you get profit and maintain the balance of our system.",
    image: require("../../../assets/images/arcticons_pdf-doc-scan.png"),
  },
  {
    name: "Monthly Salary",
    role: "The Uniteverse GameAf is the heart of our Metauniverse, its core layer, a simulation of real life.",
    image: require("../../../assets/images/ri_nft-line.png"),
  },
  {
    name: "Game Earning",
    role: "NFT Marketplace (coming soon) - gives you the opportunity to buy or sell your NFTs.",
    image: require("../../../assets/images/material-symbols_admin-panel-settings-rounded.png"),
  },
];

export default Register;
