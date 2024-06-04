import React from "react";

function ConfirmationModal({ onConfirm, onCancel }) {
return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
        <div className="bg-[#F1D7B9] p-8 rounded-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Konfirmasi Logout</h2>
        <img
            src="public/img/confirmation.png"
            alt="Image"
            className="mx-auto mb-6"
        />
        <p className="mb-6">Apakah Anda yakin ingin keluar?</p>
        <div className="flex justify-center">
            <button
            className="btn bg-red-500 text-white mr-4 rounded-lg py-2 px-4"
            onClick={onConfirm}
            >
            Iya
            </button>
            <button
            className="btn bg-green-300 rounded-lg py-2 px-4"
            onClick={onCancel}
            >
            Tidak
            </button>
        </div>
        </div>
    </div>
);
}

export default ConfirmationModal;
