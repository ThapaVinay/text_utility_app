
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = (m) => {
    if (m === 'blue') {
      setMode('blue');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode with blue background has been enabled ", "success")
    }
    else if (m === 'grey') {
      setMode('grey');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode with grey background has been enabled ", "success")
    }
    else if (m === 'green') {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode with green background has been enabled ", "success")
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "success")
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtility" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">

          {/* USED IN react-router-dom 5 */}
          {/* <Router>
            <Switch>
              <Route exact path = "/about">
                <About/>
              </Route>
            </Switch>
        </Router> */}

          <Routes>
            
            <Route exact path="/text_utility_app" element={<TextForm showAlert={showAlert} heading=" TextUtils - Word Counter, Character Counter" mode={mode} />} />
            <Route exact path="/text_utility_app/about" element={<About mode = {mode}/>} />

          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;






// "homepage" : "https://ThapaVinay.github.io/text_utility_app" ,

