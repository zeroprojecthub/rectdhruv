// import logo from './logo.svg';
import './App.css';
import Category from './component/Category';
import Home from './component/Home';
// import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import {Route,Routes} from 'react-router-dom'
import Song from './component/Song';
import PlayMusic from './component/PlayMusic';
function App() {
 
  return (
    <div className='flexy'>
        <Sidebar/>
        <Routes>
        <Route path="/" element={ <Home/> } />
        
        <Route path="/Category" element={ <Category/> } />
        <Route path="/Song" element={ <Song/> } />
        <Route path="/PlayMusic" element={ <PlayMusic/> } />
        
        </Routes>
        
    </div>
  );
}

export default App;
