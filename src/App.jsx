import DailyTips from "./components/daily-tips/daily-tips";
import OtherCityTemp from "./components/OtherCityTemp";
import WeaklyWeather from "./components/WeaklyWeather";
import WeatherDisplay from "./components/weather-display/weather-display";
import WeatherForecast from "./components/WeatherForecast";
import DarkModeProvider from "./context/DarkModeContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
   <DarkModeProvider>
      <AppLayout>
         <WeatherDisplay/>
        <div className="container xl:max-w-screen-xl mx-auto">    
          <WeatherForecast />
          <WeaklyWeather/>
          <DailyTips/>
          <OtherCityTemp/>
        </div>
      </AppLayout>
   </DarkModeProvider>

  );
}

export default App;
