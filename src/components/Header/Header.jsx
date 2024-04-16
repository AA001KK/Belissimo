import React, { useState } from "react";
import HeaderInfo from "../HeaderInfo/HeaderInfo";
import Buttons from "./Buttons/Buttons";
import Delivery from "../Delivery/Delivery";
const Header = () => {
  const [show, setLang] = useState(false);
  const openLang = () => {
    setLang(!show);
  };

  const [ulActive, setOpenUl] = useState(false);

  let classUlButton =
    "box-menu__button_ul mb-[10px] shadow-[] bg-[#f6f6f7] py-[12px] px-[18px] rounded-[100px] flex justify-between items-center transition-all";
  let classBoxMenu =
    "fixed top-[0px]  translate-x-[-450px] z-[10] transition-[all] opacity-0 linear duration-[10.4s]   right-[0px] bottom-[0px] left-[0px] z-[2] bg-bgBoxMenu ";

  let ulClasses =
    "h-[0px] max-w-[280px] flex flex-col  flex-wrap overflow-x-scroll flex-col z-50 overflow-hidden ";
  let liClasses =
    "w-full text-[#000] py-[px] rounded-[12px] px-[15px] mt-[-37px] transition-all bg-[#f4f4f4] cursor-pointer my-[7px] ";
  const [showBoxMenu, setBox] = useState(true);
  const openBoxMenu = () => {
    setBox(!showBoxMenu);
  };

  const openUl = () => {
    setOpenUl(!ulActive);
  };

  if (ulActive == true) {
    classUlButton = classUlButton.replace("shadow-[]", "shadow-shadowCard");
    ulClasses = ulClasses.replace("h-[0px]", "h-full");
    liClasses = liClasses.replace("mt-[-37px]", "mt-[0px]");
  } else {
    ulClasses = ulClasses = ulClasses.replace("h-full", "h-[0px]");
    liClasses = liClasses.replace("mt-[0px]", "mt-[-37px]");
    classUlButton = classUlButton.replace("shadow-shadowCard", "shadow-[]");
  }

  if(showBoxMenu == false) {
    classBoxMenu = classBoxMenu.replace("hidden", "fixed")
    classBoxMenu = classBoxMenu.replace("translate-x-[-450px]", "translate-x-[0px]")
    classBoxMenu = classBoxMenu.replace("opacity-0", "opacity-[1]")
  }
  else {
    classBoxMenu = classBoxMenu.replace("fixed", "hidden")
    classBoxMenu = classBoxMenu.replace("translate-x-[0px]", "translate-x-[-450px]")
    classBoxMenu = classBoxMenu.replace("opacity-[1]", "opacity-0")

  }

  return (
    <div className="header flex py-[10px]  xl:py-[20px] justify-between items-center">
      <div className="logo w-[130px] sm:w-[180px]">
        <img src="public/header-images/logo.webp" alt="" />
      </div>
      <div className="hidden lg:flex gap-[40px]">
        <div className="flex gap-[10px] items-center">
          <div className="icon-box bg-[#ecfdf5] flex items-center rounded-[4px] justify-center py-[10px] px-[15px]">
            <img src="public/header-images/location.svg" alt="" />
          </div>
          <div className="icon-info text-[13px] text-[#64748b]">
            Shahar:
            <div className="text-[16px] text-[#047857]">Toshkent:</div>
          </div>
        </div>
        <div className="flex gap-[10px] items-center">
          <div className="icon-box bg-[#ecfdf5] flex gap-[5px] items-center rounded-[4px] justify-center py-[10px] px-[15px]">
            <img src="public/header-images/phone.svg" alt="" />
            <div className="text-[#047857] font-semibold">1174</div>
          </div>
          <div className="icon-info text-[13px] text-[#64748b]">
            Yagona aloqa markazi
          </div>
        </div>
        <div className="hidden xl:flex gap-[10px] items-center">
          <div className="icon-box bg-[#ecfdf5] flex gap-[10px] items-center rounded-[4px] justify-center py-[10px] px-[15px]">
            <div className="text-[#047857] font-semibold">24/7</div>
            <div className="icon-info text-[13px] text-[#64748b]">
              Bepul yetkazish endi 24/7 mavjud
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lang-login md:flex gap-6 items-center">
        <ul className="lang ">
          <li
            onClick={openLang}
            className="p-1  shadow-shadowKombo  rounded-[12px]"
          >
            <a className="flex gap-2 items-center" href="#">
              <span>
                <img src="public/header-images/uz.png" alt="" />
              </span>
              <span>Uz</span>
              <span>
                <img src="public/header-images/strelka.svg" alt="" />
              </span>
            </a>
          </li>
          <li
            className={
              show == true
                ? "bg-white-700 mt-1 z-50 bg-[white]  shadow-shadowKombo rounded-[12px] p-1 absolute "
                : "hidden "
            }
          >
            <a className="flex gap-2 items-center pe-[20px]" href="#">
              <span>
                <img src="public/header-images/ru.png" alt="" />
              </span>
              <span>Ru</span>
            </a>
          </li>
        </ul>
        <div className="halal-img w-[50px] h-[50px] hidden sm:block ">
          <img
            src="public/header-images/halal.webp  "
            className="w-[100%] h-[100%]"
            alt=""
          />
        </div>
        <button className="header-btn px-[20px] text-[white] py-[5px] rounded-[30px] bg-[#047857] ">
          Kirish
        </button>
      </div>
      <div
        onClick={openBoxMenu}
        className=" box-menu__button  md:hidden flex flex-col  items-end gap-[5px]"
      >
        <div className="box-menu__item  w-[22px] h-[3px] rounded-[10px] bg-[#5d6568]"></div>
        <div className="box-menu__item  w-[18px] h-[3px] rounded-[10px] bg-[#5d6568]"></div>
        <div className="box-menu__item  w-[15px] h-[3px] rounded-[10px] bg-[#5d6568]"></div>
      </div>

      <div className={classBoxMenu}>
        <div className="box-menu__info  z-[33]    absolute bg-white w-[310px] h-[100vh] py-[32px] px-[15px] ">
          <div className={classUlButton} onClick={openUl}>
            Toshkent{" "}
            <div>
              <img src="public/header-images/dropdown-icon.svg" alt="" />
            </div>
          </div>
          <div className="max-h-[300px] overflow-y-scroll">
            <ul className={ulClasses}>
              <li className={liClasses}>Samarqand</li>
              <li className={liClasses}>Andijon</li>
              <li className={liClasses}>Qoq'on</li>
              <li className={liClasses}>Farg'ona</li>
              <li className={liClasses}>Chirchiq</li>
              <li className={liClasses}>Namangan</li>
              <li className={liClasses}>Buxoro</li>
              <li className={liClasses}>Olmaliq</li>
              <li className={liClasses}>Nurafshon</li>
              <li className={liClasses}>Angren</li>
              <li className={liClasses}>Yangiyul</li>
            </ul>
          </div>
          <div className="flex mt-[10px] flex-col gap-[12px]">
            <Buttons
              img={"public/header-images/boxMenu/login.svg"}
              title={"Kirish"}
              link={"#login"}
            />
            <Buttons
              img={"public/header-images/boxMenu/menu-icon.svg"}
              title={"Menu"}
              link={"#menu"}
            />
            <Buttons
              img={"public/header-images/boxMenu/restaurant-icon.svg"}
              title={"Restoranlar"}
              link={"#menu"}
            />
            <Buttons
              img={"public/header-images/boxMenu/sale-icon.png"}
              title={"Aksiyalar"}
              link={"#sale"}
            />
            <Buttons
              img={"public/header-images/boxMenu/call-icon.svg"}
              title={"Bizga qo'ng'iroq qiling"}
              link={"#sale"}
            />
          </div>
          <div className="text-[#666666] mt-[14px] text-[16px]">
            Til
            <div className="flex  flex-col mt-[5px] gap-[10px] md:flex-row lg:justify-between">
            <div className=" md:w-[40%] xl:w-[30%] delivery__buttons flex text-center  p-[10px] font-semibold text-[14px] text-[#828282]  rounded-[100px] border border-solid border-[#f4f4f4] relative bg-[#f4f4f4]">
              <div className="delivery__buttons_left relative  z-2 w-[50%]  cursor-pointer">
                <a href="#">O'zbek tili</a>
              </div>
              <div className="delivery__buttons_right relative z-2 w-[50%] cursor-pointer ">
                <a href="#ru">Rus tili</a>
              </div>
              <div className="delivery__buttons_focus transition-all  duration-[.5s]  ease translate-x-[0%] absolute  w-[50%]   top-[7px] text-[black] shadow-delivery    flex justify-center  items-center   bottom-[7px] left-[7px] right-[7px]  rounded-[100px]  bg-[white]">
                O'zbek tili
              </div>
            </div>
          </div>
          </div>
         
        </div>

        <div
          onClick={openBoxMenu}
          className="absolute cursor-pointer top-[20px] left-[320px] flex w-[36px] h-[36px] rounded-[50%] bg-[#f6f6f7] justify-center items-center"
        >
          <img src="public/header-images/boxMenu/cancel-icon.svg" alt="f" />
        </div>
      </div>
    </div>
  );
};

export default Header;
