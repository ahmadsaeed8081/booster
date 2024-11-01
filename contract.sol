//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

interface Token {
    function transfer(address to, uint tokens) external returns (bool success);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool) ;

    }

contract Booster
    {
    
        struct level_data{

            bool joined;
            uint level_join_date;
            uint level_earning;
            uint b5_earning;
            uint b10_earning;
            uint b5_count_for_cycle;  
            uint b5_total_cycles;
            uint b10_count_for_cycle;  
            uint b10_total_cycles;
            uint[] b5_circlesData;
            uint[] b10_circlesData;


        }

        struct monthly_data{

            uint directs;
            uint Teams;
            uint badge_no;
            bool eligibleForGift;
        }


        struct Data{
            mapping(uint=>level_data) Level;
            mapping(uint=>monthly_data) month;
            address[] AllDirects;
            
            bool isRegister;
            uint ref_code;
            address upliner;
            uint total_team;
            uint total_salary_withdraw;
            uint total_giftRew_withdraw;
            uint registration_time;

        }
        struct history_data{

            uint action;
            uint date;
            uint userID;

        }

        uint[12]  level_fee=[6500000,18*10**6,34*10**6,52*10**6,86*10**6,136*10**6,272*10**6,544*10**6,1088*10**6,2176*10**6,4352*10**6,8704*10**6];
        uint[25]  level_percentage=[10,10,10,10,10,4,4,4,4,4,3,3,3,3,3,2,2,2,2,2,1,1,1,1,1];
        uint[12]  b_5_10_rew=[2*10**6,5*10**6,10*10**6,15*10**6,25*10**6,40*10**6,80*10**6,160*10**6,320*10**6,640*10**6,1280*10**6,2560*10**6];
        uint[12]  level_monthly_rew=[1*10**6,2*10**6,4*10**6,6*10**6,10*10**6,15*10**6,30*10**6,60*10**6,120*10**6,240*10**6,480*10**6,960*10**6];
        uint[12]  game_gift_rew=[500000,2*10**6,3*10**6,5*10**6,8*10**6,13*10**6,26*10**6,52*10**6,104*10**6,208*10**6,416*10**6,832*10**6];
        uint[12]  income_restriction=[36*10**6,104*10**6,208*10**6,380*10**6,652*10**6,1196*10**6,2284*10**6,4460*10**6,8112*10**6,16816*10**6,34224*10**6,1000000000000*10**6];
        uint[6]   badge_Salary=[4*10**6,8*10**6,12*10**6,16*10**6,20*10**6,40*10**6];

      
        address usdt_address;
        uint  time_divider;
        uint public totalusers;

        uint public launch_date;
        uint public game_liquidity;
        uint public regFee;
        address public owner;

        mapping(address=>Data) public user;
        mapping(uint=>address) public codeToAdress;
        mapping(uint=>uint) public gift_liquidity;
        mapping(uint=>uint) public MonthlySalary_liquidity;
        mapping(address=>uint) upline_giftRew;
        mapping(uint=>mapping(uint=>uint)) Monthly_badgeCount;
        mapping(uint=>uint)  eachMonth_TotalgiftRewUsers;
        address[] admins;
        mapping(address=>bool) Is_PlatinumAddresses;
        history_data[] public history;




    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }  

        constructor() 
        {
            owner=0x47d8420aDC694773BD9D986842875bC4B341136f;
            user[owner].isRegister=true;
            user[owner].ref_code=totalusers;
            codeToAdress[totalusers]=owner;
            user[owner].registration_time=block.timestamp;
            usdt_address= 0xc2132D05D31c914a87C6611C10748AEb04B58e8F;

            launch_date=block.timestamp;
            time_divider = 1 days;
            regFee = 2 ether;
            for(uint i=0;i<12;i++)
            {
                user[owner].Level[i].joined=true;
                user[owner].Level[i].level_join_date = block.timestamp;
            }

            admins.push(0xBD9C01aDFa02c9350d46D7B4001Bd991201C1D8a);
            admins.push(0xC2ceC325030fFae6AE25076B91506f54f7fd1563);
            admins.push(0xd96aA39DE8DD0858F0764A62ecd86faf8988ab81);
            admins.push(0xbd523407784420B3c66630AD6Cdb553369a65697);
            admins.push(0x73167BE4d0cF2489A246249BF901f5939E82208e);

            Is_PlatinumAddresses[0xc1e2A135dEf28c6d47dBc037bA941cdD951954e8]=true;
            Is_PlatinumAddresses[0x4C52759D43f459812bf6841B81e31955Aeff08C1]=true;
            Is_PlatinumAddresses[0xd96aA39DE8DD0858F0764A62ecd86faf8988ab81]=true;
            Is_PlatinumAddresses[0x85F8AC72bAB5A979d2DeA0b330b76Ec850Fb8730]=true;
            Is_PlatinumAddresses[0xB6AE047CD08CEDA8Bc3dF78F8b9FEDdf1491FeD5]=true;
            Is_PlatinumAddresses[0xaD5907E80178FbFd00A0517B921C4be75A6845B4]=true;
            Is_PlatinumAddresses[0xA1De21DEDac9d8F1Ab7D2b5f41B482Ef0D053671]=true;
            Is_PlatinumAddresses[0x0C7c6184F8428Dc6566AA17483dF1c24e31f1773]=true;
            Is_PlatinumAddresses[0x7D9094d60A83755b7e5d301a3cc995182a11D51B]=true;
            Is_PlatinumAddresses[0xc0d25456B90575ce11945b04814Ddb3B97890a29]=true;
            Is_PlatinumAddresses[0xDFEB5119062b900D253Ba078c67BA9047a02d979]=true;
            Is_PlatinumAddresses[0xfE795d708E8FF851e061f749Eb9e2485531d25b1]=true;
            Is_PlatinumAddresses[0xEcfD12351075185e6Be8c7429A62bcbBF18a4d33]=true;
            Is_PlatinumAddresses[0x5cf932A6DD158207ca0FFd48c711eEBce30a6c40]=true;

            

        }

        function register(address user_add , uint ref_code) external payable returns(bool) 
        {
            if(owner!=msg.sender)
            {
                require(msg.value>=regFee);
                admin_FundDistributions(msg.value,0);
            }

            address _ref = codeToAdress[ref_code];
            require(!user[user_add].isRegister);
            require(user[_ref].isRegister);

            totalusers++;         
            user[user_add].upliner=_ref;
            user[user_add].isRegister=true;
            user[user_add].ref_code=totalusers;
            user[user_add].registration_time=block.timestamp;
            codeToAdress[totalusers]=user_add;
            
            updateHistory(0,user_add);

            return true;

        }

        
        
        function unlock_level(address user_add,uint level_no) external
        {
            require(user[user_add].isRegister);
            require(!user[user_add].Level[level_no].joined);

            if(level_no>0)
            {
                require(user[user_add].Level[level_no-1].joined);
            }
            
            uint remaining_amount = level_fee[level_no];
            user[user_add].Level[level_no].joined=true;
            user[user_add].Level[level_no].level_join_date = block.timestamp;

            if(level_no==0)
            {
                user[user[user_add].upliner].month[get_curr_month()].directs++;
                user[user[user_add].upliner].AllDirects.push(user_add);

                if( user[user[user_add].upliner].month[get_curr_month()].directs>=12)
                {
                    user[user[user_add].upliner].month[get_curr_month()].eligibleForGift=true;
                    eachMonth_TotalgiftRewUsers[get_curr_month()]++;
                }


            }

            address temp = user_add;    
            uint level_count=0;
            bool[] memory arr=new bool[](4);
            address pre_user;

            // arr[0]= isActive. arr[1]= level_distribution. arr[2]= b5_distribution. arr[3]= b10_distribution

            for(uint i=0; (i<100 && !(arr[1] && arr[2] && arr[3])) ;i++)       
            {
                pre_user=temp;
                temp = user[temp].upliner;    
                if(temp!=address(0))
                {
                    if(user[temp].Level[level_no].joined)
                    {

                        if(level_no==0)
                        {
                            user[temp].month[get_curr_month()].Teams++;
                            user[temp].total_team++;
                        }

                        arr[0] = check_active_member(temp);

                        if(msg.sender!=owner && arr[0] && !IslevelFreeze( temp, level_no) )
                        {
                            if(!arr[1] && user[temp].Level[1].joined)
                            {
                                uint Rew = level_monthly_rew[level_no] * level_percentage[level_count]/100;
                                distributions( temp,level_no,get_level_totalEarned(temp, level_no),Rew,0);
                                remaining_amount-=Rew;
                                level_count++;

                                if(level_count>=25)
                                {
                                    arr[1]=true;
                                }


                                uint temp_badge = currMonth_badge(temp);

                                if(user[temp].month[get_curr_month()].badge_no != temp_badge && !Is_PlatinumAddresses[temp])
                                {
                                    user[temp].month[get_curr_month()].badge_no = temp_badge;
                                    Monthly_badgeCount[get_curr_month()][temp_badge]++;
                                }
                                
                            
                            }


                            
                            if(arr[0] && !IslevelFreeze( temp, level_no)) 
                            {
                                if(!arr[2])
                                {
                                    
                                    uint temp_b5 = user[temp].Level[level_no].b5_count_for_cycle+1;
                            

                                    if(temp_b5 == 3 || temp_b5 == 4)
                                    {
                                        distributions(temp, level_no, get_level_totalEarned(temp, level_no), b_5_10_rew[level_no], 1);
                                        remaining_amount-= b_5_10_rew[level_no];
                                        arr[2]=true;
                                    }
                                    if(temp_b5 == 5)
                                    {
                                        admin_FundDistributions(b_5_10_rew[level_no], 1);
                                        remaining_amount-= b_5_10_rew[level_no];
                                        arr[2]=true;
                                    }
                                    
                                    setCircleUsers(temp_b5, temp, level_no, 0);


                                            
                                }

                                if(!arr[3])
                                {
                                    bool exec;
                                    while(!exec)
                                    {
                                        uint temp_b10 = user[temp].Level[level_no].b10_count_for_cycle+1;
                                        setCircleUsers(temp_b10, temp, level_no, 1);

                                        if(temp_b10 == 1 || temp_b10 == 2 || temp_b10 == 5 || temp_b10 == 6 || temp_b10 == 7 || temp_b10 == 10)
                                        {

                                            distributions(temp, level_no, get_level_totalEarned(temp, level_no), b_5_10_rew[level_no],2);
                                            remaining_amount-= b_5_10_rew[level_no];

                                            arr[3]=true;
                                            exec=true;

                                        }
                                        else if(temp_b10 == 4 || temp_b10 == 9)
                                        {
                                            // one of direct partner
                                            uint count;
                                            address[] memory colified_partners=new address[](user[temp].AllDirects.length);

                                            for(uint j =0;j<user[temp].AllDirects.length;j++)
                                            {
                                                
                                                if(check_active_member(user[temp].AllDirects[j])  &&  user[temp].AllDirects[j] != pre_user   && !IslevelFreeze( user[temp].AllDirects[j], level_no) )
                                                {
                                                    colified_partners[count]=user[temp].AllDirects[j];
                                                    count++;

                                                }

                                            }
                                            if(count>0)
                                            {
                                                uint rand_no = randomNo(count);
                                                temp_b10 = user[colified_partners[rand_no]].Level[level_no].b10_count_for_cycle+1;
                                                temp=colified_partners[rand_no];

                                            }
                                            else{
                                                exec=true;
                                            }


                                        }
                                        else if(temp_b10 == 3 || temp_b10 == 8)
                                        {
                                            uint count;
                                            address[] memory colified_partners=new address[](user[user[temp].upliner].AllDirects.length);
                                            for(uint j =0;j<user[user[temp].upliner].AllDirects.length;j++)
                                            {
                                                address temp_Upliner = user[user[temp].upliner].AllDirects[j];
                                                if(check_active_member(temp_Upliner) && temp!=temp_Upliner && !IslevelFreeze(temp_Upliner, level_no)) 
                                                {
                                                    colified_partners[count]=temp_Upliner;
                                                    count++;
                                                }

                                            }
                                            if(count>0)
                                            {
                                                uint rand_no = randomNo(count);
                                                temp_b10 = user[colified_partners[rand_no]].Level[level_no].b10_count_for_cycle+1;
                                                temp=colified_partners[rand_no];

                                            }
                                            else{
                                                exec=true;
                                            }
                                            
                                            
                                            
                                        }

                                        
                                    }

                                }

                                temp=user[pre_user].upliner;
                            }

                            


                        }
                    }
                    

                }
                else{
                    break;
                }

            }
            
        
            if(msg.sender!=owner)
            {
                Token(usdt_address).transferFrom(user_add,address(this),level_monthly_rew[level_no]);
                MonthlySalary_liquidity[get_curr_month()]+=level_monthly_rew[level_no];

                Token(usdt_address).transferFrom(user_add,address(this),game_gift_rew[level_no]);
                gift_liquidity[get_curr_month()] += game_gift_rew[level_no];

                remaining_amount-= (level_monthly_rew[level_no] + game_gift_rew[level_no]);

                if(level_no>0)
                {

                    Token(usdt_address).transferFrom(user_add,address(this),game_gift_rew[level_no]);
                    game_liquidity += game_gift_rew[level_no];
                    remaining_amount-= game_gift_rew[level_no];

                }
                
                if(remaining_amount>0)
                {
                    admin_FundDistributions(remaining_amount, 1);
                }

            }
                
            updateHistory(1,user_add);
         
        }

        function distributions(address temp,uint level_count,uint total_earned,uint rew,uint _val) internal 
        {
            uint admin_rew;

            if((total_earned + rew) > income_restriction[level_count])
            {
                admin_rew = (total_earned + rew) - income_restriction[level_count];
                Token(usdt_address).transferFrom(msg.sender,temp,rew-admin_rew);
                admin_FundDistributions(admin_rew,1);

                if(_val==0)
                {
                    user[temp].Level[level_count].level_earning += (rew-admin_rew);  

                }
                else if(_val==1)
                {                    
                    user[temp].Level[level_count].b5_earning += (rew-admin_rew);  
                }
                else if(_val==2)
                {
                    user[temp].Level[level_count].b10_earning += (rew-admin_rew);  

                }
            }
            else
            {
                Token(usdt_address).transferFrom(msg.sender,temp,rew);
                
                if(_val==0)
                {
                    user[temp].Level[level_count].level_earning += rew ;  

                }
                else if(_val==1)
                {                    
                    user[temp].Level[level_count].b5_earning += rew ;  
                }
                else if(_val==2)
                {
                    user[temp].Level[level_count].b10_earning += rew ;  

                }
            }

                
        }

        function setCircleUsers(uint TotalFilledCircles,address temp,uint level_no, uint option) internal
        {
            if(option==0)//b5
            {
                if(TotalFilledCircles/5==1)
                {
                    user[temp].Level[level_no].b5_total_cycles++;
                    user[temp].Level[level_no].b5_count_for_cycle=0;
                    
                    for(uint k=0;k<4;k++)
                    {
                        user[temp].Level[level_no].b5_circlesData.pop();

                    }


                }
                else{
                    
                    user[temp].Level[level_no].b5_count_for_cycle++;
                    user[temp].Level[level_no].b5_circlesData.push(user[msg.sender].ref_code);

                }

            }
            else if(option==1)//b10
            {
                if(TotalFilledCircles/10==1)
                {
                    user[temp].Level[level_no].b10_count_for_cycle=0;
                    user[temp].Level[level_no].b10_total_cycles++;
                    for(uint k=0;k<9;k++)
                    {
                        user[temp].Level[level_no].b10_circlesData.pop();
                    }
                }
                else
                {
                    
                    user[temp].Level[level_no].b10_count_for_cycle++;
                    user[temp].Level[level_no].b10_circlesData.push(user[msg.sender].ref_code);

                }
            }

        }


        function check_active_member(address add) public view returns(bool)
        {
            if(Is_PlatinumAddresses[add])
            {
                return true;
            }

            if((get_Last30Days_directs(add) > 0  &&  get_Last60Days_l2_Upgrade(add) > 0 ) || get_user_month(add) < 2) //check active member
            {
                return true;
            }
            else
            {
                return false;
            }


        }


        function currMonth_badge(address _add) public view returns(uint )
        {
            if(Is_PlatinumAddresses[_add])
            {
                return 6;
            }
            uint my_level = get_curr_level(_add);
            if(my_level==0)
            {
                return 0;

            }
            if(IslevelFreeze(_add,my_level-1))
            {
                return 0;
            }

            uint curr_month= get_curr_month();
            uint total_team = user[_add].total_team;
            (uint[] memory levelcount,uint active_members) = get_team_currMonth_levels_And_activeMembes(_add);
            uint curr_month_directs = user[_add].month[curr_month].directs;
            uint curr_month_Teams = user[_add].month[curr_month].Teams;
            uint badge_no=0;
            
             if(my_level == 12 && total_team >= 20000 && active_members>=16 && curr_month_directs >= 2 && curr_month_Teams>=3500 && levelcount[6]>=15 && levelcount[7]>=5 && levelcount[8]>=2)
            {
                badge_no=6;
            }
            else if(my_level >= 10 && total_team >= 10000 && active_members>=13 && curr_month_directs >= 2 && curr_month_Teams>=2000 && levelcount[5]>=15 && levelcount[6]>=5 && levelcount[7]>=2)
            {
                badge_no=5;
            }            
            else if(my_level >= 8 && total_team >= 4500 && active_members>=10 && curr_month_directs >= 2 && curr_month_Teams>=800 && levelcount[4]>=15 && levelcount[5]>=5 && levelcount[6]>=2)
            {
                badge_no=4;
            }            
            else if(my_level >= 7 && total_team >= 1500 && active_members>=7 && curr_month_directs >= 2 && curr_month_Teams>=450 && levelcount[3]>=15 && levelcount[4]>=5 && levelcount[5]>=2)
            {
                badge_no=3;
            }            
            else if(my_level >= 5 && total_team >= 500 && active_members>=4 && curr_month_directs >= 2 && curr_month_Teams>=100 && levelcount[1]>=15 && levelcount[2]>=5 && levelcount[3]>=2)
            {
                badge_no=2;
            }    
        
            else if(my_level >= 4 && total_team >= 100 && active_members>=2 && curr_month_directs >= 2 && curr_month_Teams>=30 && levelcount[1]>=5 && levelcount[2]>=2)
            {
                badge_no=1;
            }

            return badge_no;

        }

        function get_Last30Days_directs(address add) internal view returns( uint total_directs)
        {
            uint start_date = block.timestamp - time_divider;

            uint end_date = block.timestamp;
            address[] memory directs= new address[](user[add].AllDirects.length);
            directs= user[add].AllDirects  ;

            for(uint i=0;i<user[add].AllDirects.length;i++)
            {
                if(user[directs[i]].Level[0].level_join_date >= start_date && user[directs[i]].Level[0].level_join_date <= end_date)
                {
                    total_directs++;
                }
            }

        }
        
        function get_Last60Days_l2_Upgrade(address add) internal view returns( uint total_directs)
        {
            uint start_date = block.timestamp - time_divider;

            uint end_date = block.timestamp;
            address[] memory directs= new address[](user[add].AllDirects.length);
            directs= user[add].AllDirects  ;

            for(uint i=0;i<user[add].AllDirects.length;i++)
            {
                if(user[directs[i]].Level[1].level_join_date >= start_date && user[directs[i]].Level[1].level_join_date <= end_date)
                {
                    total_directs++;
                }
            }

        }



        function get_curr_month() view public returns(uint curr_month)
        {
            return (block.timestamp - launch_date) / time_divider;

        }

        function get_user_month(address add) view internal returns(uint curr_month)
        {
            return (block.timestamp - user[add].Level[0].level_join_date) / time_divider;

        }

        function get_curr_level(address add) view public returns(uint curr_level)
        {
            for(uint i=0;i<12;i++)
            {
                if(user[add].Level[i].joined)
                {
                    curr_level++;
                }
                else{
                    break;
                }
            }
        }


        
        function get_team_currMonth_levels_And_activeMembes(address _add) internal view returns( uint[] memory , uint )
        { 

            uint[] memory levelInfo = new uint[](12);

            uint count; 
            uint active_members; 

            address[] memory direct_members = user[_add].AllDirects;
            uint next_member_count;

            for(uint j=0; j < 12;j++) //levels
            {

                for( uint k = 0;k < direct_members.length;k++) //members
                {   
                    
                    next_member_count+=user[direct_members[k]].AllDirects.length;

                    if(check_active_member(direct_members[k])) //check active member
                    {
                        active_members++;
                    }

                    for( uint i = 0;i < 12;i++) 
                    {   
                        if(user[direct_members[k]].Level[i].joined)
                        {
                            if(((block.timestamp - user[direct_members[k]].Level[i].level_join_date) / time_divider) == get_curr_month())
                            {
                                levelInfo[i]++;
                            }
                        }
                        else{
                            break;
                        }
                        
                    }
                                
                }

                address[] memory next_members=new address[](next_member_count) ;

                for( uint m = 0;m < direct_members.length;m++) //members
                {   
                    for( uint n = 0; n < user[direct_members[m]].AllDirects.length; n++) //members
                    {   
                        next_members[count]= user[direct_members[m]].AllDirects[n];
                        count++;
                    }
                }
                direct_members=next_members; 
                next_member_count=0;
                count=0;
                
            }

            return (levelInfo,active_members);
        }

        function get_Monthly_salary(address add) public view returns(uint)
        {
            uint total_months = get_curr_month();
            uint total_salary;
            for(uint i=0;i<total_months;i++)
            {
                if(user[add].month[i].badge_no>0 || Is_PlatinumAddresses[add]) 
                {
                    total_salary += (((MonthlySalary_liquidity[i] * badge_Salary[(Is_PlatinumAddresses[add] ? 5 :user[add].month[i].badge_no)-1])/(100*10**6)) / ( (Monthly_badgeCount[i][Is_PlatinumAddresses[add] ? 5 : user[add].month[i].badge_no]) + (Is_PlatinumAddresses[add] || user[add].month[i].badge_no == 6 ? 14 : 0 ))); 
                }

            }

            return total_salary - user[add].total_salary_withdraw;
        }

        function withdraw_Monthly_salary() external returns(bool)
        {
            uint temp=get_Monthly_salary(msg.sender);
            require(temp>0);

            Token(usdt_address).transfer(msg.sender,temp);
            user[msg.sender].total_salary_withdraw += temp;
        
            
            updateHistory(2,msg.sender);


            return true;
        }
        
        function get_Monthly_GiftReward(address add) public view returns(uint)
        {
            uint total_months = get_curr_month();
            uint total_giftRew;
            for(uint i=0;i<total_months;i++)
            {
                if(user[add].month[i].eligibleForGift)
                {
                    if(gift_liquidity[i]>0)
                    {
                        if(gift_liquidity[i] / eachMonth_TotalgiftRewUsers[i] > 600000000)
                        {
                            total_giftRew += 600000000 ;                            
                        }
                        else
                        {
                            total_giftRew +=  gift_liquidity[i] / eachMonth_TotalgiftRewUsers[i];

                        }

                    }
                }

            }
            
            return total_giftRew - user[add].total_giftRew_withdraw;

        }

        function withdraw_GiftRew() external returns(bool)
        {
            uint temp=get_Monthly_GiftReward(msg.sender);
            require(temp>0);

            Token(usdt_address).transfer(msg.sender,temp/2);
            address upline_add;
            uint count=0;
            for(uint i=0;i< 50 ;i++)
            {
                upline_add = user[upline_add].upliner;
                
                if(check_active_member(upline_add))
                {
                    upline_giftRew[upline_add] += (temp/2)/8;
                    count++;
                    if(count==8)
                    {
                        i=50;
                    }
                }
            }
            user[msg.sender].total_giftRew_withdraw += temp;
            
            updateHistory(3,msg.sender);

            return true;
        }

        function updateHistory(uint _action,address add) internal 
        {
            history_data memory temp; 
            temp.action = _action;
            temp.date = block.timestamp;
            temp.userID = user[add].ref_code;
            
            if(history.length > 5)
            {
                for (uint i = 0; i<history.length-1; i++)
                {
                    history[i] = history[i+1];
                
                }
                history.pop(); 
            }
            
            history.push(temp);



        }

        function admin_FundDistributions(uint _amount,uint choosed_currency) internal
        {
            _amount=_amount/admins.length;


            for(uint i=0;i<admins.length;i++)
            {
                if(choosed_currency==1) //usdt
                {
                    Token(usdt_address).transferFrom(msg.sender,admins[i],_amount);
                }
                else if(choosed_currency==0) //pol
                {
                    payable(admins[i]).transfer(_amount); 
                }
            }

        }


        function get_level_data(address add, uint level_no) external view returns(level_data memory)
        {
            return user[add].Level[level_no];
        }
        

        function get_All_TotalEarnings(address add) external view returns( uint level25_Earning,uint b5_Earning,uint b10_Earning,uint totalEarned)
        {
            for(uint i=0;i<12;i++)
            {
                level25_Earning+=user[add].Level[i].level_earning;
                b5_Earning+=user[add].Level[i].b5_earning;
                b10_Earning+=user[add].Level[i].b10_earning;
                
            }

            totalEarned+=level25_Earning+b5_Earning+b10_Earning + (get_Monthly_salary(add)+  user[add].total_salary_withdraw)  + (get_Monthly_GiftReward(add) + user[add].total_giftRew_withdraw) ;
        }
        
        function get_level_totalEarned(address add,uint level_no) public view returns( uint totalEarned)
        {
            
            totalEarned+=user[add].Level[level_no].level_earning;
            if(level_no<12)
            {
                totalEarned += user[add].Level[level_no].b5_earning;
                totalEarned += user[add].Level[level_no].b10_earning;
            }

            totalEarned += (level_no > 0 && user[add].Level[level_no].joined  ? income_restriction[level_no-1] : 0) ;
        }
        

        function randomNo(uint _val) view internal returns(uint)
        {
            return uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender))) % _val ;
        }

        function get_totalDirects(address add) view external returns(uint)
        {
            return user[add].AllDirects.length;
        }
        
        function IslevelFreeze(address add,uint level_no) view public returns(bool)
        { 
            if((get_level_totalEarned(add,level_no) >= income_restriction[level_no]) && !user[add].Level[level_no+1].joined){
                
                return true;
            }
            return false;
        }
        
        
        function get_currTime_And_historyLength() external view returns(uint temp,uint historylength)
        {
            return (block.timestamp,history.length);
        }

        //update functions

        function update_regFee(uint val) onlyOwner external
        {
            regFee = val;
        }

       function withdrawFunds(uint _amount) onlyOwner public
        {
            Token(usdt_address).transfer(owner,_amount); 
        }
    }