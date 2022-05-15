import React from "react";

import "./styles.css";

import { useReducer } from "react";

const initialState = { mode: "twoway", startdate: "", enddate: "" };

function reducer(state, action) {
  switch (action.type) {
    case "mode":
      return { ...state, mode: action.payload };
    case "startdate":
      return { ...state, startdate: action.payload };
    case "enddate":
      return { ...state, enddate: action.payload };
    default:
      throw new Error();
  }
}

const isValidDate = (datestr) => {
  let indate = new Date(datestr);
  console.log(indate);

  if (indate - Date.now() > 0) {
    console.log("Valid");
    return true;
  } else {
    console.log("Not Valid");
    return false;
  }
};

export default function FlightBooking() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeMode = (event) => {
    dispatch({ type: "mode", payload: event.target.value });
    if (event.target.value === "oneway") {
      dispatch({ type: "enddate", payload: "" });
    }
    console.log(event.target.value);
    //endIsValid = isValidDate(event.target.value);
  };

  const changeStartDate = (event) => {
    dispatch({ type: "startdate", payload: event.target.value });
    console.log(state.startdate);
    //startIsValid = isValidDate(event.target.value);
  };

  const changeEndDate = (event) => {
    dispatch({ type: "enddate", payload: event.target.value });
    console.log(state.enddate);
  };

  const greenLight = () => {
    if (state.mode === "oneway") {
      return isValidDate(state.startdate);
    } else {
      return (
        isValidDate(state.startdate) &&
        isValidDate(state.enddate) &&
        Date.parse(state.startdate) < Date.parse(state.enddate)
      );
    }
  };

  return (
    <div className="App">
      <div style={{ padding: "10px" }}>
        <select value={state.mode} onChange={changeMode}>
          <option value="twoway">Round trip</option>
          <option value="oneway">One way</option>
        </select>
      </div>

      <div style={{ padding: "10px" }}>
        Departure:{" "}
        <input
          type="date"
          style={
            isValidDate(state.startdate) ? {} : { border: "2px solid red" }
          }
          onChange={changeStartDate}
        />
      </div>

      {state.mode !== "oneway" ? (
        <div style={{ padding: "10px" }}>
          Return:{" "}
          <input
            type="date"
            style={
              isValidDate(state.enddate) ? {} : { border: "2px solid red" }
            }
            onChange={changeEndDate}
          />
        </div>
      ) : (
        " "
      )}

      <div style={{ padding: "10px" }}>
        <button disabled={greenLight() ? false : true} onClick={() => {}}>
          Submit
        </button>
      </div>
    </div>
  );
}
