import Header from './Header';
import './App.css';
import Home from './Home';

import {BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
  
    <Routes>
    
      
      <Route path="/login" element={ <Login />}/>
       
      <Route path="/checkout" element={<><Header/><Checkout /></>}/> 
       
        <Route path="/checkout" element={<Checkout />}/>
      
  
      <Route path="/" element={<><Header /><Home/></>}/>
        
      
      
      
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;
