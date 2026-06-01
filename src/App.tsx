import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
// import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

// Project Pages
import WaikikiAquarium from './projectPages/WaikikiAquarium';
import BrontoBuddies from './projectPages/BrontoBuddies';
import ComingSoon from './projectPages/ComingSoon';

function Home() {
  return <>
    <Hero />
    <Projects />
    <About />
    {/* <Contact /> */}
  </>;
}

export default function App() {
  return <BrowserRouter>
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className="flex-1 flex flex-col pt-18 gap-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/waikiki-aquarium" element={<WaikikiAquarium />} />
          <Route path="/projects/seas-of-tmrw" element={<ComingSoon />} />
          <Route path="/projects/bronto-buddies" element={<BrontoBuddies />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </BrowserRouter>;
}
