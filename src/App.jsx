import './App.css';
import SectionCategories from './components/SectionCategories';
import SectionHero from './components/SectionHero';
import SectionBest from './components/SectionBest';


function App() {
  return (
    <div className="App">
      <SectionHero/>
      <SectionCategories/>
      <SectionBest/>
    </div>
  );
}

export default App;
