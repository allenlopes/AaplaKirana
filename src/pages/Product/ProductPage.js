import React from 'react'
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {prodid} = useParams()
  return (
    <div>
      <h1>Product id is - {prodid}</h1>
    </div>
  )
}

export default ProductPage