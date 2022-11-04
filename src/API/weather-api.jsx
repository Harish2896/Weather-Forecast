import { useEffect, useState } from "react";
import WeatherData from "../components/weather-data/weather-data.component";

const WeatherAPI = ({ selectedCountry }) => {
  const [weatherData, setWeatherData] = useState({});

  const fetchWeatherData = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedCountry.latitude}&longitude=${selectedCountry.longitude}&hourly=temperature_2m&current_weather=true`
    );
    const { current_weather } = await response.json();
    setWeatherData(current_weather);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [selectedCountry]);
  return weatherData && <WeatherData currentWeather={weatherData} />;
};

export default WeatherAPI;
