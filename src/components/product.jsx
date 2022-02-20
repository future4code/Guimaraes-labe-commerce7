import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {

        return (
            <>
                <div className="col-md-3 mb-4" key={item.id}>
                    <div className="card h-100 text-center p-4">
                        <img src={item.imagem} className="card-img-top" alt={item.titulo} height="250px" />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{item.titulo}</h5>
                            <p className="card-text">R${item.preco}</p>
                            <NavLink to={`/products/${item.id}`} className="btn btn-outline-dark me-2">Adicionar ao Carrinho</NavLink>
                        </div>
                    </div>
                </div>
            </>

        );
    }

    return (
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 text-center">
                        <h1>Produtos em Destaque</h1>
                        <hr />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product
