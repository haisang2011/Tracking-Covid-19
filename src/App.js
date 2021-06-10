import React, { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries, getReportByCountry } from "./api";
import { sortBy } from "lodash";

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("vn");
  const [report, setReport] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const dataSort = sortBy(data, (o) => o.Country);
      // const seleted = dataSort[0].ISO2.toLowerCase();

      // setSelectedCountry(seleted);
      setCountries(dataSort);
    });
  }, []);

  useEffect(() => {
    if (countries.length !== 0 && selectedCountry) {
      const { Slug } = countries.find(
        (country) => country.ISO2.toLowerCase() === selectedCountry
      );

      getReportByCountry(Slug)
        .then((res) => {
          setReport(res);
        })
        .catch((err) => console.log(err));
    }
  }, [countries, selectedCountry]);

  const handleOnChange = (e) => {
    const { value } = e.target;

    setSelectedCountry(value);
  };

  return (
    <div className="App">
      <CountrySelector
        countries={countries}
        handleOnChange={handleOnChange}
        value={selectedCountry}
      />
      <Highlight />
      <Summary country={report} />
    </div>
  );
}

export default App;
