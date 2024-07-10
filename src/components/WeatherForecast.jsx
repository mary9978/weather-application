import { Line } from "react-chartjs-2";
import ForecastLogo from '/images/forecastIcon.svg';
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
  Legend,
} from "chart.js";
import { useState } from "react";
import TitleComponent from "./TitleComponent";
ChartJS.register(
  CategoryScale,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function WeatherForecast() {
  const [weatherInfo ,setWeatherInfo] = useState({
    labels:["8:00","9:00","10:00","11:00", "12:00", "13:00","14:00","15:00","16:00", "17:00", "18:00","19:00","20:00","21:00","22:00", "23:00","00:00"].slice(0,6),
    data:[30,33,35,37,32,29,27,26,22,21,19].slice(0,6)
  });
  const data = {
    labels: weatherInfo.labels,
    datasets: [
      {
        label: "Temprature",
        data: weatherInfo.data,
        fill: true,
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          let gradient = ctx.createLinearGradient(0, 0, 0, 400);
          gradient.addColorStop(0, "rgba(61, 85, 204, 0.5)");
          gradient.addColorStop(1, "rgba(61, 85, 204, 0.05)");
          return gradient;
        },
        borderColor: "rgb(75, 192, 192)",
        tension: 0.4,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
          display: false
      },
  },
  maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        max: 100,
        type: "linear",
      },
      x: [{
				scaleLabel: {
					display: false,
				}
			}]
    }
  };
  const handleUpdateData =()=>{
    setWeatherInfo({
      labels:["8:00","9:00","10:00","11:00", "12:00", "13:00","14:00","15:00","16:00", "17:00", "18:00","19:00","20:00","21:00","22:00", "23:00","00:00" ],
      data:[30,33,35,37,32,29,27,26,22,21,19,18,21,22,17,15,3]
    })
  }
  // const chartKey = "line";
  return (
    <div className="">
      <div className="pt-4">
        <TitleComponent icon={ForecastLogo} text={'پیش بینی ساعتی'}/>
      </div>
     
       <div className="w-full h-[390px] relative bg-white rounded-lg shadow-xl p-4">
        <div className="w-6 h-6 absolute right-4 top-1/2 rounded-full ring-2 ring-offset-1 ring-gray-400 cursor-pointer bg-[#3D55CC] flex items-center justify-center">
          <MdKeyboardArrowRight className="w-5 h-5 text-white" onClick={handleUpdateData}/>
        </div>
         <Line  data={data} options={options} />
       </div>
     
    </div>
  );
}

export default WeatherForecast;
