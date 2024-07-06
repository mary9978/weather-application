import WeatherForecast from "./components/WeatherForecast"
import AppLayout from "./pages/AppLayout"

function App() {
  return (
    <div>
      <AppLayout>
      <div className="container h-screen xl:max-w-screen-xl">
      <WeatherForecast/>
      </div>
      </AppLayout>
    </div>
  )
}

export default App
