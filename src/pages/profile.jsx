import React from "react";

function Profile() {
  return (
    <div className="container-profile mx-auto mt-8">
      <h1 className="text-2xl justify-center font-semibold mb-4">Profil Pengguna</h1>
      <div className="flex flex-row justify-center items-center p-4 ml-p mt-12">
        <div className="flex flex-col justify-center items-center w-[280px] h-[350px] bg-[#F1D7B9]">
          <img
            src='/img/file.svg'
            alt='file'
            className='w-[60px] h-[60px] mb-4'
          />
          <input type='file' className='text-center ml-32' />
        </div>
        <form className="ml-20 mb-5 flex flex-col">
          <label className="mb-2">
            Nama Pemilik
            <input
              id='namaPemilik'
              className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mt-1'
            />
          </label>
          <label className="mb-2">
            Nomor Ponsel
            <input
              id='ponsel'
              className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mt-1'
            />
          </label>
          <label className="mb-2">
            Alamat
            <input
              id='alamat'
              className='w-full bg-[#F1D7B9] rounded-[12px] h-[50px] border-2 shadow-lg mt-1'
            />
          </label>
          <button className='bg-[#F497B8E5] w-[70px] h-[40px] rounded-[14px] mt-10'>
          edit
        </button>
        </form>
        
      </div>
      </div>

  );
}

export default Profile;
