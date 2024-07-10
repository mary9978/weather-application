import { useDarkMode } from "../context/DarkModeContext";
import Logo from "/images/logo.png";
import LocationIcon from "/images/location.svg";
function Header() {
  const {isDarkMode,toggleDark} = useDarkMode();
  return (
    <nav className="bg-white  px-4 lg:px-7 h-[100px] py-2  rounded-lg mt-4 overflow-hidden">
      <div className=" flex  items-center justify-between">
        <div className="lg:w-1/2 md:flex md:gap-x-2 md:px-4  md:items-center md:justify-between">

            <img className="w-14 h-14" src={Logo} alt={"weather app Logo"} />
          

          <label className="hidden md:inline-flex items-center cursor-pointer">
            <span className="me-3 text-sm font-medium text-[#474C66] ">
              light
            </span>
            <input
             checked={isDarkMode}
             onChange={toggleDark}
             type="checkbox" value="" className="sr-only peer" />
            <div
              className="relative w-11 h-6
           bg-gray-200 peer-focus:outline-none
             peer-focus:ring-[#CFD2E5]
              rounded-full 
             peer dark:bg-[#CFD2E5] peer-checked:after:translate-x-full
              rtl:peer-checked:after:-translate-x-full
               peer-checked:after:bg-[#3D55CC] after:content-['']
                after:absolute after:top-[2px] after:start-[2px]
                 after:bg-white after:border-gray-300 after:border
                  after:rounded-full after:h-5 after:w-5 after:transition-all
                   dark:border-gray-600 peer-checked:bg-[#CFD2E5]"
            ></div>

            <span className="ms-3 text-sm font-medium text-[#474C66] dark:text-gray-300">
              dark
            </span>
          </label>

          <label className="hidden md:inline-flex items-center cursor-pointer">
            <span className="me-3 text-sm font-medium text-[#474C66] dark:text-gray-300">
              F
            </span>
            <input type="checkbox" value="" className="sr-only peer" />
            <div
              className="relative w-11 h-6
           bg-gray-200 peer-focus:outline-none
             peer-focus:ring-[#CFD2E5]
              rounded-full 
             peer dark:bg-[#CFD2E5] peer-checked:after:translate-x-full
              rtl:peer-checked:after:-translate-x-full
               peer-checked:after:bg-[#3D55CC] after:content-['']
                after:absolute after:top-[2px] after:start-[2px]
                 after:bg-white after:border-gray-300 after:border
                  after:rounded-full after:h-5 after:w-5 after:transition-all
                   dark:border-gray-600 peer-checked:bg-[#CFD2E5]"
            ></div>

            <span className="ms-3 text-sm font-medium text-[#474C66] dark:text-gray-300">
              C
            </span>
          </label> 

        </div>

        <div className="lg:w-1/2 flex lg:mx-8 mx-2  items-center bg-[#E6E8F2] rounded-[36px] px-1.5 lg:px-4 py-1.5 gap-x-2">
          <img src={LocationIcon} alt="" />
          <input
            className="input bg-transparent text-[#474C66] text-sm"
            placeholder="موقعیت خود را جست و جو کنید"
          />
        </div>
      </div>
    </nav>
  );
}

export default Header;
