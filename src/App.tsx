import { Banner } from './components/organisms/Banner';
import { Navbar } from './components/organisms/Navbar';
import { Skills } from './components/organisms/Skills';

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
    </>
  );
}

export default App;
