import React, { useState } from "react";

const Delivery = () => {
  const [transltate, setTranslate] = useState(false);
  const DeliverActive = () => {
    setTranslate(!transltate);
  };
  console.log(transltate);
  let deliveryButtonClass =
    "delivery__buttons_focus transition-all  duration-[.5s] right-[7px] ease translate-x-[100%] absolute  w-[49%]   top-[7px] text-[black] shadow-delivery    flex justify-center  items-center   bottom-[7px] left-[3px] right-[3px]  rounded-[100px]  bg-[white]";

  if (transltate == false) {
    deliveryButtonClass = deliveryButtonClass.replace(
      "translate-x-[100%]",
      "translate-x-[0%]"
    );
    deliveryButtonClass = deliveryButtonClass.replace(
      "right-[7px]",
      "left-[7px]"
    );
  } else {
    deliveryButtonClass = deliveryButtonClass.replace(
      "translate-x-[0%]",
      "translate-x-[100%]"
    );
    deliveryButtonClass = deliveryButtonClass.replace(
      "left-[7px]",
      "right-[7px]"
    );
  }
  console.log(deliveryButtonClass);
  return (
    <div className="flex flex-col mt-[20px] gap-[10px] md:flex-row lg:justify-between">
      <div className=" md:w-[40%] xl:w-[30%] delivery__buttons flex text-center  p-[10px] font-semibold text-[14px] text-[#828282]  rounded-[100px] border border-solid border-[#f4f4f4] relative bg-[#f4f4f4]">
        <div
          onClick={DeliverActive}
          className="delivery__buttons_left relative  z-2 w-[50%]  cursor-pointer"
        >
          Yetkazip berish
        </div>
        <div
          onClick={DeliverActive}
          className="delivery__buttons_right relative z-2 w-[50%] cursor-pointer "
        >
          Olib ketish
        </div>
        <div className={deliveryButtonClass}>
          {transltate == false ? "Yetkazip berish" : "Olip ketish"}
        </div>
      </div>
      <div className="delivery__select py-[10px] px-[15px] md:w-[60%] lg:w-[65%] rounded-[10px] cursor-pointer flex justify-between  border border-solid border-[#ffc600] bg-[#fffbee]">
        <div className="delivery__select_info font-semibold text-[15px] text-[#ffc110] tracking-wider">
          {transltate == false
            ? "Yetkazib berish manzilini tanlang"
            : "Filialni tanlang"}
        </div>
        <img src="public/kombo-images/delivery.svg" alt="" />
      </div>
    </div>
  );
};

export default Delivery;
