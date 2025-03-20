import './componentsStyle/DealsCardList.css';
import PlantCard from './PlantCard';
import RiseLoader from "react-spinners/RiseLoader";
import { useProducts } from '../hooks/useProducts';

export default function DealsList(){

    const { products, loading, error } = useProducts();

    if (loading) 
        return(
            <div className='hotCards-list'>
                <RiseLoader
                    color="#50806B"
                    margin={2}
                />
            </div> 
           )
   
    if (error) return (
        <div className='hotCards-list'>
            Error: {error}
        </div> 
       );

    const sortedProducts = products.sort((a, b) => b.discount - a.discount);  
    const topDiscounted = sortedProducts.slice(0, 4);  

    return(
        <div className='hotCards-list'>
            {
                topDiscounted.map((card) =>(
                    <PlantCard
                        key={card.id}
                        plantid={card.id}
                        imageSrc={card.imageSrc}
                        title ={card.title}
                        price = {card.price}
                        showDiscount={true}
                        discount={card.discount}
                    />
                ))
            }

        </div>


    )

}