import { Navbar } from './components/organisms/Navbar';
import { Banner } from './components/organisms/Banner';
import { Skills } from './components/organisms/Skills';
import { Projects } from './components/organisms/Projects';
import { ContactMe } from './components/organisms/ContactMe';

function App() {
  return (
    <>
      <div className="w-full h-screen bg-banner bg-cover">
        <div className="max-w-[1320px] mx-auto py-4 flex flex-col justify-between">
          <Navbar />
          <Banner />
        </div>
      </div>

      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
}

export default App;
