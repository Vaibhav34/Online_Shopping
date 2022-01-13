import React, { Component } from 'react';
import ProductService from '../services/ProductService';

class CreateProduct extends Component {
    constructor(props){
        super(props)

        this.state = {
            prodName: '',
            prodId: '',
            prodQuantity:'',
            prodPrice:'',
            products:[],
            message:""
        }
        this.changeProdNameHandler = this.changeProdNameHandler.bind(this);
        this.changeProdIdHandler = this.changeProdIdHandler.bind(this);
        this.changeProdQuantityHandler = this.changeProdQuantityHandler.bind(this);
        this.changeProdPriceHandler = this.changeProdPriceHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }
    // componentDidMount(){



    //     ProductService.getProducts().then((res) =>{

    //         this.setState({products:res.data});

    //     });

    // }
    saveProduct = (e) => {
        e.preventDefault();
        // let product = {prodName: this.state.prodName,  prodId: this.state.prodId, prodPrice: this.state.prodPrice, prodQuantity: this.state.prodQuantity};
        // console.log('product => ' + JSON.stringify(product));
        // ProductService.createProduct(product);



        // if(this.state.prodName==="" && this.state.prodId==="" && this.state.prodPrice==="" && this.state.prodQuantity===""){
        if((this.state.prodName).length==0) {

            this.setState({message:"please fill textbox"})

        }
        else if ((this.state.prodQuantity).length==0){

            this.setState({message:"please fill textbox"})

        }

        else if ((this.state.prodId).length==0){

            this.setState({message:"please fill textbox"})

        }

        else if ((this.state.prodPrice).length==0){

            this.setState({message:"please fill textbox"})

        }

        else{

            let product = {prodName: this.state.prodName,  prodId: this.state.prodId, prodPrice: this.state.prodPrice, prodQuantity: this.state.prodQuantity};

        console.log('product => ' + JSON.stringify(product));

        ProductService.createProduct(product);

            this.setState({message:"Added"})
            window.location='/adminproductlist'

        }

        
            // ProductService.createProduct(product).then(res =>{
            //     this.props.history.push("/login");
            // });
        
    }
    
    
    changeProdNameHandler= (event) => {
        this.setState({prodName: event.target.value});
    }

    changeProdPriceHandler= (event) => {
        this.setState({prodPrice: event.target.value});
    }

    changeProdQuantityHandler= (event) => {
        this.setState({prodQuantity: event.target.value});
    }
    changeProdIdHandler= (event) => {
        this.setState({prodId: event.target.value});
    }

    // cancel(){
    //     this.props.history.push('/product');
    // }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Prod Name: </label>
                                            <input placeholder="Prod Name" name="prodName" className="form-control" 
                                                value={this.state.prodName} onChange={this.changeProdNameHandler} required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Id: </label>
                                            <input placeholder="Prod Id" name="prodId" className="form-control" 
                                                value={this.state.prodId} onChange={this.changeProdIdHandler} required pattern="[0-9]*"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Quantity: </label>
                                            <input placeholder="Prod Quantity" name="prodQuantity" className="form-control" 
                                                value={this.state.prodQuantity} onChange={this.changeProdQuantityHandler} required pattern="[0-9]*"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Price: </label>
                                            <input placeholder="Prod Price" name="prodPrice" className="form-control" 
                                                value={this.state.prodPrice} onChange={this.changeProdPriceHandler} required pattern="[0-9]*"/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveProduct}
    
                                        >Save</button>
                                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                        
                                    </form>
                                    {this.state.message}
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateProduct;