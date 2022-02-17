import React from 'react';
import Products from './products';

const Home = () => {
    return (

        <div className="hero">
            <div className="card bg-dark text-white border-0">"
                <img src="/assets/bg.7.png" className="card-img" alt="Background" height="550px" width="600px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div div className="container">
                        <h5 className="card-title display-3 fw-folder mb-0">VERÃO 2022</h5>
                        <p className="card-text lead fs-2">CONFIRA TODOS OS LANÇAMENTOS</p>
                        <p className="card-text"></p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home;
