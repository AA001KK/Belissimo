import React from "react";

const HeaderInfo = ({img, name, desc}) => {
  return (
    <div>
      <div className="flex gap-[10px]">
        <div className="icon-box bg-[#ecfdf5] flex items-center rounded-[4px] justify-center w-[48px] h-[48px]">
          <img src={img} alt="" />
        </div>
        <div className="icon-info text-[13px] text-[#64748b]">
          Shahar:
          <div className="text-[16px] text-[#047857]">Toshkent:</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
