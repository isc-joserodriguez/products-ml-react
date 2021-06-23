import axios from 'axios';

export const getProducts = async (query) => {
    try {
        console.log()
        const products = await axios.get(`${process.env.REACT_APP_API}/search?query=${query}`);
        return products;
    } catch (e) {
        console.log(e);
    }
}