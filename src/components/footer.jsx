import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className='font-montserrat'>
      <div className='main-footer bg-gradient-to-r from-[#F5A5B9] from-40% via-[#F1D7B9] via-70% to-[#D9D9D9] to-100% py-10'>
        <div className='grid-footer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10'>
          <div className='footer-1 flex flex-col items-start mb-6'>
            <div className='logo-1 flex items-center mb-4'>
              <img
                src='img/logo_3-removebg-preview.png'
                alt='logo'
                width='30'
                height='30'
                className='mr-2'
              />
              <h1 className='text-2xl font-bold'>MeowCare</h1>
            </div>
            <div className='logo-2 flex space-x-4'>
              <img
                src='public/img/gmail_5968534.png'
                alt='logo'
                width='30'
                height='30'
              />
              <img
                src='public/img/instagram_2111463.png'
                alt='logo'
                width='30'
                height='30'
              />
              <img
                src='public/img/linkedin_2504923.png'
                alt='logo'
                width='30'
                height='30'
              />
            </div>
          </div>

          <div className='footer-2 mb-6'>
            <h1 className='text-xl font-bold mb-2'>Features</h1>
            <h3 className='mb-1'>Jadwal Vaksin</h3>
            <h3 className='mb-1'>Petshop</h3>
            <h3 className='mb-1'>FAQ</h3>
          </div>

          <div className='footer-3 mb-6'>
            <h1 className='text-xl font-bold mb-2'>Perusahaan</h1>
            <h3 className='mb-1'>Tentang Kami</h3>
            <h3 className='mb-1'>Kontak Kami</h3>
          </div>

          <div className='footer-4 mb-6'>
            <h1 className='text-xl font-bold mb-2'>Kontak Kami</h1>
            <h3 className='mb-1'>
              Klinik Hewan dan Petshop Taraya Griya Satwa
            </h3>
            <h3 className='mb-1'>0897-9099-991</h3>
            <h3 className='mb-1'>Komplek Ruko, Jl. Hanoman No.5, Slerok,</h3>
            <h3 className='mb-1'>Kecamatan Tegal Timur, Kota Tegal,</h3>
            <h3 className='mb-1'>Jawa Tengah 52122</h3>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
