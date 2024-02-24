import React from 'react'
import { ShopContext } from '../../context/shop-context';
import { PRODUCTS } from '../../product';
import CartItem from './CartItem';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const{ cartItems,getTotal}=useContext(ShopContext)
  const totalAmount=getTotal();
  const navigate= useNavigate()
  return (
    <div className='cart' >
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartitems'>{
        PRODUCTS.map((product)=>{
          if(cartItems[product.id]!== 0){
           return < CartItem data={product}/>
          }
        })}
        </div>
         { totalAmount >0 ?(
        <div className='checkout'>
          
        <h2>Subtotal: ${totalAmount}</h2>  
        <button onClick={()=>navigate("/")}> Continue Shopping</button>
        <button >Checkout</button>
        
         </div>
         ):(<h2>Your Cart is Empty</h2>)}

    </div>
  )
}
