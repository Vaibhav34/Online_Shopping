/* eslint-disable react/jsx-no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import reportWebVitals from './reportWebVitals';
import UpdateProducts from './components/UpdateProducts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductService from './services/ProductService';
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ProductSearch from "./components/ProductSearch";
import ProfileView from "./components/ProfilePage";
import CreateProduct from './components/CreateProduct';
import BaseLocation from './components/BaseLocation';
import ProductList from './components/ProductList';
import UserProductList from './components/User/UserProductList';
import UserProductSearch from './components/User/UserProductSearch';
import AdminLoginPage from './components/Admin/AdminLoginPage';

// import DeleteProduct from './components/DeleteProduct'


ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
   <Routes>
   {/* <Route path ="/" element ={<BaseLocation/>}>
   
   <Route path="/user" element={<RegisterPage/>}>
      <Route path="/login" element={<LoginPage/>}>
      <Route path="/profile/:user"  element={<ProfileView/>}/>
      <Route path="/customerproductlist" element={<UserProductList/>}/>
      <Route path="/customerproductsearch" element={<UserProductSearch/>}/>
      </Route>
   </Route>

   <Route path="/adminlogin" element={<AdminLoginPage/>}>
    <Route path="/adminproductlist" element={<ProductList/>}>
    <Route path="/search" element={<ProductSearch/>}/>  
    <Route path="/updateproduct/:prodName" element={<UpdateProducts/>}/>
    <Route path="/createproduct" element={<CreateProduct/>}/>
    </Route>
    

   </Route>


   </Route> */}



    <Route path="/search" element={<ProductSearch/>}/>
    <Route path="/adminproductlist" element={<ProductList/>}/>
    <Route path="/customerproductlist" element={<UserProductList/>}/>
    <Route path="/registration" element={<RegisterPage/>}/>
    <Route path="/profile/:user"  element={<ProfileView/>}/>
    <Route path="/createproduct" element={<CreateProduct/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/updateproduct/:prodName" element={<UpdateProducts/>}/>
      
    <Route path="/customerproductsearch" element={<UserProductSearch/>}/>
    <Route path="/adminlogin" element={<AdminLoginPage/>}/>


      
      
    <Route path ="/admin" element ={<App/>}/>
    <Route path ="/" element ={<BaseLocation/>}>
    <Route path="/user" element={<RegisterPage/>}/>

      {/* <Route path ="/addproduct" element={<ListofProducts/>}/> 
     <Route path ="/updateproduct" element={<UpdateProducts/>}/> 
      <Route path ="/deleteproduct" element={<DeleteProduct/>}/> */}
  </Route>
      
   </Routes>
   </BrowserRouter>
   {/* <App/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
