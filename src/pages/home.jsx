import React from 'react';
import "./home.css";

function Home () {
    return (
    <section id="home">
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
        </div>
        <div class="grid-1">
            <div class="layanan">
                <div class="nama-layanan">
                    <a href="">Vaksinasi</a>
                </div>
                <p>
                    Refers to the systematic investigation or study conducted to discover new knowledge, facts, or information, or to solve existing problems. It involves gathering, analyzing, and interpreting data to produce valuable findings or a deeper understanding of a topic or issue.
                </p>
                <div class="icon-circle">
                    <span class="icon">&gt;</span>
                </div>
                </div>

            <div class="layanan">
                <div class="nama-layanan">
                    <a href="">Vaksinasi</a>
                </div>
                    <p>
                        Refers to the systematic investigation or study conducted to discover new knowledge, facts, or information, or to solve existing problems. It involves gathering, analyzing, and interpreting data to produce valuable findings or a deeper understanding of a topic or issue.
                    </p>
                <div class="icon"></div>
                </div>

            <div class="layanan">
                <div class="nama-layanan">
                    <a href="">Vaksinasi</a>
                </div>
                    <p>
                        Refers to the systematic investigation or study conducted to discover new knowledge, facts, or information, or to solve existing problems. It involves gathering, analyzing, and interpreting data to produce valuable findings or a deeper understanding of a topic or issue.
                    </p>
                </div>
            </div>

            <div class="alasan">
                <h1>Kenapa Harus MeowCare ?</h1>
            </div>
                <div class="grid-2">
                    <div class="image-1">
                        <img src="img/Lulu Belle - July 11, 2011.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                    </div>

                <div class="image-2">
                    <img src="img/Lulu Belle - July 11, 2011.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                </div>
                <div class="kolom-1">
                    <div class="text-1">
                        <h2>LAYANAN</h2>
                        <p>MeowCare menawarkan layanan yang berkualitas tinggi, mulai dari vaksin dan perawatan lainnya dengan memperhatikan kebutuhan unik setiap kucing peliharaan.</p>
                    </div>

                    <div class="text-2">
                        <h2>PERHATIAN</h2>
                        <p>MeowCare dikenal dengan perhatian personal setiap pemilik kepada setiap hewan peliharaan, dengan staf yang hangat, ramah, dan peduli terhadap kesejahteraan serta kebahagiaan hewan.</p>
                    </div>
                </div>
                <div class="kolom-2">
                    <div class="text-3">
                        <h2>KENYAMANAN</h2>
                        <p>MeowCare menyediakan layanan yang lengkap dan mudah diakses, sehingga memudahkan pemilik hewan peliharaan untuk memenuhi semua kebutuhan hewan mereka tanpa harus berkunjung ke tempat lain.</p>
                    </div>

                    <div class="text-4">
                        <h2>BERKUALITAS</h2>
                        <p>MeowCare memiliki petshop yang menyediakan berbagai produk dan layanan lengkap untuk kebutuhan hewan peliharaan, sehingga pemilik dapat lebih mudah memberikan perawatan terbaik untuk kesayangan mereka.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;