import TipCard from "./tip-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import tipIcon from "../../assets/task-square.svg";

const data = [
  { color: "red", text: "امروز اشعه UV زیاده، یادت نره عینک بزنی." },
  { color: "red", text: "امروز حرارت آفتاب زیاده، ضـدآفتـاب حتما بـزن." },
  { color: "green", text: "شهرهای کوهستانی بهترین موقعیت سفر برای امروزن!" },
  { color: "red", text: "امروز اشعه UV زیاده، یادت نره عینک بزنی." },
  { color: "red", text: "امروز اشعه UV زیاده، یادت نره عینک بزنی." },
  { color: "green", text: "شهرهای کوهستانی بهترین موقعیت سفر برای امروزن!" },
];

export default function DailyTips() {
  return (
    <div className="px-[0] lg:px-[40px]">
      <div className="flex p-[20px] pb-0 gap-3 items-center">
        <img src={tipIcon} alt="tip icon" />
        <h1 className="text-3xl font-medium text-[color:var(--color-dark)]">
          توصیه های روزانه
        </h1>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={1}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {data.map((tip) => (
          <SwiperSlide key={data.indexOf(tip)}>
            <TipCard color={tip.color} text={tip.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
