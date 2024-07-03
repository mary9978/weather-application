import cloud from "../../assets/cloud-notif.png";
import WeatherDetails from "./weather-details";

export default function WeatherData() {
  return (
    <div className="font-iranSans text-[color:var(--color-white)] font-light flex flex-col items-end gap-6">
      <div className="flex justify-end">
        <div className="mr-5">1403/02/02</div>
        <div>دوشنبه</div>
      </div>
      <h1 className="text-4xl text-right">{"تهران"} در این لحظه</h1>
      <div className="flex justify-evenly w-full">
        <div className="text-5xl">
          {30}°<span className="text-xl">c</span>
        </div>
        <img src={cloud} alt="cloud" className="h-[40px]" />
      </div>
      <WeatherDetails />
    </div>
  );
}
