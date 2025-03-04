import { useEffect, useState} from "react";

function useFetch(url, folder, apiImg){

  const [result, setResult] = useState([])

      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await fetch(url);
                  const data = await response.json();
                  console.log(data);
                
                  const dataWithImages = await Promise.all(data.map(async (d) => {
                    
                    const imagePath = await 
                    import(`../img/${folder}/${d[apiImg]}`);  
                                       
                    return {
                        ... d,
                        imageSrc: imagePath.default,
                    };
                    
                }));
                    setResult(dataWithImages);
              } catch (error){
                  console.error('Klaida gaunant duomenis', error);
              }
          };
          fetchData();
      }, []);
      return result;
}
export default useFetch;