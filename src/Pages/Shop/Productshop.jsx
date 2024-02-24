import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

export const Productshop=(props)=> {
 const{addItem, cartItems}=useContext(ShopContext)
  const{id,productName,price,productImage}= props.data
  const cartItemAmount=cartItems[id];
  return (
    <div className='product'>
    <img src={productImage}/>
    <div className='describtion'>
      <p><b>{productName}</b></p>
      <p><b>${price}</b></p>
    </div>
    <button className='addToCartBttn' onClick={()=>addItem(id)}>Add To Cart
    {cartItemAmount>0 && <>({cartItemAmount})</>}
    </button>
    </div>
  )
}
