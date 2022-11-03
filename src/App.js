import "./App.scss";
import SearchBox from "./components/search-box/search-box.component";
import WeatherAPI from "./API/weather-api.jsx";

function App() {
  return (
    <div>
      <SearchBox />;
      <WeatherAPI />
    </div>
  );
}

export default App;
