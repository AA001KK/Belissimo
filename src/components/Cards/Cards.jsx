import React from "react";

const Cards = ({ name}) => {
  const pitsaz = [
    {
      img: "public/pitsa-images/pitsa1.webp",
      title: "Qazi pitsa",
      subtitle:
        " Qazi, go'shtli rulet, motsarella, ranch sousi, piyoz va quritilgan  pomidorlar",
      price: "63 00 so'mdan",
    },
    {
      img: "public/pitsa-images/pitsa2.webp",
      title: "Tovuqli donar",
      subtitle:
        "Yumshoq xamir, tovuq donar go‘shti, ayzberg karami, pishloq, piyoz va pomidor bo‘laklari hamda ranch va burger sousi",
      price: "63 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa3.webp",
      title: "Pishloqli pitsa",
      subtitle:
        "Haqiqiy motsarella firmenniy va alfredo sousi bilan uyg'unlikda",
      price: "50 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa4.webp",
      title: "Go'shtli miks",
      subtitle:
        "Kurka filesi, yumshoq mol goʻshti, piyoz, pomidor, 'Halapeno' achchiq qalampiri, motsarella pishlogʻi va barbekyu sous",
      price: "92 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa5.webp",
      title: "Donar Pitsa",
      subtitle:
        "Donar go‘shti va haqiqiy motsarella pishlog‘i solingan mazali va to‘yimli pitsa",
      price: "65 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa6.webp",
      title: "Super Miks",
      subtitle:
        "«Super Miks» pitsasi   1 ta pitsada 4 xil sevimli pitsalaringiz birlashmasi 😋 🙃",
      price: "99 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa6.webp",
      title: "Pishloqli joʻja",
      subtitle:
        "Yumshoq tovuq filesi, motsarella pishlogʻi, pomidor va pishloqli sous",
      price: "42 000 som'dan",
    },
    {
      img: "public/pitsa-images/pitsa6.webp",
      title: "Dabl pepperoni",
      subtitle:
        "Ikki hissa pepperoni motsarella pishlogʻi va tomat sousi bilan",
      price: "50 000 som'dan",
    },
  ];
  return (
    <div className="card-container">
      <div className="card__name font-semibold">{name}</div>
      <div className="cards flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-[20px] py-4">
        {pitsaz.map(({ img, title, subtitle, price }) => {
          return (
            <div className="card cursor-pointer relative xl:justify-between xl:items-start   items-stretch  xl:flex-col  all linear duration-300  justify-start gap-[10px] lg:hover:scale-scaleCard  p-[10px] flex lg:items-center  rounded-[14px]  shadow-shadowCard bg-[#fff]  ">
              <div className="card__img  flex  xl:flex-col items-center">
                <img
                  src={img}
                  className=" object-cover min-w-[115px] max-w-[115px] h-[115px] xl:min-w-[120px] xl:h-[120px]"
                  alt=""
                />
                <div className="card__info  hidden xl:block  ">
                <div className="card__info_title text-xl xl:text-[18px]">
                  {title}
                </div>
                <div className="card__info_subtitle text-[13px] xl:text-[15px]    text-[#828282]">
                  {subtitle}
                </div>
                <button className="xl:hidden card__info_price py-[8px] mt-[10px] px-[12px] bg-[#ebebeb] font-bold text-[13px] rounded-[27px]">
                  {price}
                </button>
              </div>
              </div>
              <div className="card__info xl:hidden   ">
                <div className="card__info_title text-xl xl:text-[18px]">
                  {title}
                </div>
                <div className="card__info_subtitle text-[13px] xl:text-[15px] text-[#828282]">
                  {subtitle}
                </div>
                <button className="xl:hidden card__info_price py-[8px] mt-[10px] px-[12px] bg-[#ebebeb] font-bold text-[13px] rounded-[27px]">
                  {price}
                </button>
              </div>
              <button className="hidden xl:block card__info_price py-[8px] mt-[10px] px-[12px] bg-[#ebebeb] font-bold text-[13px] rounded-[27px]">
                  {price}
                </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
