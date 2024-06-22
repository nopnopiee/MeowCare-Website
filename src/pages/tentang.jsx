import React from "react";

function Tentang() {
  function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <section id='tentang' className='mx-20 my-20 font-montserrat'>
      <div className='main-gambar'>
        <img
          src='/img/banner-tentang.svg'
          alt='gambar-utama'
          className='w-full'
        />
      </div>

      <div className='my-20'>
        <h1 className='text-[36px] text-[#D03692] font-bold text-center text-shadow'>
          TARAYA GRIYA SATWA
        </h1>

        <div className='tentang-menu mt-20'>
          <div className='bg-[#F1D7B9] w-[300px] p-2 text-center mb-10'>
            <h2 className='font-bold text-[20px]'>Profile</h2>
          </div>
          <div className='grid-tentang grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
            <div className='tentang-1 col-span-1 lg:row-span-3'>
              <img
                src='/img/WhatsApp Image 2024-05-08 at 01.07.33 (1).jpeg'
                alt=''
                className='w-full h-auto'
              />
            </div>
            <div className='lg:col-span-4' />
            <div className='tentang-2 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1'>
              <p className='font-semibold'>
                Taraya griya satwa adalah klinik hewan dan petshop yang
                menawarkan jasa vaksinasi kucing dan juga menyediakan kebutuhan
                kucing seperti pakan dan vitamin
              </p>
            </div>
            <div className='lg:col-span-2' />
            <div className='lg:col-span-1' />
            <div className='tentang-4 col-span-1 sm:col-span-2 lg:col-span-2'>
              <p className='font-semibold'>
                Taraya Griya Satwa buka setiap hari dari jam 08.00 pagi hingga
                21.00 malam. Kecuali untuk hari minggu hanya buka dari jam 08.00
                pagi - 18.00 sore.
              </p>
            </div>
            <div />
            <div />
            <div className='tentang-3 col-span-1 lg:row-span-2'>
              <img
                src='/img/WhatsApp Image 2024-05-08 at 01.07.33 (2).jpeg'
                alt=''
                className='w-full h-auto'
              />
            </div>
            <div />
            <div className='tentang-5 col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-1'>
              <p className='font-semibold'>
                Taraya Griya Satwa buka setiap hari dari jam 08.00 pagi hingga
                21.00 malam. Kecuali untuk hari minggu hanya buka dari jam 08.00
                pagi - 18.00 sore.
              </p>
            </div>
          </div>
        </div>

        <div className='my-10'>
          <div className='bg-[#F1D7B9] w-[300px] p-2 text-center mb-10'>
            <h2 className='font-bold text-[20px]'>Dokter</h2>
          </div>
          <div className='grid-dokter grid sm:grid-cols-1 md:grid-cols-2 gap-10'>
            <div className='dokter-1'>
              <img
                src='/img/WhatsApp Image 2024-05-08 at 01.28.44 (1).jpeg'
                alt='dokter1'
                className='w-[540px] h-[503px] rounded-[14px] shadow-xl'
              />
              <h3 className='mt-5'>Drh. Prigel Ayuning Sukmawati</h3>
              <p>
                Lulusan universitas Gajah Mada Jurusan Kedokteran Hewan tahun
                2017
              </p>
            </div>
            <div className='dokter-2'>
              <img
                src='/img/WhatsApp Image 2024-05-08 at 01.28.33.jpeg'
                alt='dokter 2'
                className='w-[540px] h-[503px] rounded-[14px] shadow-xl'
              />
              <h3 className='mt-5'>Drh. Neni Pratiwi</h3>
              <p>
                Lulusan Univeritas Gajah Mada Jurusan Kedokteran Hewan Tahun
                2022
              </p>
            </div>
          </div>
        </div>

        <div className='my-10'>
          <div className='bg-[#F1D7B9] w-[300px] p-2 text-center mb-10'>
            <h2 className='font-bold text-[20px]'>Kontak</h2>
          </div>
          <div>
            <p className='font-semibold'>
              TTaraya Griya Satwa <br /> Alamat : Komplek Ruko, Jl. Hanoman
              No.5, Slerok,
              <br /> Kec. Tegal Tim., Kota Tegal, Jawa Tengah 52122 <br />
              alamat site :{" "}
              <a
                href='https://taraya-griya-satwa.business.site/'
                target='_blank'
              >
                https://taraya-griya-satwa.business.site/
              </a>
              <br />
              Nomor telepon : 08979099991
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tentang;
