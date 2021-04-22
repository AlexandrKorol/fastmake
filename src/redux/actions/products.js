import axios from 'axios'

export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value,
})

export const fetchProducts = (category, sortBy) => dispatch => {
  dispatch(setLoaded(false))

  //?${category !== null ? `category=${category}` : ''}&${sortBy !== null ? `sortBy=${sortBy}` : ''}
  axios.get(`https://localhost:5001/products?${sortBy !== null ? '' : `sortBy=${sortBy}`}`).then(({ data }) => {
      dispatch(setProducts(data))
  })
}

export const fetchProduct = (id) => dispatch => {
  dispatch(setLoaded(false))

  axios.get(`https://localhost:5001/products/${id}}`).then(({ data }) => {
      dispatch(setProducts(data))
  })
}

export const onChangePage = (id) => dispatch => {
  dispatch(setLoaded(false))

  axios.get(`https://localhost:5001/products?pageNumber=${id}`).then(({ data }) => {
      dispatch(setProducts(data))
  })
}

export const setProducts = items => ({
  type: 'SET_PRODUCTS',
  payload: items,
})

export const setEditFields = editFields => ({
  type: 'SET_EDITFIELDS',
  editFields,
})