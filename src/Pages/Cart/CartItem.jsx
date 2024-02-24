import React from 'react'
import "./cart.css"
import { ShopContext } from '../../context/shop-context';
import { useContext } from 'react';
export default function CartItem(props) {
    
    const{id,productName,price,productImage}= props.data;
    const{ cartItems,addItem,removeCart,updatecart}=useContext(ShopContext);
  return (
    <div className='cartitem'>
    <img src={productImage}/>
    <div className='describtion'>
        <p>
            <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className='counthandler'>
            <button onClick={()=>removeCart(id)}>-</button>
            <input value={cartItems[id]} onChange={(e)=>updatecart(Number(e.target.value),id)} />
            <button onClick={()=>addItem(id)}>+</button>
        </div>
    </div>
    </div>
  )
}
