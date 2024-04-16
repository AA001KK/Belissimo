const Footer = () => {
  return (
    <div className="container mx-auto ">
      <div className="footer__header mt-[20px]  text-[#fff] flex md:justify-between md:gap-0  px-[50px] md:px-6 sm:flex-row flex-col gap-[40px] pt-[50px]">
        <div className="flex flex-col md:flex-row gap-[10px]  md:w-full justify-between">
          <div>
            <img
              src="public/footer-images/footer-logo.svg"
              className="w-[256px] h-[61px]"
              alt=""
            />
            <div className="footer__header_call mt-[10px] text-[18px] ">
              Raqamga qo'ng'iroq qiling -{" "}
              <span className="text-[#006f4c]">1174</span>
            </div>
          </div>
          <ul className="footer__links md:ms-[20px]   md:me-[0px]">
            <li className="footer__links_link mt-[5px] text-[17px] lg:text-[18px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Biz haqimizda</a>
            </li>
            <li className="footer__links_link text-[17px] mt-[5px] lg:text-[18px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Ommaviy oferta</a>
            </li>
            <li className="footer__links_link text-[17px]  mt-[5px] lg:text-[18px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Mahsulotlarning Halloligi haqida sertifikat</a>
            </li>
            <li className="footer__links_link text-[17px] mt-[5px] lg:text-[18px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Bizning ish o'rinlarimiz</a>
            </li>
          </ul>
          <ul className="footer__links hidden md:ms-[20px] xl:block md:me-[0px]  ">
            <li className="footer__links_link mt-[5px] text-[17px] lg:text-[19px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Biz haqimizda</a>
            </li>
            <li className="footer__links_link text-[17px] mt-[5px] lg:text-[19px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Ommaviy oferta</a>
            </li>
            <li className="footer__links_link text-[17px]  mt-[5px] lg:text-[19px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Mahsulotlarning Halloligi haqida sertifikat</a>
            </li>
            <li className="footer__links_link text-[17px] mt-[5px] lg:text-[19px] text-footerColor hover:text-[white]  transition-all">
              <a href="#">Bizning ish o'rinlarimiz</a>
            </li>
          </ul>
          <div className="footer__social flex  min-w-[175px]  ">
            <div className="footer__social_title  ">
              <h3>Bizni kuzatip boring </h3>
              <div className="social__box flex mt-[10px]  justify-between   ">
                <img
                  src="public/footer-images/facebook.svg"
                  className="w-[30px] h-[30px] object-cover"
                  alt=""
                />
                <img
                  src="public/footer-images/instagram.svg"
                  className="w-[30px] h-[30px] object-cover"
                  alt=""
                />
                <img
                  src="public/footer-images/telegram.svg"
                  className="w-[30px] h-[30px] object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="footer__pay md:mx-[40px] flex sm:flex-col sm:justify-center sm:items-center  justify-between  sm:gap-[20px] flex-wrap">
          <img
            src="public/footer-images/uzcard.svg"
            className="w-[50px] object-cover"
            alt=""
          />
          <img
            src="public/footer-images/payme.svg"
            alt=""
            className="w-[100px]"
          />
          <img
            src="public/footer-images/click.svg"
            alt=""
            className="w-[100px]"
          />
        </div>
      </div>
      <div className="footer__bottom py-[30px] text-footerColor  text-[16px] lg:text-[20px] text-center">
        <p className="mx-auto">© 2016-2024 Bellissimo Pizza.</p>
      </div>
    </div>
  );
};

export default Footer;
