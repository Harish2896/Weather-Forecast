import { useState, useContext } from "react";
import FilteredCountry from "../filtered-country/filtered-country.component";
import { searchCountryContext } from "../../contexts/search-country.context";

const SearchBox = () => {
  const { searchFields, setSearchFields } = useContext(searchCountryContext);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event);
  };
  const searchHandler = (event) => {
    const { value } = event.target;
    setSearchFields(value);
  };
  return (
    <div className="App">
      <h1>Weather forecast app</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          className="search-container"
          onChange={searchHandler}
          type="search"
          name="searchBox"
          id="searchBox"
          value={searchFields}
        />
        <label>
          <button type="submit">Search</button>
        </label>
      </form>
      <FilteredCountry textField={searchFields} />
    </div>
  );
};

export default SearchBox;
