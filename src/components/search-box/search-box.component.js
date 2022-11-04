import { useState } from "react";
import FilteredCountry from "../filtered-country/filtered-country.component";

const SearchBox = () => {
  const [searchFields, setSearchFields] = useState("");
  const searchHandler = (event) => {
    const { value } = event.target;
    setSearchFields(value);
  };
  console.log(searchFields);
  return (
    <div className="App">
      <h1>Weather forecast app</h1>

      <input
        className="search-container"
        onChange={searchHandler}
        type="search"
        name="searchBox"
        id="searchBox"
        value={searchFields}
      />

      <FilteredCountry searchFields={searchFields} />
    </div>
  );
};

export default SearchBox;
