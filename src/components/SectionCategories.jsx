
import CategoriesList from './CategoriesList';
import './SectionCategories.css';
import Title from './Title';


export default function SectionCategories() {
  return (
    <section className='wrapper section-categories'>
        <Title text1='Shop' text2='by Category' showLink={true}/>
        <CategoriesList/>
    </section>
  );
}