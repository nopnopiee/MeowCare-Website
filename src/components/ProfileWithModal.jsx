import React, { useState } from 'react';

const ProfileWithModal = () => {
const [isModalVisible, setModalVisible] = useState(false);

const handleProfileClick = () => {
    setModalVisible(!isModalVisible);
};

const handleLogout = () => {
    // Logic untuk logout
    console.log('Logout clicked');
};

const handleProfileKu = () => {
    // Logic untuk membuka halaman profil
    console.log('Profile Ku clicked');
};

return (
    <div className="relative inline-block">
    <img
        src="path/to/your/profile-image.jpg"
        alt="Profile"
        className="w-[100px] sm:w-[130px] md:w-[150px] h-[30px] sm:h-[35px] md:h-[40px] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-lg cursor-pointer"
        onClick={handleProfileClick}
    />
    {isModalVisible && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
        <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleProfileKu}
        >
            Profile Ku
        </div>
        <div
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={handleLogout}
        >
            Logout
        </div>
        </div>
    )}
    </div>
);
};

export default ProfileWithModal;
