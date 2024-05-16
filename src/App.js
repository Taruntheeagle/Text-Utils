// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';

// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setmode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message : message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1200);
  }

  const togglemode = ()=>{
    if(mode === 'light')
      {
        setmode('dark');
        document.body.style.backgroundColor = '#042743'
        showAlert("Swtiched to Dark Mode","success")
        document.title = "Text Utils - Dark Mode"
      }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Swtiched to Light Mode","success")
      document.title = "Text Utils"
    }
  }
  return (
    <>
      {/* <BrowserRouter>
        <Navbar
          title="Text Utils"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route exact path="/about" element={<About />}></Route>
            <Route
              exact path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter> */}

          <Navbar
          title="Text Utils"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />
        <div className="container my-4">
        <Textform
                  showAlert={showAlert}
                  heading="Enter Text to analyze "
                  mode={mode}
                />
                </div>


    </>

  );
}

export default App;
