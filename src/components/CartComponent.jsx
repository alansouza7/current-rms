import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { formatPrice } from '../utils'
import { clearCart, decrease, increase, removeCartItem } from '../features/cart/cartSlice'
import {FaPlus} from 'react-icons/fa'
import {FiMinus} from 'react-icons/fi'


const CartComponent = () => {

  const {cartItems, total, tax,} = useSelector((store)=> store.cart)
  const dispatch = useDispatch()


  if(cartItems.length === 0) {
    return <div className='grid  min-h-screen place-content-center'>
    <h1 className='my-5'>Add an Item to your quotation</h1>
      <Link className='btn btn-primary' to="/products">Products</Link>
            </div>
  }

  if(cartItems.length > 0) {
    return <div >
      <h2 className='text-6xl mb-12 font-semibold'>Quotation</h2>
    <div className='flex flex-col w-full lg:flex-row'>
      <div>
      {cartItems.map(item =>{
  
          const {name, id, group_name, img, price, qtd} = item
        return <div className='flex gap-3 flex-col sm:flex-row mb-10 items-center sm:items-start justify-center' key={id}>
         
              <img className=' w-24 h-24 object-cover card' src={img} alt={name} />
            
            <div className='flex flex-col gap-6 items-center sm:items-start flex-wrap sm:w-[300px]'>
              <h4>{name}</h4>
              <p>{group_name}</p>
            </div>
            <div className='flex flex-col gap-5 items-center'>
              <p>Amount</p>
              
              <div className='flex gap-5'>
                <button onClick={()=>dispatch(decrease(id))}><FiMinus/></button>
                <p className="card border-2 border-primary py-2 px-4">{qtd}</p>
               <button onClick={()=>dispatch(increase(id))}><FaPlus/></button>
              </div>
              
              <button onClick={()=>dispatch(removeCartItem(id))} className='btn btn-secondary btn-xs' >remove</button>
            </div>
            <div className='sm:w-[200px] sm:text-right'>
              <p>{formatPrice(price * qtd)}</p>
            </div>

        </div>
      })}
      </div>
        
        <div className='sm:ml-[auto]'>
            <div className='flex flex-col gap-3 bg-base-200 p-5 h-[200px]  card'>
                <div className='border-b-2 border-primary  pb-1 flex gap-10'>
                  <p>Subtotal</p>
                  <p className='ml-[auto]'>{formatPrice(total)}</p>
                </div>
                <div className='border-b-2 border-primary  pb-1 flex gap-10'>
                  <p>Tax</p>
                  <p className='ml-[auto]'>{formatPrice(total * tax)}</p>
                </div>
                <div className=' pb-1 flex gap-10 mt-[auto]'>
                  <p>Order Total</p>
                  <p className='ml-[auto]'>{formatPrice(total + (total*tax))}</p>
                </div>
            </div>
          

         
         <button className="btn btn-primary block m-[auto] mt-10 capitalize" onClick={()=>document.getElementById('my_modal_1').showModal()}>finish order</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center">Hello!</h3>
                <p className="py-4 text-center">We've received your order and will get back to you soon!</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button onClick={()=>dispatch(clearCart())} className="btn btn-secondary">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
      
    </div>
  </div>
  }


 
  
}

export default CartComponent
