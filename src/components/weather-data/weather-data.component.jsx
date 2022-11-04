import { useEffect, useState } from "react";
import weatherCodeData from "../../WEATHER_CODE_DATA.json";

const WeatherData = ({ currentWeather }) => {
  const [weatherMsg, setWeatherMsg] = useState("");
  const { temperature, windspeed, winddirection, weathercode } = currentWeather;
  useEffect(() => {
    weatherCodeData.map((data) => {
      const newCode = parseInt(data.code);
      if (newCode === weathercode) {
        setWeatherMsg(data.message);
      }
      return data;
    });
  }, [weathercode]);

  return (
    <div>
      <h2>{`Weather condition: ${weatherMsg}`}</h2>
      <h2>{`Temperature: ${temperature} *C`}</h2>
      <h2>{`Wind direction: ${winddirection} deg`}</h2>
      <h2>{`Wind speed: ${windspeed} km/h`}</h2>
    </div>
  );
};

export default WeatherData;
