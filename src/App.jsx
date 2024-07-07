import DailyTips from "./components/daily-tips/daily-tips";
import WeatherDisplay from "./components/weather-display/weather-display";
import WeatherForecast from "./components/WeatherForecast";
import DarkModeProvider from "./context/DarkModeContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
   <DarkModeProvider>
      <AppLayout>
        <div className="container xl:max-w-screen-xl mx-auto">
          <WeatherDisplay/>
          <WeatherForecast />
          <DailyTips/>
        </div>
      </AppLayout>
   </DarkModeProvider>

  );
}

export default App;
