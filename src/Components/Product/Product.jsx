
const Product = ({product ,addToCart , addAmountMoney ,addAmount}) => {
    // console.log(product);
    let {id,price,name,description,made,isOfferAvailable,img} = product
  return (
    <div>
        <div className="border-2 m-4 p-3 rounded-md">
            {/* <div>{img}</div> */}
            <h2 className="text-xl font-bold mb-1">name-{name}</h2>
           <p className="font-semibold mb-1">Price- {price}</p>
           <p className="text-md mb-2">{description}</p>
           <p className="text-md font-semibold">Offer - {isOfferAvailable?'available':'not available'}</p>
           <p className="font-semibold text-md mb-2">{made}</p>
           <button onClick={()=>{addToCart(product)
             addAmount(price)}} className="text-md bg-lime-400 p-2 rounded-md font-semibold" >Add To cart</button>
        </div>
    </div>
  )
}

export default Product