import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { formatPrice } from "../utils"
import { useLoaderData } from "react-router-dom";
import { useState } from "react";



const SingleProductComponent = () => {

  const dispatch = useDispatch()
  const {product} = useLoaderData()
  const [qtd, setQtd] = useState(1)
 

  const selectQtd= ()=>{
    const qtdSelected = document.querySelector('#amount')
    setQtd(qtdSelected.options.selectedIndex)
  }
  
    const {name, rental_rate, icon, product_group, description, id } = product
    const group_name = product_group.name
    const img = icon.url 
    const price = rental_rate.price 
  return (
    <div className='flex flex-wrap gap-10'>
      <div className='box max-w-[500px] '>
        <img className='object-cover card' src={img} alt="product picture" />
        </div>
      <div className='flex flex-col max-w-[500px]'>
        <h1 className=' text-3xl  lg:text-5xl font-semibold'>{name}</h1>
        <h3 className='text-base-300 lg:text-2xl my-5'>{group_name}</h3>
        <p className="my-3 font-semibold">{formatPrice(price)}</p>
        <p>{description}</p>

        <label className="lg:mt-20 mb-2" htmlFor="amount">Amount</label>
        <select onChange={()=>selectQtd()} id='amount' className="select select-primary w-full max-w-xs lg:mb-4">
            <option disabled>Select qtd</option>
            <option value="1" >1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
       <div onClick={()=>dispatch(addToCart({id: id, name:name, group_name: group_name, img: img, price: price, qtd: qtd}))} className="mt-5 lg:mt-[auto]"><button className='uppercase btn btn-primary '>add to cart</button></div> 
       
      </div>
      
    </div>
  )
}

export default SingleProductComponent

