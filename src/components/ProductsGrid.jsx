import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'
import {useSelector} from 'react-redux'



const ProductsGrid = () => {
 

const {filterItems, name, group} = useSelector((state) => state.filter);


const newArray = filterItems?.filter(item=>{
  return (item.name.toLowerCase().includes(name.toLowerCase()))  && (item.product_group.name.toLowerCase().includes(group.toLowerCase())) 
})


  return (
    <div className='gridCustom gap-8 shadow'>
        {newArray?.map(product =>{
            const {id, name, rental_rate, icon} = product
            return <Link key={id} to={`/${id}`}> 
            <div className='card shadow p-4 flex justify-center items-center gap-4' >
                <div className=''><img className='card w-[220px] h-[180px]' src={icon.url} alt="product featured" /></div>
                    <h2 className='text-lg text-center font-semibold'>{name}</h2>
                    <p>{formatPrice(rental_rate.price)}</p>
            </div>
            </Link>
        })}
    </div>
  )
}

export default ProductsGrid
