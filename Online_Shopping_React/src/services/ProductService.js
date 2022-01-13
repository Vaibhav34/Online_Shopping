import axios from "axios";



const PRODUCT_BASE_URL ="http://localhost:8080/productlist"



class ProductServices {



    getProducts(){

        return axios.get(PRODUCT_BASE_URL);

    }

    createProduct(product){

        return axios.post("http://localhost:8080/addprodlist", product);

    }

    getProdById(prodId){

        return axios.get(PRODUCT_BASE_URL + '/' + prodId)

    }

    updateProducts(product){



        return axios.put("http://localhost:8080/admin/updateprod", product);



    }

    deleteProduct(prodId){

        return axios.delete("http://localhost:8080/deleteprodid", prodId)

    }

}



export default new ProductServices()