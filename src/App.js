import React, { useEffect, useState } from "react";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import { getCountries } from "./api";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;

      setCountries(data);
    });
  }, []);

  return (
    <div className="App">
      <CountrySelector countries={countries} />
      <Highlight />
      <Summary />
    </div>
  );
}

export default App;
