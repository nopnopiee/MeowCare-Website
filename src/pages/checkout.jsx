import React, { useState } from "react";

function CheckoutPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='mx-20 my-20 font-montserrat'>
      <h1 className='text-[32px] font-bold mb-10'>Pembayaran</h1>
      <div className='grid md:grid-cols-1 lg:grid-cols-2'>
        <div>
          <form>
            <h1 className='text-[20px] font-bold mb-8'>Alamat Pengiriman</h1>
            <label>
              Nama Lengkap
              <input
                id='namaLengkap'
                className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3'
              />
            </label>
            <label>
              Domisili
              <input
                id='domisili'
                className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3'
              />
            </label>
            <label>
              Alamat Lengkap
              <input
                id='alamat'
                className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3'
              />
            </label>
            <label>
              Nomor yang bisa dihubungi
              <input
                id='nomor'
                className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3'
              />
            </label>
            <h1 className='text-[20px] font-bold my-8'>Opsi Lainnya</h1>
            <fieldset className='mb-8'>
              <div className='flex flex-col'>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex justify-between items-center px-4'>
                    <div>
                      <input
                        type='radio'
                        name='layanan'
                        value='Pesan Antar'
                        className='mr-2'
                      />
                      Pesan Antar
                    </div>
                    <p className='text-[#999999]'>+ IDR 10.000</p>
                  </div>
                </label>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex items-center px-4'>
                    <input
                      type='radio'
                      name='layanan'
                      value='Ambil di tempat'
                      className='mr-2'
                    />
                    Ambil di Tempat
                  </div>
                </label>
              </div>
            </fieldset>

            <h1 className='text-[20px] font-bold my-8'>Metode Pembayaran</h1>
            <fieldset className='mb-8'>
              <div className='flex flex-col'>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex justify-between items-center px-4'>
                    <div>
                      <input
                        type='radio'
                        name='metodePembayaran'
                        value='transfer'
                        className='mr-2'
                      />
                      Transfer Bank
                    </div>
                  </div>
                </label>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex items-center px-4'>
                    <input
                      type='radio'
                      name='metodePembayaran'
                      value='cod'
                      className='mr-2'
                    />
                    Cash On Delivery (COD)
                  </div>
                </label>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex items-center px-4'>
                    <input
                      type='radio'
                      name='metodePembayaran'
                      value='gopay'
                      className='mr-2'
                    />
                    <img src='/img/gopay.png' alt='gopay' />
                  </div>
                </label>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex items-center px-4'>
                    <input
                      type='radio'
                      name='metodePembayaran'
                      value='dana'
                      className='mr-2'
                    />
                    <img src='/img/dana.png' alt='dana' />
                  </div>
                </label>
                <label className='mb-2'>
                  <div className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mb-3 flex items-center px-4'>
                    <input
                      type='radio'
                      name='metodePembayaran'
                      value='ovo'
                      className='mr-2'
                    />
                    <img src='/img/ovo.png' alt='ovo' />
                  </div>
                </label>
              </div>
            </fieldset>
          </form>
        </div>
        <div className='w-[400px] h-[320px] shadow-lg lg:ml-44 md:ml-0 rounded-[12px]'>
          <h1 className='text-[20px] font-bold mb-8 p-5 pb-0'>
            Alamat Pengiriman
          </h1>
          <hr className='mb-10' />
          <div className='flex justify-between px-5'>
            <p className='text-[#697488]'>Sub Total</p>
            <p className='font-semibold'>IDR 145.400</p>
          </div>
          <div className='flex justify-between px-5'>
            <p className='text-[#697488]'>Biaya pengiriman</p>
            <p className='font-semibold'>IDR 10.000</p>
          </div>
          <div className='flex justify-between px-5'>
            <p className='text-[#697488]'>Total</p>
            <p className='font-bold'>IDR 155.400</p>
          </div>
          <hr className='mt-10 mb-5' />
          <div className='flex justify-center'>
            <button
              className='w-[250px] h-[50px] bg-[#F497B8E5] border-[3px] rounded-[14px] border-[#F1D7B9]'
              onClick={openModal}
            >
              Bayar
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-5 rounded-lg shadow-lg w-[300px]'>
            <div className='flex flex-col items-center justify-center'>
              <img
                src='/img/payment-success.png'
                alt='success'
                className='w-[250px] h-[250px]'
              />
              <h1 className='text-[24px] font-bold font-roboto text-center mt-4'>
                Pemesanan Berhasil
              </h1>
              <h2 className='text-[14px] font-bold font-roboto text-center'>
                Terima Kasih!
              </h2>
            </div>
            <div className='flex justify-end mt-5'>
              <button
                className='px-4 py-2 bg-[#F497B8E5] text-white rounded'
                onClick={closeModal}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CheckoutPage;
