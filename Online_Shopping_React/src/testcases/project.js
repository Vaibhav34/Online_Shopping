import { useState } from "react"

function Project()
{
    const [projectName,setprojectName] = useState("")
    const [prodId,setprodId] = useState("")
    const [prodName,setprodName] = useState("")
    const [prodPrice, setprodPrice] = useState()
    const [prodQuantity, setprodQuantity] = useState()

    return <div> Welcome Project Team!!!
    <button onClick={()=>{
        setprojectName("Online Shopping")
    }}> View Project Name </button>
    {projectName}

    <button onClick={()=>{
        setprodId("111")
    }}> View Product Id </button>
    {prodId}

    <button onClick={()=>{
        setprodName("Book")
    }}> View Product Name </button>
    {prodName}

    <button onClick={()=>{
        setprodPrice(200.99)
    }}> View Product Price</button>
    {prodPrice}

    <button onClick={()=>{
        setprodQuantity(9)
    }}> View Product Quantity </button>
    {prodQuantity}

    </div>
}
export default Project
