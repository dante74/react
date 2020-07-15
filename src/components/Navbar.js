import React from 'react';
import '../App.css';

function Home() {
    return (

        <header>
            <div className='overlay'> </div>
            <nav>
                <h2>Shop</h2>
                <ul>
                    <li><a href='Home'>Home</a></li>
                    <li><a href='Shop'>Shop</a></li>
                    <li><a href="Cart">Cart</a></li>

                </ul>
            </nav>
        </header>

    );
}

export default Home;