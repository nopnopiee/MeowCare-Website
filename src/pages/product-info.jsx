import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productDatas } from "../data/data";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";

function DetailProduct() {
  const { id } = useParams();
  const [total, setTotal] = useState(1);

  const detailProduct = productDatas.find(
    (product) => product.id === parseInt(id)
  );

  const decreaseotal = () => {
    if (total > 1) {
      setTotal(total - 1);
    }
  };

  const increaseTotal = () => {
    setTotal(total + 1);
  };

  return (
    <div className='mx-20 my-20 font-montserrat'>
      <h1 className='text-[20px] font-bold'>Produk</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2'>
        <div className='w-[600px] h-[580px] shadow-xl rounded-[12px]'>
          <img
            src={`/${detailProduct.productImage}`}
            alt={detailProduct.productName}
            className='w-full h-full object-cover rounded-[12px] p-10'
          />
        </div>
        <div className='py-10 pl-20'>
          <h1 className='font-bold text-[32px]'>{detailProduct.productName}</h1>
          <div className='flex my-10 items-center'>
            {[...Array(detailProduct.rate)].map((_, index) => (
              <FaStar
                key={index}
                className='w-[15px] h-[15px] text-yellow-500'
              />
            ))}
            <p className='ml-3 text-[#697488]'>
              {detailProduct.rate} dari 3 ulasan
            </p>
          </div>
          <div className='text-[#697488]'>
            <p>{detailProduct.desc}</p>
          </div>
          <div className='my-10 text-[#697488]'>
            <p>Stock: Tersedia</p>
            <p>Kondisi: Baru</p>
            <p>Berat: {detailProduct.stock}</p>
          </div>
          <div className='flex items-center justify-between'>
            <div className='mr-4'>
              <p className='font-bold text-[20px]'>{detailProduct.price}</p>
            </div>
            <div className='flex w-[150px] h-[50px] px-4 shadow-lg rounded-full items-center justify-between border border-[#F2F2F2]'>
              <div className='bg-[#EEEEEE] rounded-full p-2'>
                <FaMinus
                  className={`${
                    total > 1 ? "cursor-pointer" : ""
                  } text-black w-[12px] h-[12px]`}
                  onClick={decreaseotal}
                />
              </div>
              <p className='text-center'>{total}</p>
              <div className='bg-black rounded-full p-2'>
                <FaPlus
                  className='text-white w-[12px] h-[12px] cursor-pointer'
                  onClick={increaseTotal}
                />
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <Link to='/checkout'>
              <button className='w-[250px] h-[50px] bg-[#F497B8E5] border-[3px] rounded-[14px] border-[#F1D7B9]'>
                Pesan
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className='mt-20'>
        <h1 className='text-[20px] font-bold'>Info Produk</h1>
        <p
          className='mt-5'
          dangerouslySetInnerHTML={{ __html: detailProduct.info }}
        />
      </div>

      <div className='mt-20'>
        <h1 className='text-[20px] font-bold mb-5'>Ulasan (3)</h1>
        <div className='grid grid-rows-3'>
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className='grid grid-cols-2 gap-5 p-5 border-b-2 rounded-lg'
            >
              <div className='flex items-center gap-3'>
                <img
                  src='/img/ulasan-1.png'
                  alt='profile'
                  className='w-16 h-16 rounded-full object-cover'
                />
                <div>
                  <h2 className='font-semibold text-lg'>Wayan Yanti Putri</h2>
                  <p className='text-sm text-gray-500'>Kemarin</p>
                </div>
              </div>
              <div className='flex flex-col gap-1'>
                <div className='flex items-center gap-1'>
                  {[...Array(5)].map((_, starIndex) => (
                    <FaStar key={starIndex} className='text-yellow-500' />
                  ))}
                  <p className='ml-3'>5</p>
                </div>
                <p className='text-gray-700 mt-2'>
                  Paket sudah diterima, packing rapi, isinya makanan kucing.
                  Terima kasih.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
