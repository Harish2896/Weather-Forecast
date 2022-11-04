import { useState } from "react";
import WeatherAPI from "../../API/weather-api";
import data from "../../COUNTRY_LIST.json";

const FilteredCountry = ({ searchFields }) => {
  const [selectedCountry, setSelectedCountry] = useState({});

  const filteredCountry = data.filter((element) => {
    if (searchFields === "") {
      return element;
    } else {
      return element.country.toLowerCase().includes(searchFields);
    }
  });

  return (
    <div className="country-buttons-container">
      <h2>Country Names</h2>
      {filteredCountry.map((element) => {
        return (
          <button
            onClick={() => {
              setSelectedCountry(element);
            }}
            key={element.id}
          >
            {element.country}
          </button>
        );
      })}
      <WeatherAPI selectedCountry={selectedCountry} />
    </div>
  );
};

export default FilteredCountry;
