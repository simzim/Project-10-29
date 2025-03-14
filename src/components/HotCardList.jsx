import './componentsStyle/HotCardList.css';
import PlantCard from './PlantCard';
import useFetch from '../hooks/useFetch';
import RiseLoader from "react-spinners/RiseLoader";
import { useProducts } from '../hooks/useProducts';


export default function HotCardList(){

    // const products = useFetch(
    // 'https://gist.githubusercontent.com/simzim/f6ce627e8265fc219ce5c3eb72144942/raw/94298c766cc28bedd1878f136317980307761310/plants.json', 
    // 'plants', 
    // 'image')


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


    const filteredProducts = products.filter(product => product.rating === 5);  
                    
    return(
        <div className='hotCards-list'>
            {
                filteredProducts.map((card) =>(
                    
                    <PlantCard
                        key={card.id}
                        plantid={card.id}
                        imageSrc={card.imageSrc}
                        title ={card.title}
                        price = {card.price}
                        showDiscount={false}
                        discount={card.discount}
                    />
                ))
            }
        </div>
    )
}