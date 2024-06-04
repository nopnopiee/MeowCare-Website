import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Modal from "react-modal";

Modal.setAppElement("#root");

const LoginPopup = ({ isOpen, onRequestClose, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    onLogin();
    onRequestClose();
  };

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel='Login Modal'
      className='fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center'
      overlayClassName='fixed inset-0 bg-gray-600 bg-opacity-50'
    >
      <div className='bg-[#F1D7B9] rounded-[20px] shadow-lg w-full max-w-md mx-auto'>
        <img
          src='/img/logo_3-removebg-preview.png'
          alt='logo'
          className='w-[71px] h-[79px]'
        />
        {isLogin ? (
          <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Masuk</h2>
            <label htmlFor='username'>
              <p className='text-semibold'>Username</p>
              <input
                id='username'
                type='text'
                placeholder='Email atau username'
                className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit mb-4 focus:outline-none'
              />
            </label>
            <label htmlFor='password'>
              <p className='text-semibold'>Password</p>
              <div className='relative'>
                <input
                  id='password'
                  type={passwordVisible ? "text" : "password"}
                  placeholder='Password'
                  className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit focus:outline-none'
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute inset-y-0 right-3 flex items-center text-[#4B392A80] hover:text-[#4B392A]'
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </label>
            <div className='flex justify-end'>
              <button className='text-[#4B392A] hover:underline'>
                Lupa password?
              </button>
            </div>
            <button
              onClick={handleLogin}
              className='mt-10 w-full bg-gradient-to-r from-[#D03692CC] to-[#F497B880] text-white px-4 py-2 rounded-[14px] hover:bg-blue-700'
            >
              Masuk
            </button>
            <div className='flex justify-center items-center gap-3 my-4'>
              <div className='w-[80px] h-[1px] bg-[#4B392A]' />
              <p className='text-[#4B392A]'>or</p>
              <div className='w-[80px] h-[1px] bg-[#4B392A]' />
            </div>
            <div className='flex justify-center gap-2 items-center'>
              <FcGoogle size={30} />
              <img
                src='/img/facebook-logos.svg'
                alt='facebook'
                className='w-[30px] h-[30px]'
              />
            </div>
            <div className='flex justify-center mt-5'>
              <p className='text-[#4B392A]'>
                Belum memiliki akun?{" "}
                <span
                  className='text-[#D03692] hover:underline hover:cursor-pointer'
                  onClick={handleClick}
                >
                  Daftar
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4 text-center'>Daftar</h2>
            <label htmlFor='username'>
              <p className='text-semibold'>Username</p>
              <input
                id='username'
                type='text'
                placeholder='Email atau username'
                className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit mb-4 focus:outline-none'
              />
            </label>
            <label htmlFor='nomor'>
              <p className='text-semibold'>Nomor Ponsel</p>
              <input
                id='nomor'
                type='text'
                placeholder='Nomor Ponsel'
                className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit mb-4 focus:outline-none'
              />
            </label>
            <label htmlFor='password'>
              <p className='text-semibold'>Password</p>
              <div className='relative'>
                <input
                  id='password'
                  type={passwordVisible ? "text" : "password"}
                  placeholder='Password'
                  className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit mb-4 focus:outline-none'
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute inset-y-0 right-3 flex items-center text-[#4B392A80] hover:text-[#4B392A]'
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </label>
            <label htmlFor='repassword'>
              <p className='text-semibold'>Konfirmasi Password</p>
              <div className='relative'>
                <input
                  id='repassword'
                  type={passwordVisible ? "text" : "password"}
                  placeholder='Password'
                  className='w-full p-2 border border-[#4B392A80] rounded-[14px] bg-inherit focus:outline-none'
                />
                <button
                  type='button'
                  onClick={togglePasswordVisibility}
                  className='absolute inset-y-0 right-3 flex items-center text-[#4B392A80] hover:text-[#4B392A]'
                >
                  {passwordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
            </label>
            <button
              onClick={handleLogin}
              className='mt-10 w-full bg-gradient-to-r from-[#D03692CC] to-[#F497B880] text-white px-4 py-2 rounded-[14px] hover:bg-blue-700'
            >
              Daftar
            </button>
            <div className='flex justify-center items-center gap-3 my-4'>
              <div className='w-[80px] h-[1px] bg-[#4B392A]' />
              <p className='text-[#4B392A]'>or</p>
              <div className='w-[80px] h-[1px] bg-[#4B392A]' />
            </div>
            <div className='flex justify-center gap-2 items-center'>
              <FcGoogle size={30} />
              <img
                src='/img/facebook-logos.svg'
                alt='facebook'
                className='w-[30px] h-[30px]'
              />
            </div>
            <div className='flex justify-center mt-5'>
              <p className='text-[#4B392A]'>
                Sudah memiliki akun?{" "}
                <span
                  className='text-[#D03692] hover:underline hover:cursor-pointer'
                  onClick={handleClick}
                >
                  Masuk
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default LoginPopup;
