
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Products from './Components/Products/Products'
import Toggle from './Components/Toggle/Toggle'


function App() {
   const [cart,setcart] = useState([])
   const [amount , setAmount] = useState(0)
   const [remove , setRemove] = useState([])

  console.log(cart);

 function removeItem(id) {
    const updatedCart = remove.filter(c => c.id !== id);  // Filter out the item by id
    setRemove(updatedCart)
}

   function addToCart(product){

      let isEx = cart.find(c=> c.id == product.id);

      if(isEx){     
         return  alert('Already Added')
      }else{
         console.log('products');
         const newCart = [...cart,product]
         setcart(newCart);
         
      }
      
   }
   

   function addAmount(taka){
      setAmount(taka + amount)
      console.log(taka);
   }

  

  return (
     <div className='w-10/12 mx-auto p-3'>
         <Header cart={cart} amount={amount} ></Header>

         <div className='flex justify-around mt-5'>
          <Products addToCart={addToCart}  addAmount={addAmount}></Products>
          <Toggle cart={cart}  removeItem={removeItem} ></Toggle>
         </div>

     </div>
    
  )
}

export default App
