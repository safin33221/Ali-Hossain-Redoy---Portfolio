import Footer from "./components/Shared/Footer";
import Navbar from "./components/Shared/Navbar"
import Home from "./Pages/Home"
import Headroom from 'react-headroom';
function App() {

  return (
    <div className=" max-w-[1420px] mx-auto">
      <Headroom>
        <Navbar />
      </Headroom>
      <Home />

      <Footer/>
    </div>
  )
}

export default App
