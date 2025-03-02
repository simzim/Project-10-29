// import useFetch from '../hooks/useFetch';
import './componentsStyle/BestCardList.css';
import BestCard from './BestCard';
import { useEffect, useState } from 'react';

export default function BestCardList(){

    const [bestcards, setBestCards] = useState([]);

    // const bestcards = useFetch(
    //     'https://gist.githubusercontent.com/simzim/b210a5a8c289bc8189bfe207acea3801/raw/09cba377c8d554695f25b6da87eeb2b67aa72133/BestTags.json', 
    //     'bestSelling', 
    //     'fileName')


    useEffect(() => {
        const fetchBestCards = async () => {
            try {
                const response = await fetch('https://gist.githubusercontent.com/simzim/b210a5a8c289bc8189bfe207acea3801/raw/09cba377c8d554695f25b6da87eeb2b67aa72133/BestTags.json');
                const data = await response.json();
                    console.log(data);
                
                const bestCardsWithImages = await Promise.all(data.map(async (bestCard) => {
                        const imagePath = await 
                        import(`../img/bestSelling/${bestCard.fileName}`);
                        return {
                            ... bestCard,
                            imageSrc: imagePath.default,
                        };
                    }));
                    console.log(bestCardsWithImages);
                setBestCards(bestCardsWithImages);
            } catch (error){
                console.error('Klaida gaunant kategorijas', error);
            }
        };
        fetchBestCards();
    }, []);


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