import axios from 'axios';

export const getProducts = async ({ query, setProducts }) => {
    try {
        const products = await axios.get(`${process.env.REACT_APP_API}/search?query=${query}`);
        const data = await products.data
        setProducts(data.results);
    } catch (e) {
        console.log(e);
    }
}