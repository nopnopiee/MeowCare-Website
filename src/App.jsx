import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/header"; // Pastikan nama file sesuai dengan case-sensitive
import Footer from "./components/footer"; // Pastikan nama file sesuai dengan case-sensitive
import Beranda from "./pages/beranda"; // Pastikan nama file sesuai dengan case-sensitive
import Tentang from "./pages/tentang"; // Pastikan nama file sesuai dengan case-sensitive
import Vaksinasi from "./pages/vaksinasi"; // Pastikan nama file sesuai dengan case-sensitive
import FAQ from "./pages/faq"; // Pastikan nama file sesuai dengan case-sensitive
import ProductPage from "./pages/product"; // Pastikan nama file sesuai dengan case-sensitive
import DetailProduct from "./pages/product-info"; // Pastikan nama file sesuai dengan case-sensitive
import CheckoutPage from "./pages/checkout"; // Pastikan nama file sesuai dengan case-sensitive
import NewsPage from "./pages/berita"; // Pastikan nama file sesuai dengan case-sensitive
import Profile from "./pages/profile"; // Pastikan nama file sesuai dengan case-sensitive
import MainBerita from "./pages/mainBerita"; // Pastikan nama file sesuai dengan case-sensitive
import LoginPopup from "./pages/LoginPopup"; // Pastikan nama file sesuai dengan case-sensitive
import Test from "./pages/Test";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Panggil API backend
    axios.get('http://localhost:3030/api/v1')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    toggleLoginModal();
  };

  const handleLogout = () => setIsLoggedIn(false);

  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  return (
    <Router>
      <div className="App">
        <Header
          isLoggedIn={isLoggedIn}
          onLogin={toggleLoginModal}
          onLogout={handleLogout}
        />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/detail-product/:id" element={<DetailProduct />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/news/:id" element={<NewsPage />} />
            <Route path="/mainBerita" element={<MainBerita />} />
            <Route path="/tentang" element={<Tentang />} />
            <Route path="/vaksinasi" element={<Vaksinasi />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/redirect" element={<Navigate to="/" />} />
            <Route path="/tes" element={<Test />} />
          </Routes>
        </main>
        <Footer />
        <LoginPopup
          isOpen={isLoginModalOpen}
          onRequestClose={toggleLoginModal}
          onLogin={handleLogin}
        />
      </div>
    </Router>
  );
}

export default App;


// import React, { useState } from "react";
// import axios from 'axios';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Header from "./components/header"; // Pastikan nama file sesuai dengan case-sensitive
// import Footer from "./components/footer"; // Pastikan nama file sesuai dengan case-sensitive
// import Beranda from "./pages/beranda"; // Pastikan nama file sesuai dengan case-sensitive
// import Tentang from "./pages/tentang"; // Pastikan nama file sesuai dengan case-sensitive
// import Vaksinasi from "./pages/vaksinasi"; // Pastikan nama file sesuai dengan case-sensitive
// import FAQ from "./pages/faq"; // Pastikan nama file sesuai dengan case-sensitive
// import ProductPage from "./pages/product"; // Pastikan nama file sesuai dengan case-sensitive
// import DetailProduct from "./pages/product-info"; // Pastikan nama file sesuai dengan case-sensitive
// import CheckoutPage from "./pages/checkout"; // Pastikan nama file sesuai dengan case-sensitive
// import NewsPage from "./pages/berita"; // Pastikan nama file sesuai dengan case-sensitive
// import Profile from "./pages/profile"; // Pastikan nama file sesuai dengan case-sensitive
// import MainBerita from "./pages/mainBerita"; // Pastikan nama file sesuai dengan case-sensitive
// import LoginPopup from "./pages/LoginPopup"; // Pastikan nama file sesuai dengan case-sensitive

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);


//   const handleLogin = () => {
//     setIsLoggedIn(true);
//     toggleLoginModal();
//   };
//   const handleLogout = () => setIsLoggedIn(false);

//   const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  

//   return (
//     <Router>
//       <div className="App">
//         <Header
//           isLoggedIn={isLoggedIn}
//           onLogin={toggleLoginModal}
//           onLogout={handleLogout}
//         />
//         <main>
//           <Routes>
//             <Route path="/" element={<Beranda />} />
//             <Route path="/detail-product/:id" element={<DetailProduct />} />
//             <Route path="/checkout" element={<CheckoutPage />} />
//             <Route path="/news/:id" element={<NewsPage />} />
//             <Route path="/mainBerita" element={<MainBerita />} />
//             <Route path="/tentang" element={<Tentang />} />
//             <Route path="/vaksinasi" element={<Vaksinasi />} />
//             <Route path="/faq" element={<FAQ />} />
//             <Route path="/product" element={<ProductPage />} />
//             <Route path="/profile" element={<Profile />} />
//             <Route path="/redirect" element={<Navigate to="/" />} />
//           </Routes>
//         </main>
//         <Footer />
//         <LoginPopup
//           isOpen={isLoginModalOpen}
//           onRequestClose={toggleLoginModal}
//           onLogin={handleLogin}
//         />
//       </div>
//     </Router>
//   );
// }

// export default App;
