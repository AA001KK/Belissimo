import { useState } from "react";

const Gazak = ({ name }) => {
  const gazaks = [
    {
      img: "public/gazaklar-images/gazak1.webp",
      title: "Kartoshka fri",
      subtitle: "Pechdan yangi uzilgan qarsildoq kartoshka fri",
      price: "17 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak2.webp",
      title: "Po-derevenski kartoshkasi",
      subtitle: "Pechdan yangi uzilgan qarsildoq  po-derevenski kartoshkasi",
      price: "15 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak3.webp",
      title: "Pepperoni rollar 12dona",
      subtitle:
        "Qarsildoq xamir, mayin Ranch sousi, pepperoni va juda koʻp pishloq",
      price: "27 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak4.webp",
      title: "Tovuqli Bellisster",
      subtitle:
        "Mazali tovuqcha yumshoq tortilya ichida haqiqiy motsarella pishlog'i, pomidor va ranch sous bilan",
      price: "24 00 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak5.webp",
      title: "Kartoshka fri",
      subtitle: "Pechdan yangi uzilgan qarsildoq kartoshka fri",
      price: "17 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak6.webp",
      title: "Po-derevenski kartoshkasi",
      subtitle: "Pechdan yangi uzilgan qarsildoq  po-derevenski kartoshkasi",
      price: "15 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak7.webp",
      title: "Pepperoni rollar 12dona",
      subtitle:
        "Qarsildoq xamir, mayin Ranch sousi, pepperoni va juda koʻp pishloq",
      price: "27 000 so'mdan",
    },
    {
      img: "public/gazaklar-images/gazak8.webp",
      title: "Tovuqli Bellisster",
      subtitle:
        "Mazali tovuqcha yumshoq tortilya ichida haqiqiy motsarella pishlog'i, pomidor va ranch sous bilan",
      price: "24 00 so'mdan",
    },
  ];

  window.addEventListener("click", (even) => {
    if (even.target.classList.contains("modalBack")) {
    }
  });

  return (
    <div>
      <div className="card-container">
        <div className="card__name font-semibold">{name}</div>

        <div className="cards grid  grid-cols-2 xl:grid-cols-4 gap-[20px] py-4">
          {gazaks.map((value, ind) => {
            const [activeBoxCard, setCard] = useState(true);
            let classBoxCard =
              "hidden   flex items-center modalBack flex-wrap  justify-center top-0 bg-backgroundModal  z-[900] left-0  bottom-0 w-full";
            const openBoxCard = (index) => {
              setCard(!activeBoxCard);

            };

            if (activeBoxCard == false) {
              classBoxCard = classBoxCard.replace("hidden", "fixed");
            } else {
              classBoxCard = classBoxCard.replace("fixed", "hidden");
            }

            return (
              <div key={ind}>
                <div
                  onClick={() => openBoxCard()}
                  className="cardBox h-full card cursor-pointer flex-col relative justify-between xl:items-start   items-center  xl:flex-col  all linear duration-300   gap-[10px] lg:hover:scale-scaleCard  p-[10px] flex lg:items-center  rounded-[14px]  shadow-shadowCard bg-[#fff]  "
                >
                  <div className="card__img  flex  flex-col items-center">
                    <img
                      src={value.img}
                      className=" object-cover max-w-[80%]"
                      alt=""
                    />
                    <div className="card__info   ">
                      <div className="card__info_title text-[14px] lg:text-[18px]">
                        {value.title}
                      </div>
                      <div className="card__info_subtitle text-[11px] lg:text-[15px]    text-[#828282]">
                        {value.subtitle}
                      </div>
                    </div>
                  </div>

                  <button className=" card__info_price py-[8px] mt-[10px] px-[12px] bg-[#ebebeb] font-bold text-[13px] rounded-[27px]">
                    {value.price}
                  </button>
                </div>
                <div onClick={() => openBoxCard()} className={classBoxCard}>
                  <div className="w-[80%]  rounded-[32px]  sm:fixed sm:left-[50%]  sm:translate-y-[-50%] sm:translate-x-[-50%]  bg-[white] p-[25px]">
                    <div className="relative flex justify-center flex-col items-center">
                      <img src={value.img} className="w-[300px]" alt="" />
                      <div className="card__info  flex justify-center flex-col items-center     ">
                        <div className="card__info_title text-[15px] lg:text-[18px]">
                          {value.title}
                        </div>
                        <div className="card__info_subtitle text-[13px] lg:text-[15px]    text-[#828282]">
                          {value.subtitle}
                        </div>
                        <button className=" card__info_price py-[10px] mt-[10px] px-[20px] bg-[#ebebeb] font-bold text-[13px] rounded-[27px]">
                          {value.price}
                        </button>
                        <button className="mt-[10px] w-full  py-[5px] px-[15px] text-[16px] md:text-[18px] flex justify-center items-center rounded-[60px] bg-[#006f4c] text-[white] font-sm">
                          Savatga qo'shish
                        </button>
                        <div className="text-[#ff002b] absolute top-0 left-0 rounded-[50%] p-[10px] sm:p-[13px] shadow-shadowCancelBtn">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            height="25px"
                            width="25px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gazak;
