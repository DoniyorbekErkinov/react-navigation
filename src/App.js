import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css'
import Home from "./pages/Home";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/courses' element={<Courses/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
        </Routes>
        <Footer/>
    </>
  );
}

export default App
