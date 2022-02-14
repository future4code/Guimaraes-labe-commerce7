import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`fakestoreapo.com/products/${id}`)
            setProduct(await response.Json());
            setLoading(false);
        }
        getProduct()

    }, []);

    const Loading = () => {
        return (
            <>
                Loading.....
            </>
        )
    }
    const ShowProduct = () => {
        return(
            <>
         <div className="col-md-6">
             <img src={product.image} alt={product.title} height="400px" width="400px"></img>
         </div>
         <div className="col-md-6">
             <h4 className='text-uppercase text-black-50'>{product.category}</h4>
             <h1 className='display-5'>{product.title}</h1>
         </div>
         <p className='lead'>Rating {product.rating && product.rating.rate}</p>
         <i className='fa fa-star'></i>
            </>
        )

    }
    return (
        <div>
            <div className="container">
                <div className='row'>
                    {loading ? <Loading /> : <ShowProduct />}
                </div>

            </div>
        </div>
    );
}

export default Product