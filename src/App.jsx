import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Beranda from './components/BerandaSebelum';
import Home from './pages/home';
import Tentang from './pages/tentang';
import Vaksinasi from './pages/vaksinasi';
import FAQ from './pages/faq';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Beranda />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/tentang" element={<Tentang />} />
                        <Route path="/vaksinasi" element={<Vaksinasi />} />
                        <Route path="/faq" element={<FAQ />} />
                    </Routes>
                </main>
            </div>
        </Router>
);
}

export default App;
// import React from 'react'

// import Header from './components/header';
// import Home from './components/Home';


// function App() {
//   return (
//     <>
//     <Header />
//       <Home />
//     </>
      
// );
// }

// export default App
