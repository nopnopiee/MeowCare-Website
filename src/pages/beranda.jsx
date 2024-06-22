import React from "react";
import { Link } from 'react-router-dom';

function Beranda() {
  return (
    <section id='home' className='font-montserrat'>
      <div className='relative h-[300px] sm:h-[500px] md:h-[700px] lg:h-[853px] overflow-hidden'>
        <img
          src='img/banner.svg'
          alt='gambar-utama'
          className='w-full h-full object-cover brightness-50'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center text-center px-4'>
          <h1 className='text-[#F1D7B9] text-[32px] sm:text-[48px] md:text-[64px] font-bold'>
            MARI RAWAT KUCING ANDA BERSAMA KAMI
          </h1>
          <a href=''>
            <button className='btn-utama mt-4 sm:mt-6 md:mt-7 w-[200px] sm:w-[250px] md:w-[300px] lg:w-[343px] h-[50px] sm:h-[60px] md:h-[65px] lg:h-[72px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] bg-[#F497B8E5] border-2 border-[#F1D7B9] text-[#4B392A] text-[18px] sm:text-[24px] md:text-[28px] lg:text-[32px] py-2 px-4'>
              Selengkapnya
            </button>
          </a>
        </div>
      </div>

      <div className='mx-20 my-20'>
        <div className='keterangan-1 flex justify-center mb-20'>
          <h1 className='text-[64px] text-[#D03692] font-bold text-shadow'>
            Layanan Kami
          </h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-16'>
          <div className='layanan relative bg-[#F1D7B9E5] rounded-[14px] p-5 pb-16 text-center'>
            <div className='nama-layanan'>
              <h1 className='font-bold text-[32px] mb-5'>VAKSINASI</h1>
            </div>
            <p>
              Refers to the systematic investigation or study conducted to
              discover new knowledge, facts, or information, or to solve
              existing problems. It involves gathering, analyzing, and
              interpreting data to produce valuable findings or a deeper
              understanding of a topic or issue.
            </p>
            <div className='icon-circle flex items-center justify-center shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-white w-[100px] h-[100px]'>
              <span className='icon text-[80px] font-semibold'>&gt;</span>
            </div>
          </div>

          <div className='layanan relative bg-[#F1D7B9E5] rounded-[14px] p-5 pb-16 text-center'>
            <div className='nama-layanan'>
              <h1 className='font-bold text-[32px] mb-5'>VAKSINASI</h1>
            </div>
            <p>
              Refers to the systematic investigation or study conducted to
              discover new knowledge, facts, or information, or to solve
              existing problems. It involves gathering, analyzing, and
              interpreting data to produce valuable findings or a deeper
              understanding of a topic or issue.
            </p>
            <div className='icon-circle flex items-center justify-center shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-white w-[100px] h-[100px]'>
              <span className='icon text-[80px] font-semibold'>&gt;</span>
            </div>
          </div>

          <div className='layanan relative bg-[#F1D7B9E5] rounded-[14px] p-5 pb-16 text-center'>
            <div className='nama-layanan'>
              <h1 className='font-bold text-[32px] mb-5'>VAKSINASI</h1>
            </div>
            <p>
              Refers to the systematic investigation or study conducted to
              discover new knowledge, facts, or information, or to solve
              existing problems. It involves gathering, analyzing, and
              interpreting data to produce valuable findings or a deeper
              understanding of a topic or issue.
            </p>
            <div className='icon-circle flex items-center justify-center shadow-lg absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-white w-[100px] h-[100px]'>
              <span className='icon text-[80px] font-semibold'>&gt;</span>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 sm:mx-8 md:mx-20'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex justify-center md:row-span-2'>
            <img
              src='public/img/landing page-kenapa harus meowcare-1.jpg'
              alt='Cat Image 1'
              className='w-full max-w-[400px] h-auto max-h-[500px] rounded-lg shadow-lg object-cover xs:hidden lg:block'
            />
          </div>
          <div className='col-span-4 xs:col-span-4 lg:col-span-3'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-center text-[#D03692] font-bold text-shadow'>
              Kenapa Harus MeowCare ?
            </h1>
          </div>
          <div className='flex justify-center xs:col-span-4 lg:col-span-1 lg:mt-56'>
            <img
              src='public/img/landing page-kenapa harus meowcare.jpg'
              alt='Cat Image 2'
              className='w-full max-w-[400px] h-auto max-h-[500px] rounded-lg shadow-lg object-cover'
            />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-8 col-span-4 lg:col-span-2 lg:mt-28'>
            <div className='mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-brown-700 underline'>
                LAYANAN
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                MeowCare menawarkan layanan yang berkualitas tinggi, mulai dari
                vaksin dan perawatan lainnya dengan memperhatikan kebutuhan unik
                setiap kucing peliharaan.
              </p>
            </div>
            <div className='mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-brown-700 underline'>
                PERHATIAN
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                MeowCare dikenal dengan perhatian personal setiap pemilik kepada
                setiap hewan peliharaan, dengan staf yang hangat, ramah, dan
                peduli terhadap kesejahteraan serta kebahagiaan hewan.
              </p>
            </div>
            <div className='mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-brown-700 underline'>
                KENYAMANAN
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                MeowCare menyediakan layanan yang lengkap dan mudah diakses,
                sehingga memudahkan pemilik hewan peliharaan untuk memenuhi
                semua kebutuhan hewan mereka tanpa harus berkunjung ke tempat
                lain.
              </p>
            </div>
            <div className='mb-8'>
              <h2 className='text-xl sm:text-2xl font-bold text-brown-700 underline'>
                BERKUALITAS
              </h2>
              <p className='text-sm sm:text-base md:text-lg'>
                MeowCare memiliki petshop yang menyediakan berbagai produk dan
                layanan lengkap untuk kebutuhan hewan peliharaan, sehingga
                pemilik dapat lebih mudah memberikan perawatan terbaik untuk
                kesayangan mereka.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-20 my-20'>
        <div className='flex justify-center mb-20'>
          <h1 className='text-[64px] text-[#D03692] font-bold text-shadow'>
            Galeri
          </h1>
        </div>
        <div className='gallery-main'>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>
            <div className='image'>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-1.jpg'
                  alt='Cat 2'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
              <div className='img-2'>
                <img
                  src='public/img/landing page-galeri-2.jpg'
                  alt='Cat 3'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
            </div>
            <div className='image'>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-3.jpg'
                  alt='Cat 3'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-4.jpg'
                  alt='Cat 2'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
            </div>
            <div className='image'>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-5.jpg'
                  alt='Cat 4'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-6.jpg'
                  alt='Cat 3'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
            </div>
            <div className='image'>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri-7.jpg'
                  alt='Cat 3'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
              <div className='img-1'>
                <img
                  src='public/img/landing page-galeri.jpg'
                  alt='Cat 4'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
            </div>
            <div className='image'>
              <div className='img-1'>
                <img
                  src='public/img/closeup-shot-beautiful-ginger-domestic-kitten-sitting-white-surface.jpg'
                  alt='Cat 4'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
              <div className='img-1'>
                <img
                  src='public/img/british-shorthair-kitty-with-monochrome-wall-her.jpg'
                  alt='Cat 3'
                  className='w-[200px] h-[250px] mb-4'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='my-20 w-full h-[339px] bg-gradient-to-r from-[#F5A5B9] from-40% via-[#F1D7B9] via-70% to-[#D9D9D9] to-100% flex items-center'>
        <div className='review w-full px-20'>
          <div className='ket-review mb-5'>
            <h1 className='text-white text-[36px] text-shadow'>
              Kirim Pada Kami!
            </h1>
          </div>
          <div className='input-review flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='isi flex flex-col sm:flex-row gap-5 w-full'>
              <input
                type='text'
                name='nama'
                placeholder='Nama'
                className='sm:w-[120px] lg:w-[300px] h-[51px] rounded-[14px] placeholder:pl-4'
              />
              <input
                type='text'
                name='nomor'
                placeholder='Nomor'
                className='sm:w-[120px] lg:w-[300px] h-[51px] rounded-[14px] placeholder:pl-4'
              />
              <input
                type='email'
                name='email'
                placeholder='Email'
                className='sm:w-[120px] lg:w-[300px] h-[51px] rounded-[14px] placeholder:pl-4'
              />
            </div>
            <button className='btn-kirim w-full sm:w-[217px] h-[51px] bg-[#F497B8] text-[20px] shadow-lg rounded-[14px]'>
              Kirim
            </button>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <div className='testimoni-klien'>
          <div className='flex justify-center mb-5'>
            <h1 className='text-[64px] text-[#D03692] font-bold text-shadow'>
              Testimoni Klien
            </h1>
          </div>
          <div className='contoh w-[700px] bg-[#F1D7B9] rounded-[15px] p-6'>
            <div className='isi-testimoni text-center mb-4'>
              <p>
                MeowCare telah menjadi penyelamat sejati bagi hewan peliharaan
                saya. Layanannya sangat profesional dan penyayang. Dari
                perawatan hingga pelatihan, mereka memberikan perhatian yang
                luar biasa terhadap setiap detail.
              </p>
            </div>
            <div className='profile flex items-center justify-center'>
              <img
                src='public/img/woman.png'
                alt=''
                className='w-16 h-16 rounded-full mr-4'
              />
              <div className='detail text-left'>
                <h2 className='font-bold'>Anonim</h2>
                <h3 className='text-sm text-gray-600'>Content Creator</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='image-again my-36'>
        <img
          src='public/img/landing page tengah.jpg'
          alt='kucing'
          className='w-full h-[400px]'
        />
      </div>

      <div className='py-2'>
        <div className='question text-center mb-10'>
          <h1 className='text-[36px] text-[#D03692] font-bold text-shadow'>
            Pertanyaan Yang Sering Diajukan
          </h1>
        </div>
        <div className='flex flex-wrap items-center justify-center'>
          <div className='question-gambar flex-shrink-0 mr-10'>
            <img
              src='public/img/cat-question.svg'
              alt='Kitty'
              className='rounded-lg w-[500px]'
            />
          </div>
          <div className='question-isi max-w-xl space-y-6'>
            <div className='text-1 bg-[#F1D7B9] p-6 rounded-lg shadow-md'>
              <h2 className='font-bold mb-2'>
                Bagaimana PetCare yang terbaik?
              </h2>
            </div>
            <p className='text-justify text-[#4B392A]'>
              Petcare yang terbaik melibatkan memberikan makanan berkualitas,
              perawatan kesehatan teratur, aktivitas fisik yang cukup,
              lingkungan yang aman dan nyaman, perhatian dan kasih sayang yang
              cukup, pendidikan dan pelatihan yang sesuai, perawatan gigi dan
              kebersihan yang baik, serta pertimbangan sterilisasi atau kastrasi
              untuk pengendalian populasi. Dengan memperhatikan semua aspek ini,
              pemilik hewan dapat memastikan kesejahteraan dan kebahagiaan yang
              optimal bagi hewan peliharaan mereka.
            </p>
            <div className='text-2 bg-[#F1D7B9] p-6 rounded-lg shadow-md'>
              <h2 className='font-bold mb-2'>Bagaimana cara merawat kucing?</h2>
            </div>
            <p className='text-justify text-[#4B392A]'>
              Merawat kucing melibatkan memberikan makanan berkualitas sesuai
              dengan kebutuhan nutrisinya, menyediakan akses ke air bersih,
              menyediakan tempat tidur yang nyaman, memperhatikan perawatan
              kesehatan seperti vaksinasi dan periksaaan rutin ke dokter hewan,
              memberikan lingkungan yang aman dan stimulasi mental melalui
              mainan dan interaksi, menjaga kebersihan kucing dengan rutin
              membersihkan kandang dan menyediakan tempat.
            </p>
            <div className='text-center mt-5 inline-block'>
              <p className='text-[#D03692]'>Scroll untuk pertanyaan lainnya</p>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-52 my-20'>
        <div className='berita flex justify-center mb-5'>
          <h1 className='text-[36px] text-[#D03692] font-bold text-shadow'>
            Berita Terbaru
          </h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='w-[300px] bg-[#F1D7B9] p-4 rounded-[10px] flex flex-col justify-between items-center h-[350px]'>
            <img
              src='/img/news-1.svg'
              alt='news-1'
              className='w-[290px] h-[186px] object-cover'
            />
            <p className='font-semibold text-center mt-4'>
              Cegah Rabies, Jakpus Gelar Layanan Sterilisasi Kucing
            </p>
            <Link to ='/news/1'>Selengkapnya</Link>
          </div>
          <div className='w-[300px] bg-[#F1D7B9] p-4 rounded-[10px] flex flex-col justify-between items-center h-[350px]'>
            <img
              src='/img/news-2.svg'
              alt='news-2'
              className='w-[290px] h-[186px] object-cover'
            />
            <p className='font-semibold text-center mt-4'>
              Kucing Spraying Sembarangan Karna Belum Steril! Berikut Tipsnya
            </p>
            <Link to ='/news/2'>Selengkapnya</Link>
          </div>
          <div className='w-[300px] bg-[#F1D7B9] p-4 rounded-[10px] flex flex-col justify-between items-center h-[350px]'>
            <img
              src='/img/news-3.svg'
              alt='news-3'
              className='w-[290px] h-[186px] object-cover'
            />
            <p className='font-semibold text-center mt-4'>
              Cara Membuat Kucing Gemuk dan Sehat 
            </p>
            <Link to ='/news/3'>Selengkapnya</Link>
          </div>
        </div>
        <div className='mt-10 text-center text-[17px]'>
          <Link to='/mainBerita'>Geser untuk berita lainnya &#8594;</Link>
        </div>
      </div>
    </section>
  );
}

export default Beranda;
