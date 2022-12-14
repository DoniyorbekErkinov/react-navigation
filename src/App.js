import {Route, Routes} from "react-router-dom";
import Navbar from "./Navbar";
import './styles.css'
import Home from "./pages/Home";
import About from "./pages/About";
function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
            </Route>
        </Routes>
    </>
  );
}

export default App
