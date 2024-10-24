import { useEffect, useState } from "react"
import Product from "../Product/Product"

const Products = ({addToCart ,  addAmount}) => {

    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(data => data.json())
        .then(res => setProducts(res))
    },[])

    // console.log(products);
   
  return (
    <div>
        {
            products.map(product => <Product 
                key={product.id}
               product = {product}
               addToCart = {addToCart}
               addAmount ={ addAmount}
            ></Product>)
        }
    </div>
  )
}

export default Products