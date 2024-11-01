
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/home';
import Register from './screens/auth/registration/Register';
import UserPannel from './screens/UserPannel';
import LevelDetails from './screens/LevelDetails';
import React, { useEffect, useRef, useState } from "react";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  cont_address,
  cont_abi,
  usdt_address,
  token_abi,
  cont_Name,
  cont_Name_abi
} from "../src/configs/Contracts";
import { useLocation } from "react-router-dom";
import { useSwitchChain, useAccount, useDisconnect } from "wagmi";

import { useSimulateContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";
import Web3 from "web3";


function App() {


  const chainId = process.env.REACT_APP_ENV == "production" ? polygon.id : polygonAmoy.id;
  const [loader, setLoader] = useState(false);

  const { switchChainAsync } = useSwitchChain();
  const { chainId: currentChainId } = useAccount();
  const { writeContractAsync,writeContract,data:hash, ...states } = useWriteContract();

  const { address, isConnecting ,isConnected,isDisconnected} = useAccount()


  const [isRegister, set_isRegister] = useState(0);
  const [refCode, set_refCode] = useState(0);
  const [user_address, set_user_address] = useState("");

  const [upliner, set_upliner] = useState(0);
  const [totalTeam, set_totalTeam] = useState(0);
  const [totalMonthlySalaryWithdraw, set_totalMonthlySalaryWithdraw] = useState(0);
  const [isActiveMember, set_isActiveMember] = useState(0);
  const [B5Earning, set_B5Earning] = useState(0);
  const [B10Earning, set_B10Earning] = useState(0);
  const [levelEarning, set_25levelEarning] = useState(0);
  const [totalEarning, set_totalEarning] = useState(0);
  const [monthlySalary, set_monthlySalary] = useState(0);
  const [badge, set_badge] = useState(0);
  const [levelData, set_levelData] = useState([]);

  const [levelFreezeData, set_levelFreezeData] = useState([]);

  const [historyData, set_historyData] = useState([]);

  const [currLevel, set_currLevel] = useState(0);
  const [uplinerCode, set_uplinerCode] = useState(0);
  const [joiningDate, set_joiningDate] = useState(0);
  const [directs, set_directs] = useState(0);
  const [regFee, set_regFee] = useState(0);
  const [total_users, set_total_users] = useState(0);

  const [GiftReward, set_GiftReward] = useState(0);
  const [totalGiftRewWithdraw, set_totalGiftRewWithdraw] = useState(0);
  const [leftTime, set_leftTime] = useState(0);
  const [myName, set_myName] = useState("");
  const [isDummyState, set_isDummyState] = useState(false);

  
  
  
  const [count1, set_count1] = useState(0);

  const location = useLocation();
  const params = new URLSearchParams(location.search);



  useEffect(()=>
  {
    if(isConnected)
    {
      get_data();

    }

  },[address])
  
  
   async function search_user(_refCode)
   {

    if(_refCode==refCode)
    {
      alert("this is your Id, kidnly search different");
      return;

    }

    if(_refCode==refCode)
    {
      alert("this is your Id, kidnly search different");
      return;

    }
    if(_refCode<0)
    {
      alert("invalid Id");
      return;

    }


    // setLoader(true)
    const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));
    const contract=new web3.eth.Contract(cont_abi,cont_address);
    const contractName=new web3.eth.Contract(cont_Name_abi,cont_Name);
    const USDT_contract=new web3.eth.Contract(token_abi,usdt_address);

    const search_address = await contract.methods.codeToAdress(_refCode).call();      

    if(search_address=="0x0000000000000000000000000000000000000000")
    {
      alert("Given id is not registered");
      return;
    }
    setLoader(true)

    let USDTBalance;
    let user;
    let Polbalance;
    let level_data=[];
    let levelFreeze_data=[];

    let history_data=[];

    if(isConnected)
    {
       Polbalance  =await  web3.eth.getBalance(search_address)
       USDTBalance = await USDT_contract.methods.balanceOf(search_address).call(); 
    
       user = await contract.methods.user(search_address).call();      
       let isActiveMember = await contract.methods.check_active_member(search_address).call();
       let currMonth_badge = await contract.methods.currMonth_badge(search_address).call();
       let Monthly_salary = await contract.methods.get_Monthly_salary(search_address).call();
       let GiftReward = await contract.methods.get_Monthly_GiftReward(search_address).call();

       let TotalEarnings= await contract.methods.get_All_TotalEarnings(search_address).call();
       let curr_level = await contract.methods.get_curr_level(search_address).call();
       let curr_month = await contract.methods.get_curr_month(search_address).call();
       let regFee = await contract.methods.regFee().call();


       let totalusers = 0;
       let upliner_data = await contract.methods.user(user[2]).call();
       let total_directs = await contract.methods.get_totalDirects(search_address).call();
       let launch_date = await contract.methods.launch_date().call();
       let data = await contract.methods.get_currTime_And_historyLength().call();
       let myName = await contractName.methods.myName(search_address).call();

       
       for(let i=0;i<12;i++)
       {
        level_data.push( await contract.methods.get_level_data(search_address,i).call())
       }
       for(let i=0;i<12;i++)
       {
        levelFreeze_data.push( await contract.methods.IslevelFreeze( search_address, i).call())
       }

       console.log(levelFreeze_data)

       for(let i=0;i<data.historylength;i++)
       {
        history_data.push( await contract.methods.history(i).call())
       }
       set_user_address(search_address)
       set_myName(myName=="" ? "Booster_user"+user[1]:myName)
       set_total_users(totalusers);
       set_regFee(regFee)
      set_isRegister(user[0])
      set_refCode(user[1])
      set_upliner(user[2])
      set_joiningDate(user[6])
       set_directs(total_directs)
      set_uplinerCode(upliner_data[1]);
      set_totalTeam(user[3])
      set_totalMonthlySalaryWithdraw(user[4])   
      set_totalGiftRewWithdraw(user[5])             
      set_isActiveMember(isActiveMember)
      set_B5Earning(TotalEarnings[1])
      set_B10Earning(TotalEarnings[2])
      set_25levelEarning(TotalEarnings[0])
      set_totalEarning(TotalEarnings[3])
      set_monthlySalary(Monthly_salary)
      set_GiftReward(GiftReward)

      set_badge(currMonth_badge)
      set_levelData(level_data)
      set_levelFreezeData(levelFreeze_data);
      set_historyData(history_data)
      set_currLevel(curr_level)
      if(search_address.toLowerCase()==address.toLowerCase())
      {
        set_isDummyState(false)

      }
      else{
        set_isDummyState(true)

      }

      let  temp=Number(launch_date);
      for(let i=0;i<Number(curr_month);i++)
      {
          temp+= (86400*30);

      }
      temp = (86400*30) - ((Number(data.temp) - temp));
      set_leftTime(temp+Number(data.temp));

      setLoader(false)
    }
   }


    async function get_data()
    {  
      setLoader(true)
      const web3= new Web3(new Web3.providers.HttpProvider("https://polygon-bor-rpc.publicnode.com"));
      const contract=new web3.eth.Contract(cont_abi,cont_address);
      const contractName=new web3.eth.Contract(cont_Name_abi,cont_Name);

      const USDT_contract=new web3.eth.Contract(token_abi,usdt_address);
  
      let USDTBalance;
      let user;
      let Polbalance;
      let level_data=[];
      let history_data=[];
      let levelFreeze_data=[];

      if(isConnected)
      {
         Polbalance  =await  web3.eth.getBalance(address)
         USDTBalance = await USDT_contract.methods.balanceOf(address).call(); 

         user = await contract.methods.user(address).call();      

         let isActiveMember = await contract.methods.check_active_member(address).call();
          
         let currMonth_badge = await contract.methods.currMonth_badge(address).call();

         let Monthly_salary = await contract.methods.get_Monthly_salary(address).call();
         let GiftReward = await contract.methods.get_Monthly_GiftReward(address).call();

         let TotalEarnings= await contract.methods.get_All_TotalEarnings(address).call();
         let curr_level = await contract.methods.get_curr_level(address).call();
         let curr_month = await contract.methods.get_curr_month(address).call();

         let regFee = await contract.methods.regFee().call();
         let totalusers =  await contract.methods.totalusers().call();
         let upliner_data = await contract.methods.user(user[2]).call();
         let total_directs = await contract.methods.get_totalDirects(address).call();
         let launch_date = await contract.methods.launch_date().call();
         let data = await contract.methods.get_currTime_And_historyLength().call();

         let myName = await contractName.methods.myName(address).call();

         for(let i=0;i<12;i++)
         {
          level_data.push( await contract.methods.get_level_data(address,i).call())
         }
         for(let i=0;i<12;i++)
         {
          levelFreeze_data.push( await contract.methods.IslevelFreeze( address, i).call())
         }
         for(let i=0;i<data.historylength;i++)
         {
          history_data.push( await contract.methods.history(i).call())
         }

         set_user_address(address)
         set_myName(myName=="" ? "User_Booster":myName)
         set_total_users(totalusers);
         set_regFee(regFee)
        set_isRegister(user[0])
        set_refCode(user[1])
        set_upliner(user[2])
        set_joiningDate(user[6])
         set_directs(total_directs)
        set_uplinerCode(upliner_data[1]);
        set_totalTeam(user[3])
        set_totalMonthlySalaryWithdraw(user[4])   
        set_totalGiftRewWithdraw(user[5])             
        set_isActiveMember(isActiveMember)
        set_B5Earning(TotalEarnings[1])
        set_B10Earning(TotalEarnings[2])
        set_25levelEarning(TotalEarnings[0])
        set_totalEarning(TotalEarnings[3])
        set_monthlySalary(Monthly_salary)
        set_GiftReward(GiftReward)

        set_badge(currMonth_badge)
        set_levelData(level_data)
        set_levelFreezeData(levelFreeze_data);

        set_historyData(history_data)

        set_currLevel(curr_level)

        let  temp=Number(launch_date);
        for(let i=0;i<Number(curr_month);i++)
        {
            temp+= (86400*30);

        }
        temp = (86400*30) - ((Number(data.temp) - temp));
        set_leftTime(temp+Number(data.temp));

        setLoader(false)

        }
  

    }  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  //   async function stake1() {
  
  
  //     try {
  //         const tx = await writeContractAsync({
  //           abi: cont_abi,
  //           address: cont_address,
  //           functionName: "Stake", 
  //           args: [
  //             Convert_To_Wei(stakeAmount? Number(stakeAmount) : 0), selectedAPR.value,ref_add
  //           ],
  
  //         });
  
  //         set_count(1)
  
  //     } catch (err) {
  //         console.error(err);
  //     }
  // }

  
  
  // useEffect(()=>{
  //   if(isConfirmed)
  //   {
  //     if(count==0)
  //     {
  //       // stake1()
  
  //     }
  //     if(count==1)
  //     {
  //       set_count(0)
  //       get_data();
  //     }
  //   }
  
  
  // },[isConfirmed])
  
    // async function usdt_approval () {
    //   try {
    //       const tx = await writeContractAsync({
    //         abi: token_abi,
    //         address: usdt,
    //         args: [staking_address,Convert_To_Wei( stakeAmount ? Number(stakeAmount) : "0")],
    //         functionName: "approve",
  
    //       }); 
    //       // stake1();
    
    //      } catch (err) {
    //       console.error(err);
    //   }
    // }
  
  
  
  
  
  
  
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
  
  
  
    // async function stake()
    // {
      
    //   if(is_suspend)
    //   {
    //     alert("Staking is Disable by the admin");
    //     return;
    //   }
  
    //   if(isDisconnected)
    //   {
    //     alert("kindly connect your wallet ");
    //     return;
    //   }
  
    //   if(stakeAmount==0 )
    //   {
    //     alert("kindly write amount to stake ");
    //     return;
    //   }
  
    //   if(Number(stakeAmount)<Number(min_stake)/10**18 )
    //   {
    //     alert("Minimum Stake amount is "+ Number(min_stake)/10**18);
    //     return;
    //   }
  
  
    //   if(Number(EBMBalance)/10**18 < Number(stakeAmount))
    //   {
    //     alert("You don't have sufficient balance");
    //     return;
    //   }
    //   if (chainId != currentChainId )
    //   {
    //     await switchChainAsync({ chainId });
    //     await SMT_approval?.();
    //   } 
    //   else 
    //   {
    //     await SMT_approval?.();
    //   }
  
    // }








  return (
    <div className=''>
     <Routes>
      <Route path='/'  element={<Home  loader={loader}  isRegister={isRegister} />} />
      <Route path='/register'  element={<Register get_data={get_data} loader={loader} regFee={regFee} isRegister={isRegister} />} />

      <Route path='/user-pannel'  element={< UserPannel levelFreezeData={levelFreezeData} user_address={user_address} isDummyState={isDummyState} historyData={historyData} search_user={search_user} myName={myName} leftTime={leftTime} GiftReward={GiftReward} totalGiftRewWithdraw={totalGiftRewWithdraw} loader={loader} total_users={total_users} directs={directs} joiningDate={joiningDate} uplinerCode={uplinerCode} get_data={get_data} currLevel={currLevel} levelData={levelData} badge={badge} monthlySalary={monthlySalary} totalEarning={totalEarning} levelEarning={levelEarning} B10Earning={B10Earning} B5Earning={B5Earning} isActiveMember={isActiveMember} totalMonthlySalaryWithdraw={totalMonthlySalaryWithdraw} totalTeam={totalTeam} refCode={refCode} upliner={upliner} isRegister={isRegister} />} />

      <Route path='/level-details/:id'  element={<LevelDetails search_user={search_user} loader={loader} levelData={levelData} />} />
     </Routes>
    </div>
  );
}

export default App;
