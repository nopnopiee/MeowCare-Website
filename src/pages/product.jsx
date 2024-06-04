import React, { useState } from "react";
import { categoryProducts, productDatas } from "../data/data";
import { FaStar, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const randomProducts = productDatas
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const newProducts = productDatas.slice(0, 6);

  const productMakanan = productDatas.filter(
    (product) => product.category === "Makanan"
  );

  const productObat = productDatas.filter(
    (product) => product.category === "Obat-obatan"
  );

  const productAksesoris = productDatas.filter(
    (product) => product.category === "Aksesoris"
  );

  return (
    <div className='mx-20 my-20 font-montserrat'>
      <div className='relative'>
        <img
          src='img/banner-product.svg'
          alt='banner-product'
          className='w-full h-full'
        />
        <h1 className='absolute inset-y-0 left-0 flex items-center pl-8 text-[#4B392A] font-bold text-shadow text-[50px]'>
          Lengkapi Kebutuhan <br /> Kucingmu <br />
          Disini !
        </h1>
      </div>

      <div className='mx-10 mt-20'>
        <h1 className='text-[20px] font-semibold'>Kategori Produk MeowCare</h1>
        <div className='flex gap-10'>
          {categoryProducts.map((category) => (
            <div
              className={`hover:cursor-pointer ${
                selectedCategory === category.category ? "shadow-pink-500" : ""
              } w-[200px] h-[250px] shadow-xl flex flex-col justify-between items-center py-10 rounded-[12px]`}
              key={category.id}
              onClick={() => setSelectedCategory(category.category)}
            >
              <img
                src={category.categoryImage}
                alt={category.category}
                className='w-full h-[150px] object-cover'
              />
              <h1 className='font-semibold'>{category.category}</h1>
            </div>
          ))}
        </div>
      </div>

      <div className='mx-10 mt-20'>
        {selectedCategory === null ? (
          <>
            <h1 className='text-[20px] font-semibold'>
              Produk Terbaru MeowCare
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
              {newProducts.map((product) => (
                <div
                  className='hover:cursor-pointer w-full max-w-[400px] shadow-lg rounded-[12px] overflow-hidden p-5 flex flex-col'
                  key={product.id}
                >
                  <div className='flex justify-center mb-4'>
                    <img
                      src={product.productImage}
                      alt='product'
                      className='w-full max-w-[200px] h-[200px] object-cover'
                    />
                  </div>
                  <div className='flex-grow'>
                    <h1 className='text-md font-semibold mb-2'>
                      {product.productName}
                    </h1>
                    <p className='text-sm text-[#999999] mb-2'>
                      {product.stock}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-auto'>
                    <div>
                      <p className='font-semibold'>{product.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex'>
                        {[...Array(product.rate)].map((_, index) => (
                          <FaStar
                            key={index}
                            className='w-[15px] h-[15px] text-yellow-500'
                          />
                        ))}
                      </div>
                      <p className='text-[#697488] text-[12px]'>
                        {product.rate}
                      </p>
                      <Link to={`/detail-product/${product.id}`}>
                        <FaPlus className='w-[40px] h-[40px] text-white bg-[#F497B8] rounded-full p-2 hover:cursor-pointer' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : selectedCategory === "Makanan" ? (
          <>
            <h1 className='text-[20px] font-semibold'>
              Produk Makanan MeowCare
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-[12px]'>
              {productMakanan.map((product) => (
                <div
                  className='w-full max-w-[400px] shadow-lg rounded-[12px] overflow-hidden p-5 flex flex-col'
                  key={product.id}
                >
                  <div className='flex justify-center mb-4'>
                    <img
                      src={product.productImage}
                      alt='product'
                      className='w-full max-w-[200px] h-[200px] object-cover'
                    />
                  </div>
                  <div className='flex-grow'>
                    <h1 className='text-md font-semibold mb-2'>
                      {product.productName}
                    </h1>
                    <p className='text-sm text-[#999999] mb-2'>
                      {product.stock}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-auto'>
                    <div>
                      <p className='font-semibold'>{product.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex'>
                        {[...Array(product.rate)].map((_, index) => (
                          <FaStar
                            key={index}
                            className='w-[15px] h-[15px] text-yellow-500'
                          />
                        ))}
                      </div>
                      <p className='text-[#697488] text-[12px]'>
                        {product.rate}
                      </p>
                      <Link to={`/detail-product/${product.id}`}>
                        <FaPlus className='w-[40px] h-[40px] text-white bg-[#F497B8] rounded-full p-2 hover:cursor-pointer' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : selectedCategory === "Obat-obatan" ? (
          <>
            <h1 className='text-[20px] font-semibold'>
              Produk Obat-obatan MeowCare
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-[12px]'>
              {productObat.map((product) => (
                <div
                  className='w-full max-w-[400px] shadow-lg rounded-[12px] overflow-hidden p-5 flex flex-col'
                  key={product.id}
                >
                  <div className='flex justify-center mb-4'>
                    <img
                      src={product.productImage}
                      alt='product'
                      className='w-full max-w-[200px] h-[200px] object-cover'
                    />
                  </div>
                  <div className='flex-grow'>
                    <h1 className='text-md font-semibold mb-2'>
                      {product.productName}
                    </h1>
                    <p className='text-sm text-[#999999] mb-2'>
                      {product.stock}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-auto'>
                    <div>
                      <p className='font-semibold'>{product.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex'>
                        {[...Array(product.rate)].map((_, index) => (
                          <FaStar
                            key={index}
                            className='w-[15px] h-[15px] text-yellow-500'
                          />
                        ))}
                      </div>
                      <p className='text-[#697488] text-[12px]'>
                        {product.rate}
                      </p>
                      <Link to={`/detail-product/${product.id}`}>
                        <FaPlus className='w-[40px] h-[40px] text-white bg-[#F497B8] rounded-full p-2 hover:cursor-pointer' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : selectedCategory === "Aksesoris" ? (
          <>
            <h1 className='text-[20px] font-semibold'>
              Produk Aksesoris MeowCare
            </h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 rounded-[12px]'>
              {productAksesoris.map((product) => (
                <div
                  className='w-full max-w-[400px] shadow-lg rounded-[12px] overflow-hidden p-5 flex flex-col'
                  key={product.id}
                >
                  <div className='flex justify-center mb-4'>
                    <img
                      src={product.productImage}
                      alt='product'
                      className='w-full max-w-[200px] h-[200px] object-cover'
                    />
                  </div>
                  <div className='flex-grow'>
                    <h1 className='text-md font-semibold mb-2'>
                      {product.productName}
                    </h1>
                    <p className='text-sm text-[#999999] mb-2'>
                      {product.stock}
                    </p>
                  </div>
                  <div className='flex items-center justify-between mt-auto'>
                    <div>
                      <p className='font-semibold'>{product.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <div className='flex'>
                        {[...Array(product.rate)].map((_, index) => (
                          <FaStar
                            key={index}
                            className='w-[15px] h-[15px] text-yellow-500'
                          />
                        ))}
                      </div>
                      <p className='text-[#697488] text-[12px]'>
                        {product.rate}
                      </p>
                      <Link to={`/detail-product/${product.id}`}>
                        <FaPlus className='w-[40px] h-[40px] text-white bg-[#F497B8] rounded-full p-2 hover:cursor-pointer' />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className='flex justify-center'>
            <h1 className='text-[32px] text-shadow font-bold'>
              Kategori Tidak Ditemukan!!
            </h1>
          </div>
        )}
      </div>

      <div className='mx-10 mt-20'>
        <h1 className='text-[20px] font-semibold'>Produk Terlaris MeowCare</h1>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {randomProducts.map((product) => (
            <div
              className='w-full max-w-[400px] shadow-lg rounded-lg overflow-hidden p-5 flex flex-col'
              key={product.id}
            >
              <div className='flex justify-center mb-4'>
                <img
                  src={product.productImage}
                  alt='product'
                  className='w-full max-w-[200px] h-[200px] object-cover'
                />
              </div>
              <div className='flex-grow'>
                <h1 className='text-md font-semibold mb-2'>
                  {product.productName}
                </h1>
                <p className='text-sm text-[#999999] mb-2'>{product.stock}</p>
              </div>
              <div className='flex items-center justify-between mt-auto'>
                <div>
                  <p className='font-semibold'>{product.price}</p>
                </div>
                <div className='flex items-center gap-2'>
                  <div className='flex'>
                    {[...Array(product.rate)].map((_, index) => (
                      <FaStar
                        key={index}
                        className='w-[15px] h-[15px] text-yellow-500'
                      />
                    ))}
                  </div>
                  <p className='text-[#697488] text-[12px]'>{product.rate}</p>
                  <FaPlus className='w-[40px] h-[40px] text-white bg-[#F497B8] rounded-full p-2 hover:cursor-pointer' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
