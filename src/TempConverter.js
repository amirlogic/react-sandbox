import React from "react";

import "./styles.css";

import { useState } from "react";

export default function TempConverter() {

  const [temp, setTemp] = useState("");

  const inputCelsius = (event) => {
    setTemp(event.target.value);
  };

  const inputFahr = (event) => {
    setTemp(((event.target.value - 32) * 5) / 9);
  };

  return (

    <div className="App">
      <div>
        Celcius:{" "}
        <input type="text" value={temp} onChange={inputCelsius} />
      </div>

      <div>
        Fahrenheit:{" "}
        <input type="text" value={(temp * 9) / 5 + 32} onChange={inputFahr} />
      </div>
    </div>

  );

}