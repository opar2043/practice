import { ImPriceTag } from "react-icons/im";


const SingleToggle = ({sCart , removeItem}) => {
    let {id,price,name} = sCart;
  return (
    <div className="flex gap-3 font-semibold my-2 border p-2 rounded">
        <h2>{name}</h2>
        <p>{price}</p>
        <button className="bg-red-500 p-1 text-xs rounded-md text-white" onClick={()=> removeItem(id)}>Delete</button>
    </div>
  )
}

export default SingleToggle
