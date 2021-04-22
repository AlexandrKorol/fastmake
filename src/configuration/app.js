import axios from 'axios';

const URL = 'https://localhost:5001/';

export function getProduct(id) {
    return axios.get(URL + `products/${id}`);
};

export function getPageChange(page) {
    return axios.get(URL + `products?pageNumber=${page}`);
};

export function getProducts() {
    return axios.get(URL + 'products');
};

export function getPageProducts(query) {
    return axios.get(URL + `products?${query}`);
};

export function getCategory(id) {
    return axios.get(URL + `categories/${id}`)
};

export function getCategories() {
    return axios.get(URL + 'categories')
};