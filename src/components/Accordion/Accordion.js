// Accordion.js

export default function Accordion(props) {
  return (
    <>
      <div className="   border tw-rounded-xl tw-py-1.5 tw-px-4 tw-mb-5">
        <button
          className="tw-w-full tw-text-black tw-items-center   tw-bg-transparent tw-py-4  tw-flex tw-text-[15px] tw-justify-between  tw-text-left
                            tw-transition tw-duration-300"
          onClick={props.toggleAccordion}
        >
          <div className=" tw-flex  tw-items-center tw-gap-3">
            <div className="">
              <h2 className="gradient-text  tw-text-xl tw-font-zen-dots">{props.id}</h2>
            </div>
            <p className=" m-0 tw-text-white  tw-font-zen-dots">
              {" "}
              {props.title}
            </p>
          </div>
          <p className=" tw-w-12">
            {props.isOpen ? (
              <>
              </>
            ) : (
             <div className="">
               <img
              src={require("../../assets/images/iconamoon_arrow-up-2-duotone.png")}
              className=""
            />
             </div>
            )}
          </p>
        </button>
        {props.isOpen && (
          <div className="  tw-text-gray-300  tw-font-light tw-pb-4  tw-text-[16px]">
            {props.data}
          </div>
        )}
      </div>
    </>
  );
}