import Title from './Title';
import './componentsStyle/SectionHot.css'
import HotCardList from './HotCardList';

export default function SectionHot(){

    

    return (
        <section className='light-bg'>
            <div className="wrapper section-hot">
                <Title text1 = 'Hottest' text2 = 'Plants' showLink={true}/>
                <HotCardList/>
            </div>
        </section>
    );
}