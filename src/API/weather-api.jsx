import { useState } from "react";

const WeatherAPI = () => {
  const [temperature, setTemperature] = useState("");
  const weatherData = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current_weather=true`
    );
    const { current_weather } = await response.json();
    console.log(current_weather);
    setTemperature(current_weather.temperature);
  };
  weatherData();
  return (
    <div>
      <h2>Temperature:{temperature}</h2>
    </div>
  );
};

export default WeatherAPI;
