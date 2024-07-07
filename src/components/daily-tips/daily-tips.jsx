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
    <div className="px-[0] lg:px-[40px] text-[color:var(--color-dark)]">
      <div className="flex p-[20px] pb-0 gap-3 items-center">
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.24 15.7601C21.24 14.9317 21.9116 14.2601 22.74 14.2601H33.24C34.0684 14.2601 34.74 14.9317 34.74 15.7601C34.74 16.5886 34.0684 17.2601 33.24 17.2601H22.74C21.9116 17.2601 21.24 16.5886 21.24 15.7601Z"
            fill="var(--color-dark)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8207 11.6995C18.4065 12.2853 18.4065 13.235 17.8207 13.8208L13.3207 18.3208C12.7349 18.9066 11.7851 18.9066 11.1993 18.3208L9.69935 16.8208C9.11356 16.235 9.11356 15.2853 9.69935 14.6995C10.2851 14.1137 11.2349 14.1137 11.8207 14.6995L12.26 15.1388L15.6993 11.6995C16.2851 11.1137 17.2349 11.1137 17.8207 11.6995Z"
            fill="var(--color-dark)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M21.24 29.7601C21.24 28.9317 21.9116 28.2601 22.74 28.2601H33.24C34.0684 28.2601 34.74 28.9317 34.74 29.7601C34.74 30.5886 34.0684 31.2601 33.24 31.2601H22.74C21.9116 31.2601 21.24 30.5886 21.24 29.7601Z"
            fill="var(--color-dark)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8207 25.6995C18.4065 26.2853 18.4065 27.235 17.8207 27.8208L13.3207 32.3208C12.7349 32.9066 11.7851 32.9066 11.1994 32.3208L9.69935 30.8208C9.11356 30.235 9.11356 29.2853 9.69935 28.6995C10.2851 28.1137 11.2349 28.1137 11.8207 28.6995L12.26 29.1388L15.6993 25.6995C16.2851 25.1137 17.2349 25.1137 17.8207 25.6995Z"
            fill="var(--color-dark)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.18934 4.18946C6.85828 1.52052 10.8521 0.500122 16 0.500122H28C33.1479 0.500122 37.1417 1.52052 39.8107 4.18946C42.4796 6.8584 43.5 10.8522 43.5 16.0001V28.0001C43.5 33.1481 42.4796 37.1418 39.8107 39.8108C37.1417 42.4797 33.1479 43.5001 28 43.5001H16C10.8521 43.5001 6.85828 42.4797 4.18934 39.8108C1.5204 37.1418 0.5 33.1481 0.5 28.0001V16.0001C0.5 10.8522 1.5204 6.8584 4.18934 4.18946ZM6.31066 6.31078C4.4796 8.14184 3.5 11.1481 3.5 16.0001V28.0001C3.5 32.8522 4.4796 35.8584 6.31066 37.6895C8.14172 39.5205 11.1479 40.5001 16 40.5001H28C32.8521 40.5001 35.8583 39.5205 37.6893 37.6895C39.5204 35.8584 40.5 32.8522 40.5 28.0001V16.0001C40.5 11.1481 39.5204 8.14184 37.6893 6.31078C35.8583 4.47972 32.8521 3.50012 28 3.50012H16C11.1479 3.50012 8.14172 4.47972 6.31066 6.31078Z"
            fill="var(--color-dark)"
          />
        </svg>
        <h1 className="text-3xl font-medium">توصیه های روزانه</h1>
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
