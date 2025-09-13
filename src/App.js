import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Textforms from "./Textforms";
import Alert from "./Alert";
// import About from "./About";

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
      showAlert("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils2" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Textforms
          showAlert={showAlert}
          heading="Enter the text to analyze"
          mode={mode}
        />
      </div>
      {/* <div id = "about-section" className="container my-5">
        <About/>
      </div> */}
    </>
  );
}

export default App;
