import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutPages from "./pages/AboutPages"
import Header from "./component/Header/Header"
import Footer from "./component/Footer/Footer"
import ServicePages from "./pages/ServicePages"
import PortfolioPages from "./pages/PortfolioPages"
import BlogPages from "./pages/BlogPages"
import ContactPages from "./pages/ContactPages"
import ErrorPages from "./pages/ErrorPages"
import ScrollToTopButton from "./component/scrollTop/Scroll"

function App() {
  

  return (
     <div>
      <Header/>
      <Routes>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<AboutPages/>}/>
         <Route path="/service" element={<ServicePages/>}/>
         <Route path="/portfolio" element={<PortfolioPages/>}/>
         <Route path="/blog" element={<BlogPages/>}/>
         <Route path="/contact" element={<ContactPages/>}/>
         <Route path="*" element={<ErrorPages/>}/>
      </Routes>
      <Footer/>
      <ScrollToTopButton/>
     </div>
  )
}

export default App
