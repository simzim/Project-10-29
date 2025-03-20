import TestimonialsCard from './TestimonialsCard';
import './TestimonialsList.css';
import RiseLoader from "react-spinners/RiseLoader";
import useFetch from '../hooks/useFetch';

export default function TestimonialsList(){

    const { data: testimonials, loading, error } = useFetch(
        'https://gist.githubusercontent.com/simzim/b210a5a8c289bc8189bfe207acea3801/raw/09cba377c8d554695f25b6da87eeb2b67aa72133/BestTags.json', 
        'clients', 
        'img')

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
        <div className='testimonials-list'>
            {
                testimonials.map((card) =>(
                    <TestimonialsCard
                        key={card.id}
                        imageSrc={card.imageSrc}
                        name ={card.name}
                        text = {card.text}
                        rating={card.rating}
                    />
                ))
            }
        </div>
    )
}