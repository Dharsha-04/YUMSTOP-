
import './App.css';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipies from './component/Recipies';

import Navbar from './component/Navbar';
import Bevarage from './component/Bevarage';
import Burgers from './component/Burgers';
import Desserts from './component/Desserts';
import Italian from './component/Italian';
import Mexican from './component/Mexican';
import Snacks from './component/Snacks';
import Street from './component/Street';

import Added from './component/Added';
import Recipeadded from './component/Recipeadded';
import Menu from './component/Menu';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipes' element={<Recipies/>} />
        <Route path='/bevrages' element={<Bevarage/>} />
        <Route path='/burgers' element={<Burgers/>}/>
        <Route path='/desserts' element={<Desserts/>} />
        <Route path='/streetfood' element={<Street/>} />
        <Route path='/italian' element={<Italian/>}/>
        <Route path='/mexican' element={<Mexican/>}/>
        <Route path='/snacks' element={<Snacks/>} /> 
        <Route path='/added' element={<Added/> }/>
        <Route path='/recipesadded' element={<Recipeadded />} />
        <Route path='/menu/' element={<Menu/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
