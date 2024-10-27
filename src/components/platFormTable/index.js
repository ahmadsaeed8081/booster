import React from 'react'
import moment from "moment";

const PlatFromTable = (props) => {


  const count = (time) => {
    const now = new Date(time*1000);  
    const t=moment(now).format('D MMM YYYY');
    return t;
    
  };

  return (
    <>
<span className=" tw-pl-8 tw-text-white tw-font-zen-dots   md:tw-text-2xl sm:tw-text-xl tw-text-lg">
                  Recent Platform Activities
                </span>
                <div className="tw-overflow-x-auto tw-mt-6 tw-h-96 tw-overflow-y-auto  mb-4">
                  <table className="tw-min-w-full tw-mb-0 ">
                    <thead className="text-center tw-border-b tw-border-[#456DA7] tw-bg-button-gradient">
                      <tr className="tw-rounded-lg tw-whitespace-nowrap">
                        <th
                          scope="col"
                          className=" tw-text-black  tw-font-poppins tw-px-6 tw-py-4"
                        >
                          Sr No.
                        </th>
                        <th
                          scope="col"
                          className="tw-text-black  tw-font-poppins  tw-px-6 tw-py-4"
                        >
                          User ID
                        </th>
                        <th
                          scope="col"
                          className=" tw-text-black  tw-font-poppins  tw-px-6 tw-py-4"
                        >
                          Action
                        </th>

                        <th
                          scope="col"
                          className="tw-text-black  tw-font-poppins  tw-px-6 tw-py-4"
                        >
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody className=" ">
                      <>
                      {props.historyData.map((item,index)=>(

                          <tr className="tw-bg-[#2C2C2C] tw-rounded-md">
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                          <span className=" tw-text-white tw-font-poppins">
                              0{index+1}
                            </span>
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              {Number(item[2])}
                            </span>
                          </td>

                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                            {Number(item[0])==0?("Registeration"):(null)} {Number(item[0])==1?("upgrade Level"):(null)} {Number(item[0])==2?("Claim Monthly Salary"):(null)} {Number(item[0])==3?("Claim Gift Reward"):(null)}


                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                            <div className=" flex  tw-flex-col">
                              <div>
                                <span className=" tw-text-white tw-font-poppins">
                                {count(Number(item[1]))}

                                </span>
                              </div>
                              {/* <div>
                                <span className=" tw-text-white tw-font-poppins  tw-font-light">
                                  11:03.45 pm
                                </span>
                              </div> */}
                            </div>
                          </td>
                          </tr>
                      ))}

                        {/* <tr className="tw-bg-[#1e1e1e] tw-rounded-md">
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <img
                              src={require("../../assets/images/crypto2.png")}
                              className=" tw-mx-auto"
                              alt=""
                            />
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              3101
                            </span>
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Activation
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Registration
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                            <div className=" flex  tw-flex-col">
                              <div>
                                <span className=" tw-text-white tw-font-poppins">
                                  22-08-2024
                                </span>
                              </div>
                              <div>
                                <span className=" tw-text-white tw-font-poppins  tw-font-light">
                                  11:03.45 pm
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr className="tw-bg-[#2C2C2C] tw-rounded-md">
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <img
                              src={require("../../assets/images/crypto.png")}
                              className=" tw-mx-auto"
                              alt=""
                            />
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              3101
                            </span>
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Activation
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Registration
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                            <div className=" flex  tw-flex-col">
                              <div>
                                <span className=" tw-text-white tw-font-poppins">
                                  22-08-2024
                                </span>
                              </div>
                              <div>
                                <span className=" tw-text-white tw-font-poppins  tw-font-light">
                                  11:03.45 pm
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr className="tw-bg-[#1e1e1e] tw-rounded-md">
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <img
                              src={require("../../assets/images/crypto2.png")}
                              className=" tw-mx-auto"
                              alt=""
                            />
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              3101
                            </span>
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Activation
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Registration
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                            <div className=" flex  tw-flex-col">
                              <div>
                                <span className=" tw-text-white tw-font-poppins">
                                  22-08-2024
                                </span>
                              </div>
                              <div>
                                <span className=" tw-text-white tw-font-poppins  tw-font-light">
                                  11:03.45 pm
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr className="tw-bg-[#2C2C2C] tw-rounded-md">
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <img
                              src={require("../../assets/images/crypto.png")}
                              className=" tw-mx-auto"
                              alt=""
                            />
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              3101
                            </span>
                          </td>
                          <td className="tw-align-middle  tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Activation
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-3 tw-whitespace-nowrap tw-text-center">
                            <span className=" tw-text-white tw-font-poppins">
                              Registration
                            </span>
                          </td>
                          <td className="tw-align-middle tw-font-semibold tw-px-6 tw-py-2 tw-whitespace-nowrap tw-text-center">
                            <div className=" flex  tw-flex-col">
                              <div>
                                <span className=" tw-text-white tw-font-poppins">
                                  22-08-2024
                                </span>
                              </div>
                              <div>
                                <span className=" tw-text-white tw-font-poppins  tw-font-light">
                                  11:03.45 pm
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr> */}
                      </>
                    </tbody>
                  </table>
                </div>
    </>
  )
}

export default PlatFromTable