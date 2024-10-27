import React from "react";
import Footer from "../../components/footer";
import { useParams } from "react-router-dom";
import PanelNav from "../../components/PanelNav/PanelNav";
import { Tooltip } from "react-tippy";
// import { Tooltip } from 'react-tooltip'
import Loader from "../../components/Loader";

const LevelDetails = (props) => {
  const { id } = useParams();

  const Level = [
    { id: 1, level: "01", price: "$6" ,   },
    { id: 2, level: "02", price: "$12" },
    { id: 3, level: "03", price: "$30" },
    { id: 4, level: "04", price: "$50" },
    { id: 5, level: "05", price: "$80" },
    { id: 6, level: "06", price: "$120" },
    { id: 7, level: "07", price: "$180" },
    { id: 8, level: "08", price: "$220" },
    { id: 9, level: "09", price: "$280" },
    { id: 10, level: "10", price: "$320" },
    { id: 11, level: "11", price: "$360" },
    { id: 12, level: "$12", price: "$400" },
  ];

  const levelDetails = Level.find((item) => item.id === parseInt(id));
  const numDots = levelDetails ? parseInt(levelDetails.level) : 1;

  const numDots2 = levelDetails ? parseInt(levelDetails.level) : 1;

  const renderPyramidDots = (level,circleInfo) => {
    const totalDots = 12; 
    let curr_dot = 0; 

    const rows = [];
    let dotsInRow = 1;
    let filledCircles = level;

    for (let row = 0; row < Math.ceil(totalDots /3); row++) {
      const rowDots = [];
      for (let i = 0; i < dotsInRow; i++) {
        const isFilled = filledCircles > 0; 
        
        rowDots.push(
          <Tooltip

          // title={isFilled?("id: "+circleInfo[curr_dot]):(null)}
          position="top"
          animation="scale"
          trigger="click"
          className="text-white"
          style={{  color: "white", zIndex:"1000" }}
          html={(
            <p style={{  color: "white", zIndex:"1000" }}>
            {isFilled?("id: "+circleInfo[curr_dot]):(null)}
            </p>
          )}    

          >

          <span

            key={`dot-${row}-${i}`}
            className={`tw-block  tw-w-14 tw-h-14 tw-border ${
              isFilled ? "tw-bg-[#DDA80E] tw-border-[#DDA80E]" : "tw-border-[#DDA80E]"
            } tw-rounded-full tw-inline-block tw-mx-1.5`}
          ></span>
          </Tooltip>

        );
        curr_dot++
        filledCircles--; 
      }
      rows.push(<div className="tw-flex tw-justify-center">{rowDots}</div>);
      dotsInRow += 1;
    }
    return rows;
  };



  const renderPyramidDots2 = (level,circleInfo) => {
    const rows = [];
    const layout = [2, 3]; 
    let filledCircles = level;
    let curr_dot = 0; 

    layout.forEach((dotsInRow, row) => {
      const rowDots = [];
      for (let i = 0; i < dotsInRow; i++) {
        const isFilled = filledCircles > 0;
        rowDots.push(

          <Tooltip

          // title={isFilled?("id: "+circleInfo[curr_dot]):(null)}
          position="top"
          animation="scale"
          trigger="click"
          theme="light"
          className="text-white"
          style={{  color: "white", zIndex:"1000" }}
          html={(
            <p style={{  color: "white", zIndex:"1000" }}>

            {isFilled?("id: "+circleInfo[curr_dot]):(null)}
              
            </p>
          )}
          >


          <span
          // href="#"
            key={`dot-${row}-${i}`}
            className={`tw-block tw-w-14 tw-h-14 tw-border ${
              isFilled ? "tw-bg-[#DDA80E] tw-border-[#DDA80E]" : "tw-border-[#DDA80E]"
            } tw-rounded-full tw-inline-block tw-mx-1.5 tw-my-1`}
          >


          </span>
            </Tooltip>

        );
        curr_dot++;
        filledCircles--;
      }
      rows.push(<div key={`row-${row}`} className="tw-flex tw-justify-center">{rowDots}</div>);
    });
  
    return rows;
  };

  return (
    <>
      <PanelNav search_user={props.search_user} />
      <section className="tw-text-white">
        <div className="container tw-mb-12 tw-mx-auto">
          <div className="tw-flex sm:tw-flex-row tw-flex-col tw-gap-4 tw-justify-center tw-items-center">
            <div className="tw-w-96">
              <div className="tw-relative tw-bg-button-level tw-p-8 tw-shadow-lg tw-rounded-lg tw-text-center tw-relative">
                <div className="tw-flex tw-pb-4 tw-justify-between tw-items-center tw-w-full">
                  <span className="tw-text-white tw-font-poppins">Level</span>
                  <span className="tw-text-white tw-font-poppins">B10</span>
                </div>
                <div className="tw-h-[39vh] tw-flex tw-justify-center tw-items-center">
                
                  <div>{renderPyramidDots(Number(props.levelData[id].b10_count_for_cycle), props.levelData[id].b10_circlesData  )}</div>
                </div>
                <div className="tw-flex tw-pt-8 tw-justify-between tw-items-center">
                  <div>
                    <div className="tw-flex tw-gap-2 tw-items-center">
                      <img
                        src={require("../../assets/images/mdi_partnership-outline.png")}
                        alt=""
                      />
                      <span className="tw-font-poppins tw-font-medium tw-text-white">
                        Partner
                      </span>
                    </div>
                    <span className="tw-text-white tw-font-poppins tw-text-center tw-font-light">
                    {Number(props.levelData[id].b10_count_for_cycle) + (Number(props.levelData[id].b10_total_cycles)*10)}
                    </span>
                  </div>
                  <div>
                    <div className="tw-flex tw-gap-2 tw-items-center">
                      <img
                        src={require("../../assets/images/material-symbols-light_cycle.png")}
                        alt=""
                      />
                      <span className="tw-font-poppins tw-font-medium tw-text-white">
                        Cycle
                      </span>
                    </div>
                    <span className="tw-text-white tw-font-poppins tw-font-light">
                    {Number(props.levelData[id].b10_total_cycles)}

                    </span>
                  </div>
                </div>
              </div>
            </div>

           <div className="tw-w-96">
              <div className="tw-relative tw-bg-button-level tw-p-8 tw-shadow-lg tw-rounded-lg tw-text-center tw-relative">
                <div className="tw-flex tw-pb-4 tw-justify-between tw-items-center tw-w-full">
                  <span className="tw-text-white tw-font-poppins">Level</span>
                  <span className="tw-text-white tw-font-poppins">B5</span>
                </div>
                <div className="tw-h-[39vh] tw-flex tw-justify-center tw-items-center">
                
                  <div>{renderPyramidDots2(Number(props.levelData[id].b5_count_for_cycle) , props.levelData[id].b5_circlesData )}</div>
                </div>
                <div className="tw-flex tw-pt-8 tw-justify-between tw-items-center">
                  <div>
                    <div className="tw-flex tw-gap-2 tw-items-center">
                      <img
                        src={require("../../assets/images/mdi_partnership-outline.png")}
                        alt=""
                      />
                      <span className="tw-font-poppins tw-font-medium tw-text-white">
                        Partner
                      </span>
                    </div>
                    <span className="tw-text-white tw-font-poppins tw-text-center tw-font-light">
                    {Number(props.levelData[id].b5_count_for_cycle) + (Number(props.levelData[id].b5_total_cycles)*5)}

                    </span>
                  </div>
                  <div>
                    <div className="tw-flex tw-gap-2 tw-items-center">
                      <img
                        src={require("../../assets/images/material-symbols-light_cycle.png")}
                        alt=""
                      />
                      <span className="tw-font-poppins tw-font-medium tw-text-white">
                        Cycle
                      </span>
                    </div>
                    <span className="tw-text-white tw-font-poppins tw-font-light">
                      {Number(props.levelData[id].b5_total_cycles)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {props.loader && <Loader />}

    </>
  );
};

export default LevelDetails;
