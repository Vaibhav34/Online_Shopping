import React,{Component} from "react";
import axios from "axios";

const backEndUrl = "http://localhost:8080"


function table_headers(){
    return <tr>
                         <th>Product name</th>
                         <th>Product price</th>
                        <th>Product quantity</th>
                    </tr>
}


class UserProductSearch extends Component{

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

// componentDidUpdate(){
//     axios.get("http://localhost:8080/productlist").then((res)=>{
//                     this.setState({result_array
//                     :res.data})
//             })
//             }



    render(){
        
        var uri = `http://localhost:8080/searchproduct/${this.state.prodName}`

        var ui=<div>
            
            <div>
            <button onClick={()=>{window.location="/"}}>Home</button>            
            </div> 
 
            <h3>Product Search</h3>

            <input type={'text'} placeholder="Search products" onChange={(e)=>{
                this.setState({prodName:e.target.value})
                if(e.target.value.length === 0){                  

                    axios.get("http://localhost:8080/productlist").then((res)=>{
                    this.setState({result_array
                    :res.data})

                    this.setState({})
            })

                }

                else{
                    axios.get(uri).then((res)=>{
                    this.setState({result_array
                    :res.data})

                    this.setState({})
            })  

                }

            }}/>   
                         
                 
            
            <button onClick={()=>{
                    axios.get(uri).then((res)=>{
                        this.setState({result_array:res.data})
                    })
            }}>Search</button>

            <table className = "table table-striped table-bordered">
                    <ul>                    
                    <tr>
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
                    </tr>
            })}
                                
                
                </ul>
                </table>
            
            


        </div>

        return ui

    }

}



export default UserProductSearch