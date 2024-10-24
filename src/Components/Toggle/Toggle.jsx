import { useState } from "react";
import SingleToggle from "../SingleToggle/SingleToggle";
import Cart from "../Cart/Cart";
import About from "../About/About";

const Toggle = ({cart ,deleteData , removeItem}) => {
  
  const [change , setChange] = useState(false)

  function changeAbout(){
         setChange(!change)
  }

  return (
    <div>

      {/* <button onClick={()=>change? `${<Cart></Cart>}`:`${<About></About>}`}>Cart</button> */}

      <button onClick={() => changeAbout()} className="bg-gray-500 p-2">change? `${<Cart></Cart>}`:`${<About></About>}`
        
      </button>

      {/* Conditionally render Cart or About based on state */}
      {/* {change ? <Cart /> : <About />} */}


      <button>About</button>
      {
        cart.map((sCart , idx) => <SingleToggle
            key={sCart.id}
            sCart={sCart}
            key = {idx}
            deleteData={deleteData}
            removeItem={removeItem}
            >


        </SingleToggle>)
      }
    </div>
  )
}

export default Toggle