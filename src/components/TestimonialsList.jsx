import TestimonialsCard from './TestimonialsCard';
import './componentsStyle/TestimonialsList.css';
import RiseLoader from "react-spinners/RiseLoader";
import useFetch from '../hooks/useFetch';

export default function TestimonialsList(){

    const { data: testimonials, loading, error } = useFetch(
        'https://gist.githubusercontent.com/simzim/8baf7cc7f3cd739a5a17c151098e0898/raw/cbd3d74805690135f6ed538206264ac73c52d0ac/testimonials.json', 
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