import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "../components/daily-tips/carousel.css";
import TitleComponent from "./TitleComponent";
import CalenderLogo from '../../public/images/calendar.svg';

function WeaklyWeather() {
  const data = [
    {
      id: 1,
      weakDate: "شنبه",
      date: "2/4/1403",
      icon:'images/sun.png',
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
    {
      id: 2,
      weakDate: "شنبه",
      date: "2/4/1403",
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
    {
      id: 3,
      weakDate: "شنبه",
      date: "2/4/1403",
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
    {
      id: 4,
      weakDate: "شنبه",
      date: "2/4/1403",
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
    {
      id: 5,
      weakDate: "شنبه",
      date: "2/4/1403",
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
    {
      id: 6,
      weakDate: "شنبه",
      date: "2/4/1403",
      weatherTemp_c: 36,
      weatherType: "آقتابی وگرم",
    },
  ];
  return (
    <div className="container relative max-w-[1291px] w-full  text-dark dark:flex-col justify-between">
      
      <div className="pt-4">
      <TitleComponent text={'دمای هفته'} icon={CalenderLogo}/>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
          
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col gap-1 items-center justify-center rounded-lg  w-full sm:w-[200px] h-258 shadow-cardShadow border-2 border-lightest dark:px-[19px] py-[25px]">
              <span className="leading-leading-06 text-Title5 ">{item.weakDate}</span>
              <span className="text-subTitle1 leading-leading-04">
                {item.date}
              </span>
              <span>
                <img
                  className="size-11 inline-block dark:hidden"
                  src={item.icon}
                  loading="lazy"
                  alt="sun"
                />
                <img
                  className="size-11 hidden dark:inline-block"
                  src="images/cloud-notif.png"
                  loading="lazy"
                  alt="sun"
                />
              </span>
              <span className="text-Title5 leading-leading-07">&#8451; {item.weatherTemp_c}</span>
              <span className="leading-leading-06 text-Title6">
                 {item.weatherType}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default WeaklyWeather;
