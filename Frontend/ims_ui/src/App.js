// import './App.css';
import Home from './Components/Home/index';
import Login from'./Components/Login/index';
import Items from './Components/Pages/Items/index';
import Maintenance from './Components/Pages/Maintenance/index';
import Scrap from './Components/Pages/Scrap/index';
import Resell from './Components/Pages/Resell/index';
import Reports from './Components/Pages/Reports/index';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'> 
            <Route index element = {<Home/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='items' element={<Items/>}/>
            <Route path='maintenance' element={< Maintenance/>}/>
            <Route path='scrap' element={<Scrap/>}/>
            <Route path='resell' element={<Resell/>}/>
            <Route path='reports' element={<Reports/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
