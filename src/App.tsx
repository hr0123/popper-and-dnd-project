import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Input } from "./Components/Input/input";
import { PopperContainer } from "./Components/Popper";

function App() {
  const [popperOpen, setPopperOpen] = React.useState(false);

  return (
    <>
      <Input setPopperOpen={setPopperOpen} />
      <div>{popperOpen ? <PopperContainer /> : null}</div>
    </>
  );
}

export default App;
