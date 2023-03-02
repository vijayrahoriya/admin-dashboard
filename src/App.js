import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";
import Productlist from "./pages/productlist/Productlist";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newproduct/NewProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Topbar/>
        <div className="container">
          <Sidebar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<UserList/>}/>
            <Route path="/user/:userId" element={<User/>}/>
            <Route path="/newUser" element={<Newuser/>}/>
            <Route path="/products" element={<Productlist/>}/>
            <Route path="/product/:productId" element={<Product/>}/>
            <Route path="/newproduct" element={<NewProduct/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
