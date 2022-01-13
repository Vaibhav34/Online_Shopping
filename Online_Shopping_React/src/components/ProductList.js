import React,{Component} from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import { display } from '@mui/system';
import Box from '@mui/material/Box';

class ProductList extends Component{
    constructor(props){

        super(props);
        this.state={

            prodName:"",
            result_array:[]

        };

    }

    // very good component
    componentDidUpdate(){
    axios.get("http://localhost:8080/productlist").then((res)=>{
                    this.setState({result_array
                    :res.data})
            })
            }

    
    componentDidMount(){
    axios.get("http://localhost:8080/productlist").then((res)=>{
                    this.setState({result_array
                    :res.data})
            })
            }


            render(){

                
                var ui = <div className="row"> 
                <button onClick={""}>Log Out</button>
                               
                <Box component="div" sx={{ display: 'inline' }}>inline               
                <table className = "table table-striped table-bordered">
                    <ul>                    
                    <tr>
                        <th></th>
                         <th>Product name</th>
                         <th>Product price</th>
                        <th>Product quantity</th>
                        <th></th>

                    </tr>            
            {this.state.result_array.map((e1)=>{
                var update_url = `/updateproduct/${e1.prodId}`
                var prodName = `${e1.prodName}`

                var delete_url = `/deleteproduct/${e1.prodName}`
                return <tr>
                    <td><img src={require(`../images/${e1.prodId}.jpg`)} alt="buttery" width='100px' height='100px'/> </td>
                    <td>{e1.prodName}</td>
                    <td>{e1.prodPrice}</td>
                    <td>{e1.prodQuantity}</td>
                    <td>
                    <button><Link to ={update_url} style={{ textDecoration: 'none' }}> Update </Link> </button>
                    
                  
                    <button onClick={(e)=>{
                        axios.delete("http://localhost:8080"+delete_url)
                        alert(prodName+" successfully deleted")
                        
                    }}> Delete</button> </td>                 
                                     

                    </tr>

                    

            })}
                                
                
                </ul>
                </table>
                </Box>
                </div>
                return ui
            }


}
export default ProductList;




