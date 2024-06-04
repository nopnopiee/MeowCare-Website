import React from 'react';
import "./berandaSebelum.css";

function BerandaSebelum () {
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

            <div className="galeri">
                <h1>Galeri</h1>
            </div>
            <div className="gallery-main">
                <div className="grid-3">
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" alt="Cat 2"/>
                        </div>
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" alt="Cat 3"/>
                        </div>
                    </div>
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" alt="Cat 3"/>
                        </div>
                        <div className="img-1">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" alt="Cat 2"/>
                        </div>
                    </div>
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" alt="Cat 4"/>
                        </div>
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" alt="Cat 3"/>
                        </div>
                    </div>
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" alt="Cat 3"/>
                        </div>
                        <div className="img-1">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" alt="Cat 4"/>
                        </div>
                    </div>
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" alt="Cat 4"/>
                        </div>
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" alt="Cat 3"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="review">
                <div className="ket-review">
                    <h1>Kirim Pada Kami!</h1>
                </div>
                <div className="input-review">
                    <div className="isi">
                        <input type="text" name="nama" placeholder="nama"/>
                        <textarea name="message" id="testimoni" placeholder="testimoni"> </textarea>
                    </div>
                    <button className="btn-kirim">Kirim</button>
                </div>
            </div>

            <div className="testimoni-klien">
                <h1>Testimoni Klien</h1>
                <div className="contoh">
                    <div className="isi-testimoni">
                        <p>MeowCare telah menjadi penyelamat sejati bagi hewan peliharaan saya. Layanannya sangat profesional dan penyayang. Dari perawatan hingga pelatihan, mereka memberikan perhatian yang luar biasa terhadap setiap detail.</p>
                    </div>
                    <div className="profile">
                        <img src="public/img/woman.png" alt="" />
                        <div className="detail">
                            <h2>anonim</h2>
                            <h3>content creator</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="image-again">
                <img src="public/img/close-up-portrait-beautiful-cat.jpg" alt="" />
            </div>

            <div class="question">
                <h1>Pertanyaan Yang Sering Diajukan</h1>
            </div>
                <div class="grid-4">
                    <div class="question-gambar">
                        <img src="public/img/adorable-kitty-looking-like-it-want-hunt.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                    </div>

                    <div class="question-isi">
                        <div class="text-1">
                            <h2>Bagaimana PetCare yang terbaik?</h2>
                                <p>Petcare yang terbaik melibatkan memberikan makanan berkualitas, perawatan kesehatan teratur, aktivitas fisik yang cukup, lingkungan yang aman dan nyaman, perhatian dan kasih sayang yang cukup, pendidikan dan pelatihan yang sesuai, perawatan gigi dan kebersihan yang baik, serta pertimbangan sterilisasi atau kastrasi untuk pengendalian populasi. Dengan memperhatikan semua aspek ini, pemilik hewan dapat memastikan kesejahteraan dan kebahagiaan yang optimal bagi hewan peliharaan mereka.</p>
                        </div>

                        <div class="text-2">
                            <h2>Bagaimana cara merawat kucing</h2>
                                <p>Merawat kucing melibatkan memberikan makanan berkualitas sesuai dengan kebutuhan nutrisinya, menyediakan akses ke air bersih, menyediakan tempat tidur yang nyaman, memperhatikan perawatan kesehatan seperti vaksinasi dan periksaaan rutin ke dokter hewan, memberikan lingkungan yang aman dan stimulasi mental melalui mainan dan interaksi, menjaga kebersihan kucing dengan rutin membersihkan kandang dan menyediakan tempat.</p>
                        </div>
                    </div>
                </div>

            <div className="berita">
                <h1>Berita Terbaru</h1>
            </div>
        </section>
    );
}

export default BerandaSebelum;









            {/* <div className="galeri">
                <h1>Galeri</h1>
            </div>
                <div className="grid-3">
                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" viewbox="0 0 24 24"/>   
                        </div>
                        <div className="img-2">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                        </div>

                    <div className="image">
                        <div className="img-1">
                            <img src="public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                        </div>
                        <div className="img-2">
                            <img src="public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg" width="400" height="500" viewbox="0 0 24 24"/>
                        </div>
                    </div>
                </div>
            </div>
//         </section> */}
//     );
// }

// export default BerandaSebelum;