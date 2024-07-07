import CityTemp from "./components/CityTemp";
import WeatherForecast from "./components/WeatherForecast";
import DarkModeProvider from "./context/DarkModeContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
   <DarkModeProvider>
      <AppLayout>
        <div className="container xl:max-w-screen-xl mx-auto">
          <WeatherForecast />
          
        </div>
      </AppLayout>
   </DarkModeProvider>

  );
}

export default App;
