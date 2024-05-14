import React from 'react';
import "./home.css";

function Home () {
    return (
    <section id="beforelanding">
        <div class="gambar-utama">
            <img src="img/71819-ilustrasi-anak-kucing.jpg" alt="gambar-utama"/>
                <h1 class="overlay-text">MARI RAWAT KUCING ANDA BERSAMA KAMI</h1>
                <br />
                <a href="">
                    <button class="btn-utama">Selengkapnya</button>
                </a>
        </div>
        <div class="keterangan-1">
            <h1>Layanan Kami</h1>
            <nav>
                <ul>
                    <li><a href="">Vaksin</a></li>
                    <li><a href="">Petshop</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>
        </div>
        
        </section>
    );
}

export default Home;