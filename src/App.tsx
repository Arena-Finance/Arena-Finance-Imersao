// App Component
import NoiseOverlay from './components/NoiseOverlay';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Features from './components/Features';
import Protocol from './components/Protocol';
import Audience from './components/Audience';
import Offer from './components/Offer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black-abs min-h-screen text-white overflow-x-hidden selection:bg-gold selection:text-black-abs">
      <NoiseOverlay />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Protocol />
        <Audience />
        <Offer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
