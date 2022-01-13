import logo from './logo.svg';
import './App.css';

import { Link, Outlet } from 'react-router-dom';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {useHistory} from 'react';



import ProductList from './components/ProductList'


const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'blue'
}







function App(props) {

  // const history = useHistory()


return (

    <div>
     

      <div>
        <h2> Apna Bazaar</h2>
       </div>
     

     <div >      

     <nav className="header">
      <Link to="/search">Search</Link> 
       {/* <Link to={{pathname:'/login',state:history}} >Login</Link>  */}
       {/* <Link to="/login" style={linkStyle}>Login</Link>  */}

        <Link to ="/createproduct"  style={linkStyle}> Create Product </Link>

        {/* <Link to ="/updateproduct" style={linkStyle}> Update Product </Link> */}

       {/* <Link to="/registration" style={linkStyle}>SignUp</Link>        */}
     </nav>



     </div>



     <div className="App" >

     <Outlet/>
      
      {/* landing page */}
      <div> 
      <ProductList/>
      </div>



     </div>

        </div>
)
}

export default App;
