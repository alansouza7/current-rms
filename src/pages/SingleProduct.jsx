import axios from "axios";
import SingleProductComponent from "../components/SingleProductComponent";



const apiKey = "1m26tGiFj2AQmePwPR3r";
const subdomain = "alan";

const headers = {
  "X-SUBDOMAIN": subdomain,
  "X-AUTH-TOKEN": apiKey,
};

export const loader = async ({params})=>{
    const response = await axios.get(`https://api.current-rms.com/api/v1/products/${params.id}`, {
        headers
      })
      
      return {product: response.data.product}
}

const SingleProduct = () => {

  return (
    <div>
      <SingleProductComponent />
    </div>
  )
}

export default SingleProduct