import './componentsStyle/SectionTestimonials.css'
import TestimonialsList from './TestimonialsList';

export default function SectionTestimonials(){

    return (
        <section className='light-bg'>
            <div className="wrapper section-testimonials">
                <h2 className='testimonials-title'>Testimonials</h2>
                <p className='testimonials-text'>Plant parents love us</p>
                
                <TestimonialsList/>
            </div>
        </section>
    );
}