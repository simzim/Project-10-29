import './App.css';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';
import SectionBest from './components/SectionBest';
import SectionHot from './components/SectionHot';


function App() {
  return (
    <div className="App">
      <SectionHero/>
      <SectionCategories/>
      <SectionBest/>
      <SectionHot/>
    </div>
  );
}

export default App;
