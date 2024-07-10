import WeatherData from "./weather-data";
import cloudy from "../../assets/cloudy.png";

export default function WeatherDisplay() {
  return (
    <div className="flex flex-col lg:flex-row-reverse justify-evenly lg:items-center text-[#fff] bg-[color:var(--color-primary-1)] p-10 md:p-32 lg:py-10 lg:px-0 mx-auto max-w-screen lg:bg-hero-bg lg:bg-cover">
      <img src={cloudy} alt="cloudy" className="max-h-[360px] lg:invisible"/>
      <WeatherData />
    </div>
  );
}
