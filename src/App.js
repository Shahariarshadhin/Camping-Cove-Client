
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import AddItem from './components/Add Item/AddItem';
import GearDetails from './components/GearDetails/GearDetails';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">

      <Header></Header>


      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/inventory' element={<Inventory></Inventory>}></Route> */}
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/gear/:gearId' element={<GearDetails></GearDetails>}></Route>
        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/inventory' element={

          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>


        }></Route>

      </Routes>
    </div>
  );
}

export default App;
