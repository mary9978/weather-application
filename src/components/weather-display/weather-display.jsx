import WeatherData from "./weather-data";
import cloudy from "../../assets/cloudy.png";

export default function WeatherDisplay() {
  return (
    <div className="h-screen flex flex-col justify-evenly light-mode:--color-primary bg-[color:var(--color-primary-1)] p-10 mx-auto">
      <img src={cloudy} alt="cloudy" className="max-h-[360px]"/>
      <WeatherData />
    </div>
  );
}
