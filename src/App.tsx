import { Navbar } from './components/organisms/Navbar';
import { Banner } from './components/organisms/Banner';
import { Skills } from './components/organisms/Skills';
import { Projects } from './components/organisms/Projects';
import { ContactMe } from './components/organisms/ContactMe';
import { Footer } from './components/organisms/Footer';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-banner bg-cover bg-no-repeat relative">
        <div className="max-w-[1396px] mx-auto flex flex-col justify-between">
          <Navbar />
          <Banner />
        </div>
      </div>

      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
