import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/cartButton'
import Login from './buttons/login'
import Signup from './buttons/registrar'

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Produtos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Sobre</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contato</NavLink>
                            </li>


                        </ul><>
                            <h1>AstroDevStore</h1>
                            <br />
                            <Login className=" btn me-4" />
                            <Signup />
                            <CartBtn />
                        </>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
