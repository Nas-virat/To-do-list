
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



//import components
import Sidebar from "./components/Sidebar";



//import Screens
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    
  <Router>
    <Sidebar/>
    <Routes>
       <Route path="/*" element={<HomeScreen/>} />
       <Route path="/home" element={<HomeScreen/>} />
    </Routes>
  </Router>
  );
}

export default App;
