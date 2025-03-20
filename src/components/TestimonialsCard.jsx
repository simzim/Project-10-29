import "./componentsStyle/TestimonialsCard.css";

export default function TestimonialsCard({name, imageSrc, text, rating}) {

    const renderStars = (rating) => {  
        const stars = [];  
        for (let i = 1; i <= 5; i++) {  
            if (rating >= i) {  
                stars.push(<span key={i} className="star full">★</span>);  
            } else if (rating >= i - 0.5) {  
                stars.push(<span key={i} className="star half">★</span>);  
            } else {  
                stars.push(<span key={i} className="star">★</span>);  
            }  
        }  
        return stars;  
    };  


return (
    <div className="testimonials-card">
        <div className="test-img">
            <img className="client-img" src={imageSrc} alt={name} />
        </div>
        <div className="rating">  
                    {renderStars(rating)}  
                </div>  
        <div className="test-card-text">
            <p className="test-client-text">"{text}"</p>
            <h3 className="test-client-name">{name}</h3>
        </div>
    </div>
  );
}