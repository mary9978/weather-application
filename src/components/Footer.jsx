import Logo from "../../public/images/images.jpg";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoIosArrowDropup } from "react-icons/io";

function Footer() {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="footer mt-4">
      {/* <div className="relative w-full "> */}
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="mx-auto w-full  flex items-center justify-center max-w-screen-xl p-4">
          <div className="flex flex-col justify-center w-1/2 items-center">
            <img src={Logo} className="w-14 h-14 mb-4" alt="" />
            <p className="font-iranSans text-center text-sm text-white font-medium">
              تمامی اطلاعات ارائه‌شده در این وب‌سایت با دقت بالا جمع‌آوری شده و
              به‌روزرسانی می‌شود. استفاده از مطالب سایت با ذکر منبع بلامانع است.
            </p>
            <div className="social-info flex items-center gap-x-2 my-4">
              <FaInstagram className="w-5 h-5 text-white cursor-pointer" />
              <FaFacebookF className="w-5 h-5 text-white cursor-pointer" />
              <CiTwitter className="w-6 h-6 text-white cursor-pointer" />
            </div>
            <div className="flex bg-white rounded-md px-2 py-2">
              <input
                className="input bg-transparent text-xs font-iranSans"
                type="text"
                placeholder="ارسال بازخورد"
              />
              <button className="text-white bg-[#3D55CC] py-2 px-4 rounded-md">
                ارسال
              </button>
            </div>
            {/* back to top btn */}
            <div className="flex flex-col items-center mt-4">
              <IoIosArrowDropup
                onClick={handleScroll}
                className="text-white w-6 h-6 cursor-pointer"
              />
              <p className="text-white font-iranSans text-center">
                بازگشت به بالا
              </p>
            </div>
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
