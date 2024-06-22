import React, { useState } from "react";
import MyCalendar from './MyCalendar';

function Vaksinasi() {
  const [selectedTab, setSelectedTab] = useState("vaksinasi");
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <section id='vaksinasi' className='mx-20 my-20 font-montserrat'>
      <div className='main-gambar'>
        <img src='/img/vaksin.svg' alt='gambar-utama' className='w-full' />
      </div>

      <div className='flex justify-center gap-14 my-20'>
        <h1
          onClick={() => setSelectedTab("vaksinasi")}
          className={`hover:cursor-pointer ${
            selectedTab === "vaksinasi" ? "underline" : ""
          }`}
        >
          Vaksin
        </h1>
        <h1
          onClick={() => setSelectedTab("biodata")}
          className={`hover:cursor-pointer ${
            selectedTab === "biodata" ? "underline" : ""
          }`}
        >
          Biodata
        </h1>
        <h1
          onClick={() => setSelectedTab("jadwal")}
          className={`hover:cursor-pointer ${
            selectedTab === "jadwal" ? "underline" : ""
          }`}
        >
          Jadwal
        </h1>
      </div>

      {selectedTab === "vaksinasi" && (
        <div className=''>
          <h1 className='text-[48px] text-shadow'>
            Vaksinasi Kucing Anda di MeowCare
          </h1>
          <p className='text-justify'>
            Layanan vaksin kucing saat ini telah tersedia di MeowCare.id. Anda
            dapat melakukan tindakan vaksinasi untuk hewan kesayangan anda
            seperti : vaksin kucing yang dapat dilakukan di PetShop MeowCare.
            Mitra dokter hewan kami merupakan dokter hewan yang berkompeten dan
            berpengalaman dalam melaksanakan vaksin untuk hewan. Semua prosedur
            dilakukan sesuai standar kesehatan hewan yang berlaku.
          </p>

          <div className='w-full'>
            <div
              onClick={toggleDropdown}
              className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
            >
              <h1 className=''>Manfaat Vaksin</h1>
              <span className='text-xl'>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
                <p>
                  Pemberian vaksin yang sesuai akan memberikan daya tahan tubuh
                  aktif untuk hewan yang berguna untuk mengontrol penyakit
                  infeksius, baik untuk tiap individu maupun populasi. Beberapa
                  vaksin juga menurunkan potensi penyebaran infeksi zoonotik
                  pada manusia (contoh: rabies). Sehingga, vaksin akan
                  bermanfaat untuk meningkatkan kualitas hidup hewan karena
                  hewan akan lebih sehat dan menjadi perlindungan terhadap
                  pemilik hewan/ pet owner itu sendiri dari penyebaran penyakit
                  hewan ke manusia (zoonosis). 
                </p>
              </div>
            )}
            <div
              onClick={toggleDropdown2}
              className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
            >
              <h1 className=''>Syarat Vaksin</h1>
              <span className='text-xl'>{isOpen2 ? "▲" : "▼"}</span>
            </div>
            {isOpen2 && (
              <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px]'>
                <p>
                  Vaksin harus diberikan pada hewan dalam keadaan: sehat, tidak
                  demam, tidak diare, tidak flu, tidak ada masalah kulit, usia
                  memenuhi syarat minimal, dan sudah obat cacing. Setelah
                  pemberian vaksin dalam waktu satu minggu hewan tidak boleh
                  mendapat perlakuan yang membuat hewan stress
                  (grooming/perjalanan jauh) serta tidak boleh ke luar rumah
                  terlebih dahulu yang berpotensi menghambat pertumbuhan
                  antibodi tubuhnya dan masih bisa terpapar penyakit.
                </p>
              </div>
            )}
            <div
              onClick={toggleDropdown3}
              className='my-5 w-full h-[50px] bg-[#F1D7B9] rounded-[10px] px-10 flex justify-between items-center cursor-pointer'
            >
              <h1 className=''>Harga Vaksin</h1>
              <span className='text-xl'>{isOpen3 ? "▲" : "▼"}</span>
            </div>
            {isOpen3 && (
              <div className='mt-2 px-10 py-4 bg-[#F1D7B9] rounded-[10px] grid grid-cols-2'>
                <p>Vaksin F3/Noobivac</p>
                <p>Rp 220.000,-</p>
                <p>Vaksin F4</p>
                <p>Rp 240.000,-</p>
                <p>Vaksin Rabies (Rabisin/Defensor 3)</p>
                <p>Rp 150.000,-</p>
              </div>
            )}
            <div className='my-10'>
              <h1 className='text-[48px] text-shadow'>
                Jenis Vaksin Kucing di MeowCare
              </h1>
              <p className='text-justify'>
                <span className='font-bold'>1. Vaksin F3 / Nobivac</span> <br />{" "}
                Vaksin ini biasanya diberikan kepada kucing untuk melindungi
                mereka dari tiga penyakit virus kucing yang sangat umum, yang
                dikenal sebagai "triple vaccine" atau "vaksin 3 arah" (F3).
                Ketiga virus yang dilindungi adalah:{" "}
                <ul>
                  <li>
                    Feline Herpesvirus (FHV): Penyebab penyakit pernapasan atas
                    pada kucing.
                  </li>
                  <li>
                    Feline Calicivirus (FCV): Menyebabkan infeksi pernapasan dan
                    penyakit mulut pada kucing.
                  </li>
                  <li>
                    Feline Panleukopenia Virus (FPV): Juga dikenal sebagai
                    penyakit parvo, menyebabkan diare, muntah, dan kelemahan
                    pada kucing.
                  </li>
                </ul>
                <span className='font-bold'>2. Vaksin F4</span> <br />
                Seperti halnya Vaksin F3, Vaksin F4 juga ditujukan untuk
                melindungi kucing dari beberapa penyakit virus. Selain
                melindungi dari FHV, FCV, dan FPV, Vaksin F4 juga melindungi
                dari virus Chlamydophila felis yang menyebabkan infeksi mata dan
                saluran pernapasan pada kucing. <br />{" "}
                <span className='font-bold'>
                  {" "}
                  Vaksin Rabies (Rabisin/Defensor 3)
                </span>{" "}
                <br /> Vaksin Rabies penting untuk diberikan kepada hewan
                peliharaan karena melindungi mereka dari penyakit rabies, yang
                dapat ditularkan kepada manusia melalui gigitan atau luka
                terbuka dari hewan yang terinfeksi. Rabies adalah penyakit yang
                fatal pada hewan dan manusia jika tidak diobati. Vaksin ini
                memberikan perlindungan terhadap virus rabies.
              </p>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "biodata" && (
        <div className=''>
          <h1 className='text-[48px] text-shadow'>
            Ayo vaksin kucing anda di MeowCare <br /> sekarang juga !
          </h1>
          <div className='grid sm:grid-cols-1 md:grid-cols-2'>
            <div className='w-[280px] h-[350px] ml-4 mt-12 bg-[#F1D7B9] rounded-[20px] flex flex-col justify-center items-center'>
              <img
                src='/img/file.svg'
                alt='file'
                className='w-[60px] h-[60px] mb-4'
              />
              <input type='file' className='text-center ml-32' />
            </div>
            <div className='mb-10'>
              <p className='font-bold'>Lengkapi biodata kucing dibawah ini!</p>
              <form>
                <label>
                  Nama Kucing
                  <input
                    id='namaKucing'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <label>
                  Umur
                  <input
                    id='umur'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <label>
                  Jenis / Warna
                  <input
                    id='jenisWarna'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <label for='jenisKelamin'>Jenis Kelamin</label>
                <div class='flex flex-col gap-2'>
                  <div class='pl-4 flex items-center bg-[#F1D7B9] rounded-[12px] h-[40px] border-2 shadow-lg'>
                    <input
                      id='jantan'
                      type='radio'
                      name='jenisKelamin'
                      class='mr-2'
                    />
                    <label for='jantan'>Jantan</label>
                  </div>
                  <div class='pl-4 flex items-center bg-[#F1D7B9] rounded-[12px] h-[40px] border-2 shadow-lg'>
                    <input
                      id='betina'
                      type='radio'
                      name='jenisKelamin'
                      class='mr-2'
                    />
                    <label for='betina'>Betina</label>
                  </div>
                </div>
              </form>

              <p className='font-bold mt-10'>
                Lengkapi biodata kucing dibawah ini!
              </p>
              <form>
                <label>
                  Nama Pemilik
                  <input
                    id='namaPemilik'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <label>
                  Nomor Ponsel
                  <input
                    id='ponsel'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <label>
                  Alamat
                  <input
                    id='alamat'
                    className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg'
                  />
                </label>
                <div className='flex justify-center mt-20'>
                  <button className='bg-[#F497B8E5] w-[250px] h-[50px] rounded-[14px]'>
                    Kirim
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {selectedTab === "jadwal" && (
        <div className='mb-10'>
          <div>
            <h1 className='text-[48px] text-shadow'>
              Jadwal Vaksinasi Kucing di MeowCare
            </h1>
            <p>
              Jadwal vaksin terbatas untuk bulan ini. Harap segera daftar untuk
              menjamin tempat Anda. Ketersediaan sangat terbatas dan kami akan
              mengutamakan pendaftaran berdasarkan prioritas dan ketersediaan
              stok vaksin. <br /> <br /> Terima kasih atas pengertian dan
              kerjasama Anda.
            </p>
            <MyCalendar />
          </div>
          <div></div>
        </div>
      )}

      <div className='flex flex-col items-center'>
        <div>
          <h1 className='text-[48px] text-shadow mb-5 text-center'>
            Mengapa Vaksinasi Kucing di MeowCare.id ?
          </h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-10'>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>
              Vaksin Kucing yang kami berikan sesuai dengan standar
            </h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>Kami telah melayani banyak hewan</h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>
              Layanan Vaksin dapat dipesan untuk hewan anda kapan saja
            </h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
          <div className='bg-[#F1D7B9] rounded-[14px] p-4 flex flex-col justify-between w-full max-w-[200px] h-[250px] shadow-lg'>
            <h1 className='font-semibold'>
              Biaya murah & layanan langsung dilakukan oleh dokter hewan
              profesional
            </h1>
            <img
              className='self-end w-[25px] h-[25px]'
              src='/img/dog.svg'
              alt='dog'
            />
          </div>
        </div>
      </div>

      <div class='flex flex-col md:flex-row items-center gap-5 max-w-[800px] mx-auto mt-10 shadow-xl p-10 rounded-[10px]'>
        <img
          src='img/profile.svg'
          alt='profile'
          class='w-16 h-16 mb-4 md:mb-0 md:mr-5'
        />
        <div>
          <h1 class='text-lg font-bold text-gray-800'>Fadila Suhada</h1>
          <p class='mt-2 text-justify'>
            “Vaksin untuk hewan peliharaan seperti kucing sangat penting agar
            hewan senantiasa sehat. MeowCare dapat dipercaya sebagai solusi
            untuk vaksin tanpa harus ribet. Layanannya murah, mudah, dan dapat
            dipercaya.”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Vaksinasi;

