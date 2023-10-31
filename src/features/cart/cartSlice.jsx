import  {createSlice} from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const getLocalStorage = () =>{
    const response = JSON.parse(localStorage.getItem("cart"))
    return response.cartItems
}

const initialState = {
    cartItems: getLocalStorage() || [],
    amount: 0, 
    total: 0, 
    tax: 0.2,
    isLoading: true
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) =>{
            state.cartItems = []
            localStorage.setItem('cart', JSON.stringify(state))
            toast.success("Order has been sent")
        },
        addToCart: (state, {payload}) =>{
            const item = payload
            const existingItem = state.cartItems.find(product =>{
               return product.id === item.id
            })

           if(existingItem){
            existingItem.qtd = existingItem.qtd + item.qtd
            existingItem.total = existingItem.total + (item.qtd * item.price)
            
           } 

           if(!existingItem){
            state.cartItems = [...state.cartItems, item]
            
           }
           localStorage.setItem('cart', JSON.stringify(state))
           toast.success("item added") 
        }, 
        removeCartItem: (state, {payload})=>{
            const id = payload
            const newArray = state.cartItems.filter(item =>{
                return item.id !== id
            })
            state.cartItems = newArray
            localStorage.setItem('cart', JSON.stringify(state))
            toast.success("item removed") 
        }, 
        cartTotal: (state)=>{
            let total = 0
            let amount = 0
            state.cartItems.forEach(item=>{
                amount += item.qtd
                total += item.qtd * item.price
                
            })
            state.amount = amount
            state.total = total
        },
        increase: (state, {payload}) =>{
            
            const id = payload
            const newItem = state.cartItems.find(item =>{
                return item.id === id
            })
        
            newItem.qtd = newItem.qtd + 1
            localStorage.setItem('cart', JSON.stringify(state))
            
        }, 
        decrease: (state,{payload}) =>{
            const id = payload
            const newItem = state.cartItems.find(item =>{
                return item.id === id
            })

            if(newItem.qtd === 1){
                newItem.qtd = 1
            } else {
                newItem.qtd = newItem.qtd - 1
            }
            localStorage.setItem('cart', JSON.stringify(state))
        }
        
    }
})

export const {clearCart, addToCart, removeCartItem, cartTotal, increase, decrease} = cartSlice.actions

export default cartSlice.reducer
