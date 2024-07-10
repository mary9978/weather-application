import React from "react";
import TitleComponent from "./TitleComponent";
import icon from "/images/calendar.svg";
function OtherCityTemp() {
  return (
    <div className="container flex-col justify-between px-4">
      <TitleComponent text={"دمای شهرهای دیگر"} icon={icon} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-[10px]  mt-3 text-dark">
        <div className="flex items-center justify-around gap-x-3 rounded-lg w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px]  h-[88px] shadow-cardShadow border-2 border-primary-1 ">
          <span className="leading-leading-04 text-dark">مشهد</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/cloud-notiffill.png"
              loading="lazy"
              alt="cloud"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/cloud-notifdark.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 32</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className=" leading-leading-04 text-dark ">اصفهان</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/sunsmall.png"
              loading="lazy"
              alt="sun"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/cloud-notif.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 36</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px]  h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className=" leading-leading-04 text-dark ">قم</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/sunsmall.png"
              loading="lazy"
              alt="sun"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/cloud-notif.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 39</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className=" leading-leading-04 text-dark ">کرج</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/cloud-notiflight.png"
              loading="lazy"
              alt="cloud"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/cloud-notif.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 29</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest">
          <span className="leading-leading-04 text-dark">تهران</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/sunsmall.png"
              loading="lazy"
              alt="sun"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/sundark.png"
              loading="lazy"
              alt="sun"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 38</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className=" leading-leading-04 text-dark ">رشت</span>
          <span>
            <img
              className="size-9 inline-block dark:hidden"
              src="images/cloud-sunny.png"
              loading="lazy"
              alt="cloud"
            />
            <img
              className="size-9 hidden dark:inline-block"
              src="images/cloud-sunnydark.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 29</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className="leading-leading-04 text-dark ">مازندران</span>
          <span>
            <img
              className="size-9 inline-block dark:hidden"
              src="images/cloud-sunny.png"
              loading="lazy"
              alt="cloud"
            />
            <img
              className="size-9 hidden dark:inline-block"
              src="images/cloud-sunnydark.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 29</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest">
          <span className="leading-leading-04 text-dark ">شیراز</span>
          <span>
            <img
              className="size-10 inline-block dark:hidden"
              src="images/cloud-notiflight.png"
              loading="lazy"
              alt="cloud"
            />
            <img
              className="size-10 hidden dark:inline-block"
              src="images/cloud-notif.png"
              loading="lazy"
              alt="cloud"
            />
          </span>
          <span className=" leading-leading-04 text-darkest ">&#8451; 35</span>
        </div>

        <div className="flex items-center justify-around gap-x-3 rounded-lg  w-full xs:w-200 md:w-[350px] lg:w-[320px] xl:w-[400px] h-[88px] shadow-cardShadow border-2 border-lightest ">
          <span className=" leading-leading-04 text-dark ">اهواز</span>
          <span>
            <img
              className="size-9 inline-block dark:hidden"
              src="images/sunsmall.png"
              loading="lazy"
              alt="sun"
            />
            <img
              className="size-9 hidden dark:inline-block"
              src="images/sundark.png"
              loading="lazy"
              alt="sun"
            />
          </span>
          <span className="leading-leading-04 text-darkest ">&#8451; 45</span>
        </div>
      </div>
    </div>
  );
}

export default OtherCityTemp;
