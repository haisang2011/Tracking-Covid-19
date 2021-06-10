import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const generateOptions = (country) => {
  const categories = country.data.map((item) => item.Date);

  return {
    chart: {
      height: 500,
    },

    title: {
      text: "My chart",
    },

    xAxis: {
      categories: categories,
      crosshair: true,
    },

    colors: ["red"],

    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      labels: {
        align: "right",
      },
    },

    tooltip: {},

    series: [
      {
        name: "tong ca nhiem",
        data: country.data.map(),
      },
    ],
  };
};
function Hightlight({ country }) {
  const [options, setOptions] = useState({});
  console.log({ country });
  useEffect(() => {
    if (country && country.data && country.data.length !== 0) {
      setOptions(generateOptions(country));
    }
  }, [country]);

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        allowChartUpdate
        options={options}
      />
    </div>
  );
}

Hightlight.propTypes = {};

export default Hightlight;
