import './componentsStyle/CategoriesList.css'
import useFetch from '../hooks/useFetch';
import Category from './Category';
import RiseLoader from "react-spinners/RiseLoader";

export default function CategoriesList(){

    const { data: categories, loading, error } = useFetch(
        'https://gist.githubusercontent.com/simzim/a76940b0cbdc3bcb49c4d3db453c5260/raw/25c60010ee869b52bf62d37ea40dbfbbc438db7c/plantShopCategory.json', 'category', 'fileName')

        if (loading) 
            return(
                <div className='categories-list'>
                    <RiseLoader
                        color="#50806B"
                        margin={2}
                    />
                </div> 
               )
       
        if (error) return (
            <div className='categories-list'>
                Error: {error}
            </div> 
           );

return (
    <div className='categories-list'>
        {
            categories.map((category) => (
                <Category
                    key={category.id}
                    imageSrc={category.imageSrc}
                    title={category.title}
                />
            ))
        }
    </div>
)



}