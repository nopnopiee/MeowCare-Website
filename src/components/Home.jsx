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
                <h3 class="pre-title"><span id="fade-in-typing"></span></h3>
                <h1 class="home-name fade-in">NOVI FITRIA INDRIARTI</h1>
                <p class="fade-in" id="fade-in-p">I am a student majoring in accounting information systems, Bina Sarana Informatika University, Tegal City Campus, batch 22. I have studied Zahir and Mayob for the digital accounting section, while my information systems section has learned the PHP programming language and Laravel 10 framework. I am currently participating in an independent study batch 6 of web development and UI &UX Design programs at Infinite Learning.</p>
                <br />
                <a href="#about">
                    <button class="btn fade-in">My Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Header;