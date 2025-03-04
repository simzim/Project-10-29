import './componentsStyle/CategoriesList.css'
import useFetch from '../hooks/useFetch';
import Category from './Category';

export default function CategoriesList(){

    const categories = useFetch(
        'https://gist.githubusercontent.com/simzim/a76940b0cbdc3bcb49c4d3db453c5260/raw/25c60010ee869b52bf62d37ea40dbfbbc438db7c/plantShopCategory.json', 'category', 'fileName')


// const [categories, setCategories] = useState([]);

// useEffect(() => {
//     const fetchCategories = async () =>{
//         try{
//             const response = await fetch('https://gist.githubusercontent.com/simzim/a76940b0cbdc3bcb49c4d3db453c5260/raw/25c60010ee869b52bf62d37ea40dbfbbc438db7c/plantShopCategory.json')
//             const data = await response.json();
//             console.log(data);

//             const categoriesWithImages = await Promise.all(data.map(async (category) => {
//                 const imagePath = await
//                 import(`../img/category/${category.fileName}`);
//                 return {
//                     ...category,
//                     imageSrc: imagePath.default,
//                 };
//             }));

//             console.log(categoriesWithImages);
//             setCategories(categoriesWithImages);

//         }catch(error){
//             console.error('Klaida gaunant kategorijas', error);
//         }
//     }
//     fetchCategories();
// }, []);

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