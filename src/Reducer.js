import React, { useReducer } from "react";

// fancy logic to make sure the number is between 0 and 255
const limitRGB = num => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const initialState = { r: 0, g: 0, b: 0 };

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

const GreenComponent = props => {
  const { action, state } = props;
  return (
    <div>
      <span>g : {state.g} </span>
      <button onClick={() => action({ type: "INCREMENT_G" })}>➕</button>
      <button onClick={() => action({ type: "DECREMENT_G" })}>➖</button>
    </div>
  );
};

const RedComponent = props => {
  const { action, state } = props;
  return (
    <div>
      <span>r : {state.r} </span>
      <button onClick={() => action({ type: "INCREMENT_R" })}>➕</button>
      <button onClick={() => action({ type: "DECREMENT_R" })}>➖</button>
    </div>
  );
};

const BlueComponent = props => {
  const { action, state } = props;
  return (
    <div>
      <span>b : {state.b} </span>
      <button onClick={() => action({ type: "INCREMENT_B" })}>➕</button>
      <button onClick={() => action({ type: "DECREMENT_B" })}>➖</button>
    </div>
  );
};

const ReducerComponent = () => {
  const [{ r, g, b }, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1 style={{ color: `rgb(${r}, ${g}, ${b}` }}>useReducer Example</h1>
      <RedComponent action={dispatch} state={{ r, g, b }} />
      <GreenComponent action={dispatch} state={{ r, g, b }} />
      <BlueComponent action={dispatch} state={{ r, g, b }} />
    </div>
  );
};

export default ReducerComponent;
