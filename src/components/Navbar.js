import React from 'react';
import '../App.css';

function Home() {
    return (

        <header>
            <div className='overlay'> </div>
            <nav>
                <h2>Shop</h2>
                <ul>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li className="cart"><a href='#'>
                        <ion-icon name="basket"></ion-icon>Cart<span>0</span>
                    </a></li>
                </ul>
            </nav>
        </header>

    );
}

export default Home;