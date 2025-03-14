import useFetch from '../hooks/useFetch';
import './componentsStyle/BestCardList.css';
import BestCard from './BestCard';
import RiseLoader from "react-spinners/RiseLoader";

export default function BestCardList(){

    //    // const [bestcards, setBestCards] = useState([]);

    //    const bestcards = useFetch(
    //     'https://gist.githubusercontent.com/simzim/b210a5a8c289bc8189bfe207acea3801/raw/09cba377c8d554695f25b6da87eeb2b67aa72133/BestTags.json', 
    //     'bestSelling', 
    //     'fileName')


    const { data: bestcards, loading, error } = useFetch(
        'https://gist.githubusercontent.com/simzim/b210a5a8c289bc8189bfe207acea3801/raw/09cba377c8d554695f25b6da87eeb2b67aa72133/BestTags.json', 
        'bestSelling', 
        'fileName')

        if (loading) 
                    return(
                        <div className='bestCards-list'>
                            <RiseLoader
                                color="#50806B"
                                margin={2}
                            />
                        </div> 
                       )
               
                if (error) return (
                    <div className='bestCards-list'>
                        Error: {error}
                    </div> 
                   );


    return(
        <div className='bestCards-list'>
            {
                bestcards.map((card) =>(
                    <BestCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        title ={card.title}
                    />
                ))
            }
        </div>
    )
}