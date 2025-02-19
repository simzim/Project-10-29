import Header from './Header';
import Hero from './Hero';
import './SectionHero.css';
import TopBaner from './TopBaner';

export default function SectionHero() {
  return (
    <section className=''>
      <TopBaner/>
      <Header/>
      <Hero/>
    </section>
  );
}

