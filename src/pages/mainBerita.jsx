import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function MainBerita() {
  const navigate = useNavigate();

  const beritaList = [
    {
      id: 1,
      title: 'Cegah Rabies, Jakpus Gelar Layanan Sterilisasi Kucing',
      imgSrc: '/img/news-1.svg',
      description: 'Jakarta Pusat mengadakan layanan sterilisasi kucing untuk mencegah penyebaran rabies. Kegiatan ini akan berlangsung selama seminggu penuh dan terbuka untuk umum.',
    },
    {
      id: 2,
      title: 'Kucing Spraying Sembarangan Karna Belum Steril! Berikut Tipsnya',
      imgSrc: '/img/news-2.svg',
      description: 'Kucing yang belum steril seringkali spraying sembarangan. Berikut beberapa tips untuk mengatasi masalah tersebut dan menjaga kebersihan rumah.',
    },
    {
      id: 3,
      title: 'Cara Membuat Kucing Gemuk dan Sehat',
      imgSrc: '/img/news-3.svg',
      description: 'Ingin kucing Anda gemuk dan sehat? Berikut adalah beberapa tips dan trik untuk meningkatkan berat badan kucing Anda secara sehat.',
    },
    // Tambahkan berita lainnya di sini
  ];

  const handleBeritaClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <section className='py-10'>
      <div className='container mx-auto'>
        <h1 className='text-4xl font-bold text-center text-[#D03692] mb-10'>
          Berita Terbaru
        </h1>
        <div className='flex flex-col gap-10'>
          {beritaList.map((berita) => (
            <div
              key={berita.id}
              className='flex bg-[#F1D7B9] p-4 rounded-[10px] items-start'
              onClick={() => handleBeritaClick(berita.id)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src={berita.imgSrc}
                alt={`news-${berita.id}`}
                className='w-[150px] h-[150px] object-cover mr-4' 
              />
              <div className='flex flex-col justify-between h-[70px]'>
                <h2 className='font-semibold text-lg'>{berita.title}</h2>
                <p className='mt-auto'>{berita.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MainBerita;
