import React, { Component } from 'react';
import ProductService from '../services/ProductService';


class UpdateProducts extends Component {
    constructor(){
        super()

        this.state = {
            //id: this.props.match.params.id,
            //id: "",
            prodName: '',
            prodId: '',
            prodQuantity:'',
            prodPrice:'',
            product:[]
        }
        this.changeProdNameHandler = this.changeProdNameHandler.bind(this);
        this.changeProdIdHandler = this.changeProdIdHandler.bind(this);
        this.changeProdQuantityHandler = this.changeProdQuantityHandler.bind(this);
        this.changeProdPriceHandler = this.changeProdPriceHandler.bind(this);
        this.updateProducts = this.updateProducts.bind(this);
    }
    componentDidMount(){
        ProductService.getProdById(this.state.id).then ((res) =>{
            let product = res.data;
            this.setState({prodPrice: product.prodPrice,
            prodQuantity: product.prodQuantity,
            prodName: product.prodName,
            prodId: product.prodId,
            });
        });
    }
    updateProducts = (e) => {
        e.preventDefault();
        let product = {prodName: this.state.prodName,  prodId: this.state.prodId, prodPrice: this.state.prodPrice, prodQuantity: this.state.prodQuantity};
        console.log('product => ' + JSON.stringify(product));
        ProductService.updateProducts(product);

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

        // const {prodName} = this.props.match.params.prodName
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Product</h3>
                                <div className = "card-body">
                                    
                                    <form>
                                        <div className = "form-group">
                                            <label> Prod Name: </label>
                                            <input placeholder="Prod Name" name="prodName" className="form-control" 
                                                value={this.state.prodName} onChange={this.changeProdNameHandler}required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Id: </label>
                                            <input placeholder="Prod Id" name="prodId" className="form-control" 
                                                value={this.state.prodId} onChange={this.changeProdIdHandler}required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Quantity: </label>
                                            <input placeholder="Prod Quantity" name="prodQuantity" className="form-control" 
                                                value={this.state.prodQuantity} onChange={this.changeProdQuantityHandler}required/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Prod Price: </label>
                                            <input placeholder="Prod Price" name="prodPrice" className="form-control" 
                                                value={this.state.prodPrice} onChange={this.changeProdPriceHandler}required/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateProducts}
                                            

                                        >Save</button>
                                        {/* <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button> */}
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}
export default UpdateProducts;