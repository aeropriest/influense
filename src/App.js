import './App.css';
import SelectedCelebrityContextProvider from './context/selected.celebrity.context';
import HeroImage from './components/hero-image/hero-image.component';
import CelebrityImageList from './components/celebrity-image-list/celebrity-image-list.component'

function App() {
  return (
    <div className="App">
    <SelectedCelebrityContextProvider>
      <HeroImage/>
      <CelebrityImageList/>
    </SelectedCelebrityContextProvider>    </div>
  );
}

export default App;
