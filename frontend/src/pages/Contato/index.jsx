import React from 'react';

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Contato = () => {
    return (
        <div>
            <Header />
            <div className="container mt-5">
                <header><h2>Fale Conosco!</h2></header>

                <main className="mt-5 ml-4">
                    <ul>
                        <h4>Nossos números:</h4>
                        <li className="mt-3 ml-2">Filial São liaulo: (11) 98765-4321</li>
                        <li className="mt-3 ml-2">Filial Rio de Janeiro: (21) 98765-4321</li>
                        <li className="mt-3 ml-2">Filial Minas Gerais: (31) 98765-4321</li>
                    </ul>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default Contato;