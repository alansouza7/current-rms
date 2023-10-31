import axios from 'axios'

const customFetch = axios.create({
    baseURL: `https://api.current-rms.com/api/v1/products`
})

export const formatPrice = (price) => {
    const poundsAmount = new Intl.NumberFormat('en-UK', {
      style: 'currency',
      currency: 'GBP',
    }).format((price / 100 * 100).toFixed(2));
    return poundsAmount;
  };