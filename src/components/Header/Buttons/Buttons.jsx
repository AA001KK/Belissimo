import React from "react";

const Buttons = ({ link, title, img }) => {
  return (
    <div className="cursor-pointer">
      <a
        href={link}
        className="  items-center flex gap-[] py-[15px] rounded-[16px] bg-[#f6f6f7] px-[20px]"
      >
        <div className=" me-[20px]">
          <img src={img} className="w-[25px] h-[25px]" alt="d" />
        </div>
        <div className="text-[16px] font-semibold">{title}</div>
      </a>
    </div>
  );
};

export default Buttons;
