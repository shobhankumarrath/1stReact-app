import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
function App() {
  return (
    <>
     <Navbar title="textUtils" aboutText="About Us" homePage="Home"/>
     <div className='conatiner my-3'>
     <TextFrom heading="Enter the Text To Analize" />
    </div>
  </>
  );
}

export default App;
