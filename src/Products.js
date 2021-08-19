import React from 'react'
import "./Products.css";
import Data from "./Data";
function Products() {
    const Cart = (()=>{

    })
    return (
        <div className=" products">
            {
            Data.map((elem,index)=> {
                return(
                    <div className="product_details" key={index} onClick={Cart}>
        
                    <img src={elem.image} alt="img"/>
                    </div>
                       
                )
            })
            }
        </div>
    )
}

export default Products
