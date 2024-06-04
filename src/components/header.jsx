import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import ConfirmationModal from "./ConfirmationModal";

function Header({ isLoggedIn, onLogin, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const navigate = useNavigate(); // useNavigate instead of useHistory

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleLogout = () => {
    setIsModalVisible(false);
    setShowConfirmationModal(true);
  };

  const handleLogoutConfirmed = () => {
    setShowConfirmationModal(false);
    onLogout();
    navigate('/'); // Navigate to home page after logout
  };

  const handleLogoutCancelled = () => {
    setShowConfirmationModal(false);
  };

  const handleProfileKu = () => {
    setIsModalVisible(false); // Tutup modal setelah klik
    navigate("/profile"); // Arahkan ke halaman profil pengguna
  };

  return (
    <header className="bg-gradient-to-r from-[#F5A5B9] from-40% via-[#F1D7B9] via-70% to-[#D9D9D9] to-100% z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/img/logo_3-removebg-preview.png"
              className="h-8 md:h-10"
              alt="MeowCare Logo"
            />
            <span className="self-center text-2xl md:text-3xl font-semibold whitespace-nowrap text-[#4B392A]">
              MeowCare
            </span>
          </Link>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <NavLink
                to="/"
                exact
                activeClassName="active-link"
                className="block py-2 px-6 text-[#4B392A] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/vaksinasi"
                activeClassName="active-link"
                className="block py-2 px-3 text-[#4B392A] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Vaksinasi
              </NavLink>
            </li>
            <li>
              <NavLink to="/product" className="block py-2 px-3">
                <img
                  src="img/bag_2662503.png"
                  alt="bag"
                  className="w-[16px] sm:w-[18px] md:w-[20px] h-[16px] sm:h-[18px] md:h-[20px]"
                />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                activeClassName="active-link"
                className="block py-2 px-3 text-[#4B392A] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tentang"
                activeClassName="active-link"
                className="block py-2 px-3 text-[#4B392A] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-2 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Tentang
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {isLoggedIn ? (
            <div className="relative inline-block">
              <img
                src="public/img/account_3033143.png"
                alt="Profile"
                className="md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] rounded-full shadow-lg cursor-pointer"
                onClick={handleProfileClick}
              />
              {isModalVisible && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
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
                    Keluar
                  </div>
                </div>
              )}
              {/* Modal konfirmasi logout */}
              {showConfirmationModal && (
                <ConfirmationModal
                  onConfirm={handleLogoutConfirmed}
                  onCancel={handleLogoutCancelled}
                />
              )}
            </div>
          ) : (
            <button
              className="btn w-[100px] sm:w-[130px] md:w-[150px] h-[30px] sm:h-[35px] md:h-[40px] text-[14px] sm:text-[18px] md:text-[20px] bg-[#F497B8] text-[#4B392A] rounded-[10px] sm:rounded-[12px] md:rounded-[14px] shadow-lg"
              onClick={onLogin}
            >
              Masuk
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

