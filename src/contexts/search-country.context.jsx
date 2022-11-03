import { createContext, useState } from "react";

export const searchCountryContext = createContext({
  searchFields: "",
  setSearchFields: () => null,
});

const SearchCountryProvider = ({ children }) => {
  const [searchFields, setSearchFields] = useState("");
  const value = {
    searchFields,
    setSearchFields,
  };
  return (
    <searchCountryContext.Provider value={value}>
      {children}
    </searchCountryContext.Provider>
  );
};

export default SearchCountryProvider;
