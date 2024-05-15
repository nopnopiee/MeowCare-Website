import React from 'react';
import { Link } from 'react-router-dom';
import "./header.css";

function Header() {
    return (
        <header>
            <div className="main-container">
                <div className="nav">
                    <div className="logo">
                        <img src="img/logo_3-removebg-preview.png" alt="logo" width="30" height="30" />
                        <h1>MeowCare</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/tentang">Tentang</Link></li>
                            <li><Link to="/vaksinasi">Vaksinasi</Link></li> 
                            <li><Link to="/faq">FAQ</Link></li> 
                            <li>
                                <Link to="">
                                    <img src="img/bag_2662503.png" alt="bag" width="20" height="20" />
                                </Link>
                            </li>
                            <li><Link to=""><button className="btn">Login</button></Link></li> {/* Update Link */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
