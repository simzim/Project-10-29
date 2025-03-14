import { createContext} from 'react';
import useFetch from '../hooks/useFetch';

const ProductsContext = createContext(); // konteksto objektas

export function ProductsProvider({children}) {
    

    const { data: products, loading, error } = useFetch(
        'https://gist.githubusercontent.com/simzim/f6ce627e8265fc219ce5c3eb72144942/raw/94298c766cc28bedd1878f136317980307761310/plants.json', 
        'plants', 
        'image')

        // const refreshProducts = () => {
        //     console.log('Atnaujinami produktai...');
        //     // Jei reikia tikro atnaujinimo, galime pridėti logiką vėliau
        //   };

        const value = {
            products,
            loading,
            error,
          };

          return (
            <ProductsContext.Provider value={value}>
              {children}
            </ProductsContext.Provider>
          );
}

export default ProductsContext;