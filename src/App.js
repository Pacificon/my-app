import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);
  const [mode, setMode] = useState('light');//whether dark mode is enables or not

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark Mode has been enabled", "success");
  //   }
  //   else {
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Light Mode has been enabled", "success");
  //   }

  // }
  const toggleBlue = () => {
    if (mode !== 'blue')
      setMode('blue')
    document.body.style.backgroundColor = "blue";
    showAlert("Blue Mode has been enabled", "success");
    document.title = "Taskman-Blue Mode";
  }
  const toggleYellow = () => {
    if (mode !== 'yellow')
      setMode('yellow')
    document.body.style.backgroundColor = "yellow";
    showAlert("Yellow Mode has been enabled", "success");
    document.title = "Taskman-Yellows Mode";
  }
  const toggleGreen = () => {
    if (mode !== 'green')
      setMode('green')
    document.body.style.backgroundColor = "green";
    showAlert("Green Mode has been enabled", "success");
    document.title = "Taskman-Green Mode";
  }
  const toggleDark = () => {
    if (mode !== 'grey')
      setMode('grey')
    document.body.style.backgroundColor = "grey";
    showAlert("Grey Mode has been enabled", "success");
    document.title = "Taskman-Grey Mode";
    // setInterval(() => {
    //   document.title = 'Taskman is amazing'; bad practice 
    // }, 2000);
    // setInterval(() => {
    //   document.title = 'Install taskman now';
    // }, 1500);

  }
  const toggleRed = () => {
    if (mode !== 'red')
      setMode('red')
    document.body.style.backgroundColor = "red";
    showAlert("Red Mode has been enabled", "success");
    document.title = "Taskman-Red Mode";
    setInterval(() => {
      document.title = 'Taskman is amazing';
    }, 2000);
    setInterval(() => {
      document.title = 'Install taskman now';
    }, 1500);
  }
  const toggleCyan = () => {
    if (mode !== 'cyan')
      setMode('cyan')
    document.body.style.backgroundColor = "cyan";
    showAlert("Cyan Mode has been enabled", "success");
    document.title = "Taskman-Cyan Mode";
    setInterval(() => {
      document.title = 'Taskman is amazing';
    }, 2000);
    setInterval(() => {
      document.title = 'Install taskman now';
    }, 1500);
  }
  const toggleLight = () => {
    if (mode !== 'white')
      setMode('white')
    document.body.style.backgroundColor = "white";
    showAlert("Light Mode has been enabled", "success");
    document.title = "Taskman-White Mode";

  }
  const toggleBlack = () => {
    if (mode !== 'black')
      setMode('black')
    document.body.style.backgroundColor = "black";
    showAlert("Black Mode has been enabled", "success");
    document.title = "Taskman-Black Mode";
  }
  return (
    <>{/* this is called fragment */}
      {/* <Navbar title="Taskman2" aboutText="about Taskman1 " /> */}
      <Router>
        <Navbar title="Taskman" mode={mode} toggleBlack={toggleBlack} toggleLight={toggleLight} toggleCyan={toggleCyan} toggleBlue={toggleBlue} toggleYellow={toggleYellow} toggleGreen={toggleGreen} toggleDark={toggleDark} toggleRed={toggleRed} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about">
              element={<About />}
            </Route>
            <Route exact path="/">
              element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />}
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
