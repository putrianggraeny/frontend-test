import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";

function App() {
  const [showFooter, setShowFooter] = useState(false); // State untuk mengontrol visibilitas footer

  // Fungsi untuk menampilkan/sembunyikan footer
  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  return (
    <div>
      {/* Navbar dengan fungsi toggleFooter */}
      <Navbar toggleFooter={toggleFooter} />

      {/* Konten utama */}
      <Homepage />

      {/* Footer hanya ditampilkan jika showFooter true */}
      {showFooter && <Footer />}
    </div>
  );
}

export default App;