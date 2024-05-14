import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
function App() 
{
  const [mode, setMode] = useState('light');
 const toggleMode = () => {
  if( mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }
 }

  return (
    <>
     <Navbar title="textUtils" aboutText="About Us" homePage="Home" mode={mode} toggleMode={toggleMode}/>
     <div className='conatiner my-3'>
     <TextFrom heading="Enter the Text To Analize" mode={mode} toggleMode={toggleMode}/>
    </div>
  </>
  );
}   

export default App;
