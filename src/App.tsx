import { Banner } from './components/organisms/Banner';
import { Navbar } from './components/organisms/Navbar';

function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto">
      <Navbar />

      <Banner />
    </div>
  );
}

export default App;
