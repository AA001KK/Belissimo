import React from "react";
import Header from "./components/Header/Header";
import Sw from "./components/Swiper/Swiper";
import Delivery from "./components/Delivery/Delivery";
import KomboBox from "./components/Kombo/Kombo-box";
import Cards from "./components/Cards/Cards";
import Pitsa from "./components/Pitsa/Pitsa";
import Gazak from "./components/Gazak/Gazak";
import Footer from "./components/Footer/Footer";
import BoxMenu from "./components/BoxMenu/BoxMenu";
import { useState } from "react";
const App = () => {
  // const [class1, setClass] = useState(false)

  // window.addEventListener("scroll", ()=> {

  //   console.log(window.scrollY);
  //   if(window.scrollY>420) {
  //      let openClass = ()=> {
  //       setClass(!class1)
  //       console.log(!class1);
  //      }

  //   }
  //   console.log(class1);

  // })
  return (
    <div>
      <div className="container mx-auto px-4 text-[20px] ">
          <Header />

        <div className="swiper mt-[20px] rounded-[10px] xl:rounded-[20px]">
          <Sw />{" "}
        </div>
        <Delivery />
      </div>
      <KomboBox />
      <div className="container mx-auto px-4 text-[20px]">
        <Pitsa name={"Pitsa"} />
        <Gazak name={"Gazaklar"} />
      </div>
      <div className="footer-back  bg-[#262a2c]">
        <Footer />
      </div>
    </div>
  );
};

export default App;
