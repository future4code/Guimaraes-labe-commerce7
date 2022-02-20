import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <hr />
            <h3 className='fw fw-bolder'>Siga Nossas Redes Sociais</h3>
            <div class="redes-sociais">
                <a href="https://www.facebook.com">
                    <img className="ms-4" src='/assets/images/footer/facebook.png' height='50px' />
                </a>
                <a href="http://www.instagram.com">
                    <img className="ms-4" src='/assets/images/footer/instagram.png' height='50px' />
                </a>
            </div>
        </div>
    )
}

export default Footer
