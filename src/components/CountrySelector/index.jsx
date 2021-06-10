import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";

function CountrySelector({ value, handleOnChange, countries }) {
  return (
    <FormControl>
      <InputLabel htmlFor="country-selector" shrink>
        Quốc gia
      </InputLabel>
      <NativeSelect
        value={value}
        onChange={handleOnChange}
        inputProps={{
          name: "country",
          id: "country-selector",
        }}
      >
        {countries.map((element) => (
          <option key={element.ISO2} value={element.ISO2.toLowerCase()}>
            {element.Country}
          </option>
        ))}
      </NativeSelect>
      <FormHelperText>
        You choose country to report display please!!!
      </FormHelperText>
    </FormControl>
  );
}

CountrySelector.propTypes = {};

export default CountrySelector;
