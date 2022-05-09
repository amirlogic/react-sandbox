import React from "react";

import "./styles.css";

import { useReducer } from "react";

const initialState = { mode: "twoway" };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export default function FlightBooking() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const inputCelsius = (event) => {
    setTemp(event.target.value);
  };

  const inputFahr = (event) => {
    setTemp(((event.target.value - 32) * 5) / 9);
  };

  return (
    <div className="App">
      <div>
        <select value={state.mode} onChange={inputCelsius}>
          <option value="twoway">Round trip</option>
          <option value="oneway">One way</option>
        </select>
      </div>

      <div>
        <input type="text" value={(temp * 9) / 5 + 32} onChange={inputFahr} />
      </div>
    </div>
  );
}
