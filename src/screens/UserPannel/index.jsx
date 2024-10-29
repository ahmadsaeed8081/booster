import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import PanelNav from "../../components/PanelNav/PanelNav";
import { Link } from "react-router-dom";
import PlatFromTable from "../../components/platFormTable";
import moment from "moment";
import { MdModeEditOutline } from "react-icons/md";
import Loader from "../../components/Loader";

import {
  cont_address,
  cont_abi,
  usdt_address,
  token_abi,
  cont_Name,
  cont_Name_abi
} from "../.././../src/configs/Contracts";
import { useLocation } from "react-router-dom";
import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";
import Web3 from "web3";
import { prototype } from "react-copy-to-clipboard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserPannel = (props) => {
  // levelData={levelData} badge={badge} monthlySalary={monthlySalary} totalEarning={totalEarning} levelEarning={levelEarning} B10Earning={B10Earning} B5Earning={B5Earning} isActiveMember={isActiveMember} totalMonthlySalaryWithdraw={totalMonthlySalaryWithdraw} totalTeam={totalTeam} refCode={refCode} upliner={upliner} isRegister={isRegister}
  const notify = () => toast("Referral link is copied!");
  const copyAddress = () => toast("Address is copied!");

  useEffect(() => {
    const unloadCallback1 = (event) => {
      event.preventDefault();
      alert("nkjnkj n jn")
      return "";
    };
  
    window.addEventListener("beforeunload", unloadCallback1);
    // return () => window.removeEventListener("beforeunload", unloadCallback1);
  }, []);

  const Level = [
    {
      id: 1,
      level: "01",
      price: "6.5",
      isjoined :props.levelData? props.levelData[0].joined:false,
    },
    {
      id: 2,
      level: "02",
      price: "18",
      isjoined : props.levelData? props.levelData[1][0]:false,

    },
    {
      id: 3,
      level: "03",
      price: "34",
      isjoined : props.levelData? props.levelData[2][0]:false,

    },
    {
      id: 4,
      level: "04",
      price: "52",
      isjoined :props.levelData? props.levelData[3][0]:false,

    },
    {
      id: 5,
      level: "05",
      price: "86",
      isjoined :props.levelData? props.levelData[4][0]:false,

    },
    {
      id: 6,
      level: "06",
      price: "136",
      isjoined :props.levelData? props.levelData[5][0]:false,

    },
    {
      id: 7,
      level: "07",
      price: "272",
      isjoined :props.levelData? props.levelData[6][0]:false,

    },
    {
      id: 8,
      level: "08",
      price: "544",
      isjoined :props.levelData? props.levelData[7][0]:false,

    },
    {
      id: 9,
      level: "09",
      price: "1088",
      isjoined :props.levelData? props.levelData[8][0]:false,

    },
    {
      id: 10,
      level: "10",
      price: "2176",
      isjoined :props.levelData? props.levelData[9][0]:false,

    },
    ,
    {
      id: 11,
      level: "11",
      price: "4352",
      isjoined :props.levelData? props.levelData[10][0]:false,

    },
    ,
    {
      id: 12,
      level: "12",
      price: "8704",
      isjoined :props.levelData? props.levelData[11][0]:false,

    },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const image = URL.createObjectURL(file);
      setSelectedImage(image);
    }
  };

  const calculateTimeLeft = () => {
    const difference = Number(props.leftTime) * 1000 - new Date();
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [choosed_level, set_choosed_level] = useState({});
  const [edit_state, set_EditState] = useState(false);
  const [level_unlockProcessing, set_level_unlockProcessing] = useState(false);

  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);





  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const [count, set_count] = useState(0);
  const [badge, set_badge] = useState("");
  const [newName, set_newName] = useState("");

  
  const { address, isConnecting ,isConnected,isDisconnected} = useAccount()
  // const navigate = useNavigate();




    const { isLoading: isConfirming, isSuccess: isConfirmed} =
    useWaitForTransactionReceipt({
      hash,
    })
  
    

    async function level_unlock1() {

      try {
          const tx = await writeContractAsync({
            abi: cont_abi,
            address: cont_address,
            functionName: "unlock_level", 
            args: [
              
              Number(choosed_level.id) - 1
            ],
  
          });
  
          set_count(1)

      } catch (err) {
          console.error(err);
      }

  }

  async function monthlySalary1() {

    try {
        const tx = await writeContractAsync({
          abi: cont_abi,
          address: cont_address,
          functionName: "withdraw_Monthly_salary", 

        });
        set_count(1)


    } catch (err) {
        console.error(err);
    }

}

