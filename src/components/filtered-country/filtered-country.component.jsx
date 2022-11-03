import data from "../../COUNTRY_LIST.json";
import { searchCountryContext } from "../../contexts/search-country.context";
import { useContext } from "react";

const FilteredCountry = ({ textField }) => {
  const { searchFields, setSearchFields } = useContext(searchCountryContext);

  const filteredCountry = data.filter((element) => {
    if (textField === "") {
      return element;
    } else {
      return element.country.includes(textField);
    }
  });

  const onClickHandler = (event) => {
    setSearchFields(event.target.textContent);
  };

  return (
    <div className="country-buttons-container">
      {filteredCountry.map((element) => {
        return (
          <button onClick={onClickHandler} key={element.id}>
            {element.country}
          </button>
        );
      })}
    </div>
  );
};

export default FilteredCountry;
