import { Banner } from './components/organisms/Banner';
import { Navbar } from './components/organisms/Navbar';

function App() {
  return (
    <div className="w-full max-w-[1320px] mx-auto py-4 flex flex-col justify-between">
      <Navbar />

      <Banner />
    </div>
  );
}

export default App;
