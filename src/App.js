import { Route, Routes } from 'react-router-dom';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Home/Footer';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Home/Navbar';
import SideBar from './Pages/Home/SideBar';
import ThingsToDo from './Pages/ThingsToDo/ThingsToDo';

function App() {
  return (
    <div className="App lg:mx-28 bg-[#FFFFFF] text-[#777780]">
     <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/things' element={<ThingsToDo></ThingsToDo>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
      
    </div>
  );
}

export default App;
