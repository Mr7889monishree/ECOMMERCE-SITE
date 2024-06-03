import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import axios from 'axios'
import Login from './Pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL="http://localhost:3500";
axios.defaults.withCredentials=true;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Shop/>}></Route>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
        <Route path='/womens' element={<ShopCategory  banner={women_banner} category="women"/>}></Route>
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>}></Route>

        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}></Route>
        </Route>
        <Route path='/Cart' element={<Cart/>}></Route>

        <Route path='/signuppage' element={<LoginSignup/>}></Route>
        <Route path='/loginpage' element={<Login/>}></Route>


      </Routes>
      </BrowserRouter>

      <Footer/>


    </div>
  );
}

export default App;
