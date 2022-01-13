import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import UserProductSearch from "./UserProductSearch";

class UserProductList extends Component{
    constructor(props){

        super(props);
        this.state={

            prodName:"",
            result_array:[]

        };

    }
    
    componentDidMount(){
    axios.get("http://localhost:8080/productlist").then((res)=>{
                    this.setState({result_array
                    :res.data})
            })
            
            }


            render(){

                
                var ui = <div> 
                    <nav>
                        <Link to='/customerproductsearch' style={{textDecoration: 'none'}}> <h3>Product Search</h3></Link>
                    </nav>
               
                <table>
                    <ul>                    
                    <tr >
                        <th></th>
                         <th>Product name</th>
                         <th>Product price</th>
                        <th>Product quantity</th>
                    </tr>            
            {this.state.result_array.map((e)=>{
                
                return <tr>
                    <td><img src={require(`../../images/${e.prodId}.jpg`)} alt="buttery" width='100px' height='100px'/> </td>
                    <td>{e.prodName}</td>
                    <td>{e.prodPrice}</td>
                    <td>{e.prodQuantity}</td>
                    {/* <td>
                    <Link to ={update_url}> Update </Link>
                    </td>  */}
                    </tr>

                    

            })}
                                
                
                </ul>
                </table>

                </div>
                return ui
            }


}
export default UserProductList;