async function GiftRew1() {

  try {
      const tx = await writeContractAsync({
        abi: cont_abi,
        address: cont_address,
        functionName: "withdraw_Monthly_salary", 

      });
      set_count(1)


  } catch (err) {
      console.error(err);
  }

}

async function updateName1() {

  try {
      const tx = await writeContractAsync({
        abi: cont_Name_abi,
        address: cont_Name,
        functionName: "update_Name", 
        args: [
          newName
        ],
      });
      set_count(1)
  } catch (err) {
      console.error(err);
  }

}

  async function usdt_approval () {
    try {
        const tx = await writeContractAsync({
          abi: token_abi,
          address: usdt_address,
          args: [cont_address, choosed_level.price*10**6],
          functionName: "approve",

        }); 
        // stake1();
  
       } catch (err) {
        console.error(err);
    }
  }

  useEffect(()=>{
    if(isConfirmed)
    {

      if(count==0 && level_unlockProcessing)
      {
        set_level_unlockProcessing(false);
        level_unlock1();
  
      }
      if(count==1)
      {
        set_count(0)
        // notify()
        props.get_data();
      }
    }
    set_EditState(false)
    set_newName(props.myName)
    find_badge()
  
  },[isConfirmed,props.badge])



  useEffect(()=>{
    if(Object.keys(choosed_level).length !==0)
    {
      unlock_level()
    }
  
  },[choosed_level])

   async function unlock_level()
    {

       if(isDisconnected)
       {
         alert("Kindly Connect your Wallet");
         return;
       }
       if(props.isDummyState)
       {
        alert("You cannot perform any transaction");
        return;
       }
       if(!props.isRegister)
       {
         alert("You are not a registered memeber");
         return;
       }
       
 
       if(Number(choosed_level.id) >Number( props.currLevel)+1)
       {
          alert("kindly register the previous level first");
          return;
       }


       if (chainId != currentChainId )
       {
         await switchChainAsync({ chainId });
         set_level_unlockProcessing(true);

         await usdt_approval?.();
       } 
       else 
       {
        set_level_unlockProcessing(true);

        await usdt_approval?.();
      }
   
    }

    function find_badge()
    {
      if(Number(props.badge)==0)
      {
         set_badge("Beginner");
      }
      else if(Number(props.badge)==1)
      {
         set_badge("IRON");
      }
      else if(Number(props.badge)==2)
      {
         set_badge("Bronze");
      }
      else if(Number(props.badge)==3)
      {
         set_badge("Silver");
      }
      else if(Number(props.badge)==4)
      {
         set_badge("Gold");
      }
      else if(Number(props.badge)==5)
      {
         set_badge("Diamond");
      }
      else if(Number(props.badge)==6)
      {
         set_badge("Platinum");
      }
    }

    const findTime = (time) => {
      const now = new Date(time*1000);  
      const t=moment(now).format('D MMM YYYY');
      return t;
      
    };




   async function claim_monthlySalary()
    {

       if(isDisconnected)
       {
         alert("Kindly Connect your Wallet");
         return;
       }
       if(props.isDummyState)
       {
        alert("You cannot perform any transaction");
        return;
       }
       if(!props.isRegister)
       {
         alert("You are not a registered memeber");
         return;
       }
       
 
       if(Number(props.monthlySalary)/10**6 == 0)
       {
          return;
       }


       if (chainId != currentChainId )
       {
         await switchChainAsync({ chainId });
         await monthlySalary1?.();
       } 
       else 
       {
        await monthlySalary1?.();
      }
   
    }




    async function claim_GiftRew()
    {

       if(isDisconnected)
       {
         alert("Kindly Connect your Wallet");
         return;
       }
       if(props.isDummyState)
       {
        alert("You cannot perform any transaction");
        return;
       }
       if(!props.isRegister)
       {
         alert("You are not a registered memeber");
         return;
       }
       
 
       if(Number(props.GiftReward)/10**6 == 0)
       {
          return;
       }


       if (chainId != currentChainId )
       {
         await switchChainAsync({ chainId });
         await GiftRew1?.();
       } 
       else 
       {
        await GiftRew1?.();
      }
   
    }


    async function updateName()
    {

       if(isDisconnected)
       {
         alert("Kindly Connect your Wallet");
         return;
       }
       if(props.isDummyState)
       {
        alert("You cannot perform any transaction");
        return;
       }
      
       if(!props.isRegister)
       {
         alert("You are not a registered memeber");
         return;
       }
       
 
       if(newName == "")
       {
          alert("kindly write the Name")
          return;
       }
       if(newName == props.myName)
       {
          set_EditState(false)
          return;
       }

       if (chainId != currentChainId )
       {
         await switchChainAsync({ chainId });
         await updateName1?.();
       } 
       else 
       {
        await updateName1?.();
      }
   
    }

  return (
    <>
      <PanelNav search_user={props.search_user} />

      <section className="  sm:tw-pt-12 tw-pt-0 pb-12">
        <div className="tw-container tw-px-5 tw-mx-auto">
          <div className=" row">
            <div className="  col-md-4">
              <div className=" tw-flex tw-flex-col   tw-gap-5">
                <div className=" tw-bg-[#1E1E1E]  tw-flex  tw-justify-center tw-gap-7    tw-p-5">
                  <div className="tw-relative">
                    <div className=" ">
                      <img
                      
                        src={
                          selectedImage ||
                          require("../../assets/images/profile.png")
                        }
                        alt="Profile"
                        className=" tw-w-32 tw-rounded-full tw-border-2 tw-border-[#EACE56]  tw-object-center tw-h-32"
                        
                      />

                    </div>
                    <div className="tw-absolute tw-top-24 tw-left-1.5">
                      <label
                        htmlFor="file-upload"
                        className="tw-cursor-pointer tw-bg-button-gradient tw-py-2  tw-px-6 tw-font-semibold tw-rounded-full tw-font-poppins tw-text-[16px]"
                      >
                        {badge}
                      </label>
                      
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className=" tw-hidden"
                      />
                    </div>
                  </div>

                  <div className=" tw-w-44">
                    {/* <div className=" tw-text-white tw-font-poppins  tw-font-semibold tw-text-[20px]">
                     {props.myName} <MdModeEditOutline />

                    </div> */}
                      <div className="  tw-flex tw-gap-1">

                      {edit_state?(
                        <div className=" ">
                          <input
                          style={{ backgroundColor:"transparent" }}
                            type="string"
                            value={newName}
                            onChange={(e) =>
                              set_newName(e.target.value)
                            }
                            className="text-white text-[16px] h-10 pl-1    border rounded-lg outline-none w-10  font-medium"
                          />
                        </div>
                      ):(
                        <div className=" tw-text-white ">
                        {props.myName}  
                        </div>
                      )}


                        <div className=" tw-text-white ">
                        {!edit_state?(<MdModeEditOutline onClick={()=>set_EditState(true)}/> ):(<button onClick={updateName} style={{ border:"1px solid #E4BC43", color:"#E4BC43",padding:"2px" }}>update</button>)}
                        </div>

                      </div>


                    <div className=" tw-flex tw-gap-4">
                      <div>
                        <p className=" m-0 tw-text-white  tw-font-poppins  tw-font-light">
                          {isConnected? props.user_address.slice(0,3)+"..."+props.user_address.slice(39,42) :null }
                        </p>
                        <p className=" m-0 tw-text-white tw-font-poppins tw-text-xl tw-font-medium">
                          ID : {Number(props.refCode)}
                        </p>
                      </div>
                      <div>

                      <CopyToClipboard text={props.user_address} >

                      <img
                        onClick={copyAddress}
                          src={require("../../assets/images/ph_copy-light.png")}
                          alt=""
                        />
                        </CopyToClipboard> 

                      </div>
                    </div>

                    <button
                      onClick={toggleContent}
                      className="tw-flex tw-justify-center tw-items-center tw-gap-2 tw-text-white tw-bg-[#353535] tw-w-full tw-py-2 tw-rounded-full tw-mt-2 hover:tw-bg-[#454545] tw-transition-colors"
                    >
                      {isOpen ? "Show Less" : "Show More"}{" "}
                      {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </button>
                    {isOpen && (
                      <div className=" tw-pt-2.5 tw-flex tw-gap-4">
                        <div className="">
                          <h6 className=" tw-text-white ">Upline ID</h6>
                          <div
                            className=" tw-text-[#EACE56] tw-text-[12px] tw-border  tw-p-1    tw-leading-1 tw-border-[#EACE56] tw-font-poppins"
                            onClick={()=>props.search_user(Number(props.uplinerCode))}
                          >
                            {Number(props.uplinerCode)}
                          </div>
                        </div>
                        <div>
                          <h6 className=" tw-text-white ">J.Date</h6>
                          <div
                            className=" tw-text-[#EACE56] tw-text-[12px] tw-border tw-p-1   tw-leading-1 tw-border-[#EACE56] tw-font-poppins"
                          >
                            {findTime(Number(props.joiningDate))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="tw-bg-[#1E1E1E] tw-p-5">
                  <div className="tw-flex tw-gap-3">
                    {/* Partner Section */}
                    <div className=" tw-w-full">
                      <h4 className="tw-text-white tw-font-poppins tw-font-medium tw-text-lg">
                        Partner
                      </h4>
                      <button
                        className={`tw-border tw-text-white tw-font-poppins tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300   tw-p-2`}
                      >
                        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2">
                          <span className=" tw-font-poppins tw-text-md">
                            {Number(props.directs)}
                          </span>
                          <div className=" tw-flex tw-pt-1">
                            <sup>
                              <img
                                src={require("../../assets/images/watch.png")}
                                alt="watch icon"
                                className=""
                              />
                            </sup>
                            <span className=" tw-font-poppins tw-text-[#EACE56] tw-text-sm">
                              0
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Team Section */}
                    <div className=" tw-w-full">
                      <h4 className="tw-text-white tw-font-poppins tw-font-medium tw-text-lg">
                        Team
                      </h4>
                      <button
                        className={`tw-border tw-text-white tw-font-poppins tw-font-medium tw-text-xl tw-border-[#FFEA44] tw-w-full tw-rounded-lg tw-transition-all tw-duration-300  tw-p-2`}
                      >
                        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-2">
                          <span className=" tw-font-poppins tw-text-md">
                          {Number(props.totalTeam)}

                          </span>
                          <div className=" tw-flex tw-pt-1">
                            <sup>
                              <img
                                src={require("../../assets/images/watch.png")}
                                alt="watch icon"
                                className=""
                              />
                            </sup>
                            <span className=" tw-font-poppins tw-text-sm tw-text-[#EACE56]">
                              0
                            </span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                {/* // levelData={levelData} badge={badge} monthlySalary={monthlySalary} totalEarning={totalEarning} levelEarning={levelEarning} B10Earning={B10Earning} B5Earning={B5Earning} isActiveMember={isActiveMember} totalMonthlySalaryWithdraw={totalMonthlySalaryWithdraw} totalTeam={totalTeam} refCode={refCode} upliner={upliner} isRegister={isRegister} */}

                <div className=" tw-bg-[#1E1E1E] tw-p-5">
                  <div className=" tw-flex tw-justify-between tw-items-center">
                    <div className="  tw-gap-2">
                      <div>
                        <p className=" m-0 tw-text-[#EACF57] tw-font-poppins tw-text-xl">
                          Total Earning
                        </p>
                      </div>

                      <div className=" tw-flex tw-items-center tw-pt-2 tw-gap-4">
                        <div>
                          <h6 className=" tw-text-white tw-text-lg tw-font-poppins tw-pt-2">
                            ${Number(props.totalEarning)/10**6}
                          </h6>
                        </div>
                        {/* <div className=" tw-flex tw-items-start">
                          <sup>
                            <img
                              src={require("../../assets/images/watch.png")}
                              alt="watch icon"
                              className="tw-w-4 tw-h-4"
                            />
                          </sup>
                          <span className=" tw-font-poppins tw-pt-1 tw-text-[#EACE56]  tw-text-lg">
                            $345
                          </span>
                        </div> */}
                      </div>
                    </div>

                    <div>
                      <img
                        src={require("../../assets/images/earning.png")}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className=" tw-bg-[#1E1E1E] tw-p-5">
                  <div>
                    <div className=" tw-flex tw-gap-2">
                      <div>
                        <p className=" m-0 tw-text-[#EACF57] tw-font-poppins tw-text-xl tw-font-light">
                          Referral Link:
                        </p>
                      </div>
                      <div>
                      <CopyToClipboard text={isConnected? `${window.location.host}?ref=${props.user_address}`:null} >

                        <img
                        onClick={notify}
                          src={require("../../assets/images/ph_copy-light.png")}
                          alt=""
                        />
                      </CopyToClipboard> 

                      </div>
                    </div>

                    <h6 className=" tw-text-white tw-font-poppins tw-pt-2">
                    {window.location.host}/?ref={props.user_address == null
                        ? "..."
                        : props.user_address.toString().slice(0, 3) + "..."+props.user_address.toString().slice(39, 42) }                    
                        </h6>
                  </div>
                </div>

                <div className=" tw-bg-[#1E1E1E] tw-flex  tw-flex-col tw-gap-4 tw-p-5">
                  <div className="  tw-flex tw-gap-5 tw-pt-4">
                    <div>
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                        {" "}
                        B-10 Earning
                      </h6>
                      <input
                        value={"$"+ Number(props.B10Earning)/10**6} readOnly
                        className=" tw-border-[#DFAE1A]  tw-text-white tw-bg-transparent tw-rounded-md tw-w-full tw-p-2.5 tw-font-poppins tw-border"
                      />
                    </div>
                    <div>
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                        {" "}
                        B-5 Earning
                      </h6>
                      <input
                        value={"$"+ Number(props.B5Earning)/10**6} readOnly
                        className=" tw-border-[#DFAE1A] tw-text-white tw-bg-transparent tw-rounded-md tw-w-full tw-p-2.5 tw-font-poppins tw-border"
                      />
                    </div>
                  </div>

                  <div className="  tw-flex tw-gap-5">
                    <div className="tw-w-[48%]">
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                        25 Level Earning
                      </h6>
                      <input
                        value={"$"+ Number(props.levelEarning)/10**6} readOnly
                        className=" tw-border-[#DFAE1A]  tw-text-white tw-bg-transparent tw-rounded-md tw-w-full tw-p-2.5 tw-font-poppins tw-border"
                      />
                    </div>
                    <div className=" tw-w-[48%]">
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                        Monthly Salary
                      </h6>

                      <div className="tw-border-[#DFAE1A] tw-flex tw-text-white tw-bg-transparent tw-rounded-md  tw-p-2 tw-font-poppins tw-border">
                        <input
                          value={"$"+ Number(props.monthlySalary)/10**6}
                          className=" tw-border-[#DFAE1A] tw-text-white tw-bg-transparent tw-outline-none tw-rounded-md tw-w-full tw-font-poppins"
                        />
                        <spa 
                        onClick={claim_monthlySalary}
                        className="tw-border-[#DFAE1A] tw-border-2 tw-rounded-md tw-px-3 tw-py-1  tw-text-sm">
                          Claim
                        </spa>
                      </div>
                      <div className=" tw-pt-2 tw-flex tw-gap-2 tw-justify-end tw-items-center">
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {" "}
                          {String(timeLeft.days).padStart(2, "0")}{" "}
                          <span className=" tw-text-[#DFAE1A]"> D </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.hours).padStart(2, "0")}{" "}
                          <span className=" tw-text-white"> H </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.minutes).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> M </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.seconds).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> S </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="  tw-flex tw-gap-5">

                    <div className=" tw-w-[48%]">
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                      Gift Reward
                      </h6>

                      <div className="tw-border-[#DFAE1A] tw-flex tw-text-white tw-bg-transparent tw-rounded-md  tw-p-2 tw-font-poppins tw-border">
                        <input
                          value= {"$"+ Number(props.GiftReward)/10**6}
                          className=" tw-border-[#DFAE1A] tw-text-white tw-bg-transparent tw-outline-none tw-rounded-md tw-w-full tw-font-poppins"
                        />
                        <spa 
                        onClick = {claim_GiftRew}
                        className="tw-border-[#DFAE1A] tw-border-2 tw-rounded-md tw-px-3 tw-py-1  tw-text-sm">
                          Claim
                        </spa>
                      </div>
                      <div className=" tw-pt-2 tw-flex tw-gap-2 tw-justify-end tw-items-center">
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {" "}
                          {String(timeLeft.days).padStart(2, "0")}{" "}
                          <span className=" tw-text-[#DFAE1A]"> D </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.hours).padStart(2, "0")}{" "}
                          <span className=" tw-text-white"> H </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.minutes).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> M </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.seconds).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> S </span>
                        </p>
                      </div>
                    </div>
                    <div className=" tw-w-[48%]">
                      <h6 className="  tw-font-normal tw-text-white tw-font-poppins tw-pb-1">
                        Game Income
                      </h6>

                      <div className="tw-border-[#DFAE1A] tw-flex tw-text-white tw-bg-transparent tw-rounded-md  tw-p-2 tw-font-poppins tw-border">
                        <input
                          value="$0.00"
                          className=" tw-border-[#DFAE1A] tw-text-white tw-bg-transparent tw-outline-none tw-rounded-md tw-w-full tw-font-poppins"
                        />
                        <spa className="tw-border-[#DFAE1A] tw-border-2 tw-rounded-md tw-px-3 tw-py-1  tw-text-sm">
                          Claim
                        </spa>
                      </div>
                      <div className=" tw-pt-2 tw-flex tw-gap-2 tw-justify-end tw-items-center">
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {" "}
                          {/* {String(timeLeft.days).padStart(2, "0")}{" "} */}
                          {/* <span className=" tw-text-[#DFAE1A]"> D </span> */}
                          Coming Soon
                        </p>
                        {/* <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.hours).padStart(2, "0")}{" "}
                          <span className=" tw-text-white"> H </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.minutes).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> M </span>
                        </p>
                        <p className=" tw-m-0  tw-text-sm tw-font-poppins tw-text-white">
                          {String(timeLeft.seconds).padStart(2, "0")}
                          <span className=" tw-text-[#DFAE1A]"> S </span>
                        </p> */}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className=" ">
                <span className=" gradient-text tw-pl-8 tw-font-zen-dots   md:tw-text-4xl sm:tw-text-3xl tw-text-2xl">
                  Booster Program
                </span>

                <div className="   tw-grid  tw-gap-5 md:tw-grid-cols-4 tw-grid-cols-2 tw-pt-6">
                  {Level?.map((item, index) => {
                    return (

                        <>
                    {item.isjoined?(

                      <Link
                        to={`/level-details/${Number(item?.id)-1}`}
                        className="tw-bg-[#1E1E1E] tw-px-3 tw-py-2 tw-w-full tw-flex tw-items-center  tw-justify-between tw-rounded-tl-md"
                      >
                        <h6 className=" tw-text-white tw-text-sm tw-font-poppins">
                          Level {item?.level}
                        </h6>


                        <div className=" tw-flex tw-gap-2 tw-items-center">
                          <h6 className=" tw-text-white tw-text-sm tw-font-poppins">
                            $ {item?.price}
                          </h6>
                          <img
                            src={require("../../assets/images/crypto.png")}
                            alt=""
                            className=" tw-w-7"
                          />
                        </div>
                      </Link>
                        ):(

                          <div
                          onClick={()=>      set_choosed_level(item)}
                          className="tw-bg-[#1E1E1E] tw-px-3 tw-py-2 tw-w-full tw-flex tw-items-center  tw-justify-between tw-rounded-tl-md"
                        >
                          <h6 className=" tw-text-white tw-text-sm tw-font-poppins">
                            Level {item?.level}
                          </h6>
                           {!item.isLocked ?
                          (
                            <div>
                            <img
                              src={require("../../assets/images/lock.png")}
                              alt=""
                              className=" tw-w-10 tw-h-10"
                            />
                          </div>
  
                          ):(null)}
  
                          <div className=" tw-flex tw-gap-2 tw-items-center">
                            <h6 className=" tw-text-white tw-text-sm tw-font-poppins">
                             ${item?.price}
                            </h6>
                            <img
                              src={require("../../assets/images/crypto.png")}
                              alt=""
                              className=" tw-w-7"
                            />
                          </div>
                        </div>
                        )

                        }
                        </>
                      

                    );
                  })}
                </div>

                <div className=" tw-py-12 ">
                  <span className="  tw-pl-8 tw-font-zen-dots  gradient-text   md:tw-text-2xl sm:tw-text-xl tw-text-lg">
                    Community/Activity
                  </span>
                  <div className="tw-overflow-x-auto tw-mt-6 tw-pt-8 tw-pb-3 tw-overflow-y-auto tw-bg-[#1E1E1E]">
                    <h5 className=" tw-font-zen-dots tw-text-center tw-text-white">
                      Participants
                    </h5>

                    <table className="tw-min-w-full tw-mb-0 ">
                      <thead className="text-center tw-border-b tw-border-[#fff] tw-bg-[#1E1E1E]">
                        <tr className="tw-rounded-lg tw-whitespace-nowrap">
                          <th
                            scope="col"
                            className=" tw-text-white tw-font-normal  tw-font-poppins tw-px-6 tw-py-4"
                          >
                            Total Registration
                          </th>
                          <th
                            scope="col"
                            className="tw-text-white tw-font-normal tw-font-poppins  tw-px-6 tw-py-4"
                          >
                            Active User
                          </th>
                          <th
                            scope="col"
                            className=" tw-text-white tw-font-normal  tw-font-poppins  tw-px-6 tw-py-4"
                          >
                            Total Earned
                          </th>
                        </tr>
                      </thead>
                      <tbody className=" ">
                        <>
                          <tr className="tw-bg-[#1E1E1E] tw-rounded-md">
                            <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-font-normal tw-text-sm tw-font-poppins">
                                {Number(props.total_users)}
                              </span>
                            </td>
                            <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-font-normal tw-text-sm tw-font-poppins">
                                0
                              </span>
                            </td>
                            <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-text-sm tw-font-normal tw-font-poppins">
                                $0
                              </span>
                            </td>
                          </tr>

                          {/* <tr className="tw-bg-[#1E1E1E] tw-rounded-md">
                            <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-font-normal tw-text-sm tw-font-poppins">
                                +2
                              </span>
                            </td>
                            <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-font-normal tw-text-sm tw-font-poppins">
                                +2
                              </span>
                            </td>
                            <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                              <span className=" tw-text-[#F0DE75] tw-text-sm tw-font-normal tw-font-poppins">
                                +0.00
                              </span>
                            </td>
                          </tr> */}
                        </>
                      </tbody>
                    </table>
                  </div>
                </div>

                <PlatFromTable historyData={props.historyData} />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </section>

      <Footer />
      {props.loader && <Loader />}

    </>
  );
};

export default UserPannel;
