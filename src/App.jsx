import './index.css'
import {About, Cart,  Error, HomeLayout, Landing,  Orders, Products,  SingleProduct} from './pages/index'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './components/ErrorElement';
import {Loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as ProductsLoader} from './pages/Products'
import { useEffect } from 'react';
import { cartTotal } from './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


const router = createBrowserRouter([
 
  {
    path:'/',
    element: <HomeLayout />, 
     errorElement: <Error />,  
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
         errorElement: <ErrorElement />, 
      }, 
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'cart',
        element: <Cart />
      }, 
      {
        path: 'orders', 
        element: <Orders />
      }, 
      {
        path: '/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },  
       {
        path: 'products',
        element: <Products />,
        loader: ProductsLoader,
      }, 

    ]
  }, 


  
])

export default function App() {

  const dispatch = useDispatch()
  const {cartItems} = useSelector((store)=> store.cart)

  useEffect(()=>{
    dispatch(cartTotal())
  }, [cartItems])

return <RouterProvider router={router}></RouterProvider>;
}
