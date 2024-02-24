import React from 'react'
import { PRODUCTS } from '../../product'
import {Productshop} from './Productshop'
import "./shop.css";


export default function Shop() {
  return (
    <div className='shop'>
        <div className='shopTittle'>
          <h3>Anwesha's Shop</h3>  
        </div>
        <div className='products'> {PRODUCTS.map((product)=>
        (<Productshop data={product}/>))} </div>
    </div>
  )
}
