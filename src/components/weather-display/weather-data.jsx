import cloud from "../../assets/cloud-notif.png";
import WeatherDetails from "./weather-details";

export default function WeatherData() {
  return (
    <div className="font-iranSans text-[color:var(--color-white)] font-light flex flex-col  gap-6 lg:gap-4 lg:w-[250px]">
      <div className="flex">
        <div>1403/02/02</div>
        <div className="mr-5">دوشنبه</div>
      </div>
      <h1 className="text-4xl lg:text-3xl">{"تهران"} در این لحظه</h1>
      <div className="flex justify-evenly w-full">
        <img src={cloud} alt="cloud" className="h-[40px]" />
        <div className="text-5xl lg:text-4xl">
          {30}°<span className="text-xl">c</span>
        </div>
      </div>
      <WeatherDetails />
    </div>
  );
}
