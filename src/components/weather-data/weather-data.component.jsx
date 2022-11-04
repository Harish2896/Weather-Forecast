import { useEffect, useState } from "react";
import weatherCodeData from "../../WEATHER_CODE_DATA.json";
import { Card } from "react-bootstrap";

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
      <h5>{`Weather condition: ${weatherMsg}`}</h5>
      <h5>{`Temperature: ${temperature} *C`}</h5>
      <h5>{`Wind direction: ${winddirection} deg`}</h5>
      <h5>{`Wind speed: ${windspeed} km/h`}</h5>
    </div>
  );
};

export default WeatherData;
