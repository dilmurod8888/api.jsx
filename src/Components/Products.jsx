import React from 'react'
import { getProducts } from '../service/api'

const Products = () => {
    const{ data } = getProducts()
    if (data) {
    console.log(data);
        
    }
  return (
    <div>Products</div>
  )
}

export default Products