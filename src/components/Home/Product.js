import React from 'react'
import './Product.css'

const Product = (props) => {
  return (
    <div className='product'>
        <img src={props.imageUrl} alt="" />
        <div className="product-info">  
            <div className='row'>   
                <p>{props.name}</p>
                <div className="product-rating">
                    {
                        Array(props.rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
                </div>    
            <p className="product-price">
                <small>#</small>
                <strong>{props.price}</strong>
            </p>           
            <button>Add to Cart</button> 
        </div>
        
    </div>
  )
}

export default Product