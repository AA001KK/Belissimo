import React, { useState } from "react";
import Kombo from "./Kombo";

const KomboBox = () => {

  return (
    <div  className="kombo">
      <div className="container py-[10px] px-[20px] lg:flex justify-between  mx-auto items-center ">
        <div  className=" kombo-box  flex overflow-x-scroll md:overflow-hidden   justify-start     max-w-[100%] gap-[10px]">
          <Kombo name={"Kombo"} />
          <Kombo name={"Pitsa"} />
          <Kombo name={"Gazaklar"} />
          <Kombo name={"Ichimliklar"} />
          <Kombo name={"Salatlar"} />
          <Kombo name={"Desertlar"} />
          <Kombo name={"Souslar"} />
        </div>
        <button className="hidden lg:flex all duration-700 kombo-box__korzinka rounded-[100px]  hover:shadow-savatcha  bg-[#ff002b] text-[white] py-[8px] px-[12px]  text-[17px] gap-[10px] ">
          Savatcha -<div>0</div>
        </button>
      </div>
    </div>
  );
};

export default KomboBox;
