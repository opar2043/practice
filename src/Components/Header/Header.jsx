import { FaShoppingCart } from "react-icons/fa";
const Header = ({cart ,amount}) => {
  return (
    <div className="flex justify-between font-bold border-b-2">
        <h2 className="text-2xl">Token</h2>
        <div className="flex justify-around gap-7 items-center">
             <h2 className="text-lg ">Amount-{amount}</h2>
             <p className="text-xl flex justify-center items-center"><FaShoppingCart></FaShoppingCart>-{cart.length}</p>
        </div>
    </div>
  )
}

export default Header