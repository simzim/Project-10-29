import Title from './Title';
import './componentsStyle/SectionBest.css'
import BestCardList from './BestCardList';

export default function SectionBest(){
    return (

        <section className="wrapper section-best">
            <Title text1 = 'Best' text2 = 'Selling' showLink={true}/>
            <BestCardList/>
        </section>

    );
}