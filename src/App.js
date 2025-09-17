import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Textforms from "./Textforms";
import Alert from "./Alert";
import About from "./About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000000e2";
      document.body.classList.add("dark");
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.classList.remove("dark");
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textforms
                showAlert={showAlert}
                heading="Try TextUtils - Word Counter, Character counter, Remove Extra Spaces"
                mode={mode}
              />
            </Route>
            <Route path="/About">
              <About mode={mode}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
