import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About_pg from './Components/About_pg';
import Stacks from './Components/Stacks';


function App() {
  return (
    
  <div className=' flex flex-col bg-[#1E1E1E] overflow-x-hidden'>
  <div className=' container lg:-px-20 '>
    <Nav/>
    <Hero/>
    <About_pg />
    <Stacks />
  </div>
    

  </div>
   

    
  
      
    
  );
}

export default App;
