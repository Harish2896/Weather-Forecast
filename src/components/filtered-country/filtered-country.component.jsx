import { useState } from "react";
import WeatherAPI from "../../API/weather-api";
import data from "../../COUNTRY_LIST.json";
import { Button, ButtonGroup, Card } from "react-bootstrap";

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
    <div>
      <Card.Title>Choose the city</Card.Title>
      <ButtonGroup size="sm">
        {filteredCountry.map((element) => {
          return (
            <Button
              variant="secondary"
              onClick={() => {
                setSelectedCountry(element);
              }}
              key={element.id}
            >
              {element.country}
            </Button>
          );
        })}
      </ButtonGroup>
      <WeatherAPI selectedCountry={selectedCountry} />
    </div>
  );
};

export default FilteredCountry;
