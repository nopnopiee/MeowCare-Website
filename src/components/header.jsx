import React from 'react';
import "./header.css";

function Header () {
    return (
    <header>
        <div class="main-container">
            <div class="nav">
                <div class="logo">
                    <img src="img/logo_3-removebg-preview.png" alt="logo" width="30" height="30" viewbox="0 0 24 24" />
                    <h1>MeowCare</h1>
                </div>
                    <nav>
                        <ul>
                            <li><a href="">Beranda</a></li>
                            <li><a href="">Tentang</a></li>
                            <li><a href="">Vaksinasi</a></li>
                            <li><a href="">FAQ</a></li>
                            <li>
                                <a href="">
                                    <img src="img/bag_2662503.png" alt="bag" width="20" height="20" viewbox="0 0 24 24" />
                                </a>
                            </li>
                            <li><a href=""><button class="btn">Login</button></a></li>
                        </ul>
                    </nav>
                </div>
            </div>
    </header>
);
}

export default Header;