import {BrowserRouter, Routes,Route} from 'react-router-dom'; 
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import WhatsApp from './components/WhatsApp.js';
import RootLayout from './layouts/RootLayout.js';
import Programming from './pages/Programming.js';
import Graphic from './pages/Graphic.js';
import ContactUs from './pages/ContactUs.js';
import About from './pages/About.js';
import Marketing from './pages/Marketing.js';

function App() {
  return (
    <div className="App">
    <WhatsApp/>
    <BrowserRouter>
    <RootLayout/>
    <Routes>
     <Route
      index
      element={<Home/>}
      />
    <Route
      path='من-نحن'
      element={<About/>}
      />
    <Route
      path='الخدمات-البرمجية'
      element={<Programming/>}
    />
    <Route
      path='خدمات-الجرافيك'
      element={<Graphic/>}
    />
    <Route
      path='الخدمات-التسويقية'
      element={<Marketing/>}
    />
      <Route
      path='تواصل-معنا'
      element={<ContactUs/>}
      />
    </Routes>
    <Footer/>

    </BrowserRouter>
    </div>
  );
}

export default App;
