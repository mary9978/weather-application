import TipCard from "./tip-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./carousel.css";
import TitleComponent from "../TitleComponent";
import icon from '/images/task-square.svg';
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
    <div className=" text-[color:var(--color-dark)]">
      <TitleComponent icon={icon} text={'توصیه های روزانه'}/>
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
