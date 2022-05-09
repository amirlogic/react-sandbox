import React from "react";

import "./styles.css";

import { useReducer } from "react";

const initialState = { mode: "twoway", startdate: "", enddate: "" };

function reducer(state, action) {
  switch (action.type) {
    case "mode":
      return { mode: action.payload };
    case "startdate":
      return { startdate: action.payload };
    case "enddate":
      return { enddate: action.payload };
    default:
      throw new Error();
  }
}

export default function FlightBooking() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const isValidDate = (event) => {
    let indate = new Date(event.target.value);

    if (indate - Date.now() > 0) {
      console.log("Valid");
      return true;
    } else {
      console.log("Not Valid");
      return false;
    }
  };

  const changeMode = (event) => {
    dispatch({ type: "mode", payload: event.target.value });
    console.log(event.target.value);
  };

  const changeStartDate = (event) => {
    dispatch({ type: "startdate", payload: event.target.value });
    console.log(state.startdate);
  };

  const changeEndDate = (event) => {
    dispatch({ type: "enddate", payload: event.target.value });
    console.log(state.enddate);
  };

  return (
    <div className="App">
      <div>
        <select value={state.mode} onChange={changeMode}>
          <option value="twoway">Round trip</option>
          <option value="oneway">One way</option>
        </select>
      </div>

      <div>
        Departure: <input type="date" onChange={changeStartDate} />
      </div>

      {state.mode != "oneway" ? (
        <div>
          Return: <input type="date" onChange={changeEndDate} />
        </div>
      ) : (
        " "
      )}
    </div>
  );
}
