import { Filters, ProductsContainer} from "../components";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { getFilterItems } from "../features/filter/filterSlice";
import { useEffect } from "react";


const apiKey = "1m26tGiFj2AQmePwPR3r";
const subdomain = "alan";
const url = `https://api.current-rms.com/api/v1/products`;

const headers = {
  "X-SUBDOMAIN": subdomain,
  "X-AUTH-TOKEN": apiKey,
};

export const loader = async () =>{

  const response = await axios.get(url, {
    headers,
  
  },  )

  return {products: response.data.products}
}




const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilterItems());
   
  }, [dispatch]);
  
  
  return (
    <>
      <Filters />
      <ProductsContainer />

    </>
  )
}

export default Products
