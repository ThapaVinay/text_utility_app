
import React,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');  // whether dark mode is enabled
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      message : message,
      type : type
    })
    setTimeout( () => {
      setAlert(null)
    },2000);
  }

  const toggleMode = (m) => {
    if(m === 'blue')
    {
      setMode('blue');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode with blue background has been enabled ", "success")
    }
    else if(m === 'grey')
    {
      setMode('grey');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode with grey background has been enabled ", "success")
    }
    else if(m === 'green')
    {
      setMode('green');
      document.body.style.backgroundColor = 'green';
      showAlert("Dark mode with green background has been enabled ", "success")
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled ", "success")
    }
  }

  return (
    <>
      <Navbar title="TextUtility" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert} />
      <div className="container my-3">
        <TextForm showAlert = {showAlert} heading = "Enter The Text To Analyse " mode = {mode}/>
      </div>
    </>
  );
}

export default App;
