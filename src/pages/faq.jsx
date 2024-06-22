import React, { useState } from "react";

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  const toggleDropdown4 = () => {
    setIsOpen4(!isOpen4);
  };

  const toggleDropdown5 = () => {
    setIsOpen5(!isOpen5);
  };

  const toggleDropdown6 = () => {
    setIsOpen6(!isOpen6);
  };

  return (
    <section id='faq' className='mx-20 my-20 font-montserrat'>
      <div className='main.gambar flex flex-col justify-center items-center w-full rounded-[15px] h-[500px] bg-gradient-to-r from-[#E0D8C8] to-[#F7EEDD]'>
        <h1 className='text-[32px] font-bold'>Most Asked Questions</h1>
        <p className='text-[32px] font-normal'>
          Tanyakan apapun dan temukan jawabannya
        </p>
        <div className='relative w-full sm:w-[80%] mt-5'>
          <input
            type='text'
            className='w-full h-[50px] sm:w-[calc(100% - 50px)] rounded-[15px] pl-[40px] pr-[10px]'
            placeholder='Ketik yang ingin anda cari'
          />
          <div className='absolute left-0 top-0 flex items-center h-full px-3'>
            <img src='/img/search.svg' alt='search' className='w-4 h-4' />
          </div>
        </div>
      </div>

      <div className='my-20'>
        <div className='w-full'>
          <div
            onClick={toggleDropdown}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Apa pentingnya vaksinasi untuk hewan peliharaan saya?
            </h1>
            <span className='text-xl'>{isOpen ? "▲" : "▼"}</span>
          </div>
          {isOpen && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Vaksinasi adalah salah satu cara terbaik untuk melindungi hewan
                peliharaan Anda dari penyakit yang dapat mengancam nyawa. Vaksin
                membantu sistem kekebalan tubuh hewan untuk melawan infeksi dan
                penyakit tertentu.
              </p>
            </div>
          )}

          <div
            onClick={toggleDropdown2}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Kapan sebaiknya saya membawa hewan peliharaan saya untuk
              divaksinasi?
            </h1>
            <span className='text-xl'>{isOpen2 ? "▲" : "▼"}</span>
          </div>
          {isOpen2 && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Jadwal vaksinasi tergantung pada usia, jenis, dan riwayat
                kesehatan hewan peliharaan Anda. Biasanya, vaksinasi dimulai
                sejak hewan peliharaan masih anak-anak dan diperbarui secara
                berkala sesuai dengan petunjuk dokter hewan.
              </p>
            </div>
          )}

          <div
            onClick={toggleDropdown3}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Apa saja jenis vaksin yang tersedia untuk hewan peliharaan?
            </h1>
            <span className='text-xl'>{isOpen3 ? "▲" : "▼"}</span>
          </div>
          {isOpen3 && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Jenis vaksin yang direkomendasikan untuk hewan peliharaan dapat
                bervariasi tergantung pada spesies dan lingkungan tempat hewan
                peliharaan tinggal. Namun, beberapa vaksin umum meliputi vaksin
                rabies, vaksin distemper, vaksin parvovirus, dan lainnya.Jenis
                vaksin yang direkomendasikan untuk hewan peliharaan dapat
                bervariasi tergantung pada spesies dan lingkungan tempat hewan
                peliharaan tinggal. Namun, beberapa vaksin umum meliputi vaksin
                rabies, vaksin distemper, vaksin parvovirus, dan lainnya.
              </p>
            </div>
          )}

          <div
            onClick={toggleDropdown4}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Bagaimana cara memesan vaksinasi untuk hewan peliharaan saya?
            </h1>
            <span className='text-xl'>{isOpen4 ? "▲" : "▼"}</span>
          </div>
          {isOpen4 && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Anda dapat memesan vaksinasi untuk hewan peliharaan Anda dengan
                menghubungi klinik atau dokter hewan setempat. Sebaiknya buat
                janji terlebih dahulu untuk memastikan ketersediaan waktu yang
                tepat dan untuk berkonsultasi mengenai jenis vaksin yang
                diperlukan.
              </p>
            </div>
          )}

          <div
            onClick={toggleDropdown5}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Apakah ada saran tambahan untuk merawat kucing saya dengan baik?
            </h1>
            <span className='text-xl'>{isOpen5 ? "▲" : "▼"}</span>
          </div>
          {isOpen5 && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Selain vaksinasi dan pakan berkualitas, pastikan kucing Anda
                mendapatkan perawatan yang cukup, termasuk perhatian, latihan
                fisik, dan kunjungan rutin ke dokter hewan untuk pemeriksaan
                kesehatan berkala.
              </p>
            </div>
          )}

          <div
            onClick={toggleDropdown6}
            className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
          >
            <h1 className=''>
              Bagaimana saya bisa memesan pakan kucing untuk hewan peliharaan
              saya?
            </h1>
            <span className='text-xl'>{isOpen6 ? "▲" : "▼"}</span>
          </div>
          {isOpen6 && (
            <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
              <p>
                Untuk memesan pakan kucing, Anda dapat melakukannya melalui
                situs web kami dengan metode pembayaran yang sudah kami sediakan
                Pastikan untuk memberikan detail yang akurat tentang jenis pakan
                dan jumlah yang Anda butuhkan, serta alamat pengiriman yang
                benar. Mohon diperhatikan layanan antar pesanan hanya diwilayah
                tegal saja.
              </p>
            </div>
          )}
        </div>
      </div>

      <h1 className='text-left text-[30px] font-semibold mb-5'>
        Cari Berdasarkan Topik
      </h1>
      <div className='flex flex-col items-center'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-60 md:gap-x-40 sm:gap-x-10 gap-y-10 mx-10'>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>Layanan Vaksinasi</h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>
              Ketersediaan barang/makanan kucing
            </h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>Jadwal Vaksin</h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
        </div>
      </div>

      <h1 className='text-left text-[30px] font-semibold mb-5 mt-10'>
        Butuh Bantuan ?
      </h1>
      <div>
        <button className='w-[250px] h-[50px] bg-[#F497B8E5] border-[3px] rounded-[14px] border-[#F1D7B9]'>
          Hubungi Kami
        </button>
      </div>
    </section>
  );
}

export default FAQ;
