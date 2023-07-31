import React from 'react'
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const {prodid} = useParams()
  const [imageset, setimageset] = React.useState(null)
  const [productdata, setproductdata] = React.useState([])
  return (
    <div>
      <h1>Product id is - {prodid}</h1>
    </div>
  )
}

export default ProductPage