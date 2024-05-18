import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import Alert from './components/alert';
function App() 
{
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout (() => {
        setAlert(null);
    }, 1500);
  }
 const toggleMode = () => {
  if( mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
 }

  return (
    <>
     <Navbar title="textUtils" aboutText="About Us" homePage="Home" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className='conatiner my-3'>
     <TextFrom showAlert={showAlert} heading="Enter the Text To Analize" mode={mode} />
    </div>
  </>
  );
}   

export default App;
