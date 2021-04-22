import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, fetchProduct } from '../redux/actions/products';
import { Button, ProductItem } from "../components/_index";
import "../sass/components/ItemPage.sass";

function ItemPage({ id }) {
    const dispatch = useDispatch();

    const products = useSelector(({products}) => products.items)
    const isLoaded = useSelector(({products}) => products.isLoaded)
    const editFields = useSelector(({products}) => products.editFields);

    useEffect(() => {
        dispatch(fetchProducts())
    }, []);

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [id]);

    return (
        <div className="content-inner in-col">
            <div className="item-page">
                <div className="item-page__holder">
                    <img className="item-page__image" src={ editFields.thumbnail } alt="item" />
                    <Button 
                        label="Purchase"
                    />
                </div>

                <div className="item-page__content">
                    <h3>{ editFields.label }</h3>
                    <h3>{ editFields.price } UAH</h3>
                </div>
            </div>

            <h3 className="title medium-height-padding">More products</h3>
            <div className="list__item">
                {
                    
                    isLoaded && products.data.filter(e => e.id !== editFields.id).map(item => 
                        <ProductItem
                            key={ item.id }
                            image={ item.thumbnail }
                            title={ item.label }
                            price={ item.price }
                            discount="-10%"
                            link={ item.id }
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ItemPage;