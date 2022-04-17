import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/CheckOut/CheckOut';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Menubar from './Components/Menubar/Menubar';
import PageError from './Components/PageError/PageError';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import Services from './Components/Services/Services';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/checkout' element={<RequireAuth><CheckOut></CheckOut></RequireAuth>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<PageError></PageError>}></Route>
      </Routes>
    </div>
  );
}

export default App;
