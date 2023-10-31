import Hero from "../components/Hero"
import axios from "axios";
import FeaturedProducts from "../components/FeaturedProducts";

const apiKey = "1m26tGiFj2AQmePwPR3r";
const subdomain = "alan";
const url = `https://api.current-rms.com/api/v1/products`;

const headers = {
  "X-SUBDOMAIN": subdomain,
  "X-AUTH-TOKEN": apiKey,
};

export const Loader = async () =>{
  const response = await axios.get(url, {
    headers
  })
  
  return {products: response.data.products}
}

const Landing = () => {

  return (<>
    <Hero />
    <FeaturedProducts />
    </>
  )
}

export default Landing
