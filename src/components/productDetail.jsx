import React from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index'

const ProductDetail = () => {
    const [cartButton, setCartButton] = useState("Adicionar ao Carrinho")
    {/* Now we need a product id which is pass from the product page. */ }
    const productid = useParams();
    const productDetail = DATA.filter(x => x.id == productid.id)
    const product = productDetail[0];
    /* console.log(product); */

    // We need to store useDispatch in a variable
    const dispatch = useDispatch()

    const handleCart = (product) => {
        if (cartButton === "Adicionar ao Carrinho") {
            dispatch(addItem(product))
            setCartButton("Remover do Carrinho")
        }
        else {
            dispatch(delItem(product))
            setCartButton("Adicionar ao Carrinho")
        }
    }

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.imagem} alt={product.titulo} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.titulo}</h1>
                        <hr />
                        <h2 className="my-4">R${product.preco}</h2>
                        <p className="lead">{product.descricao}</p>

                        <select class="form-select" aria-label="Default select example">
                            <option selected>Selecione o Tamanho</option>
                            <option value="1">PP</option>
                            <option value="2">P</option>
                            <option value="3">M</option>
                            <option value="4">G</option>
                        </select>
                        <button onClick={() => handleCart(product)} className="btn btn-outline-dark my-5">{cartButton}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
