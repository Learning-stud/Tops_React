import Header from './Componenet/Header';
import Fotter from './Componenet/Fotter'
import Home from './gg/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './gg/About';
import Contact from './gg/Contact';
import Service from './gg/Service';
import OurGallery from './gg/OurGallery';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<> <Header /> <Home /> <Fotter /> </>} ></Route>
        <Route path='/About' element={<> <Header /> <About /> <Fotter /> </>} ></Route>
        <Route path='/OurGallery' element={<> <Header /> <OurGallery /> <Fotter /> </>} ></Route>
        <Route path='/Service' element={<> <Header /> <Service/> <Fotter /> </>} ></Route>
        <Route path='/Contact' element={<> <Header /> <Contact/> <Fotter /> </>} ></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;