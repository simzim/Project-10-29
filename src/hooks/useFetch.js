import { useEffect, useState } from "react";

function useFetch(url, folder, apiImg) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to retrieve data from the API');
                }
                const data = await response.json();
                //console.log(data);

                const dataWithImages = await Promise.all(data.map(async (d) => {
                    let imagePath;
                    try {
                        imagePath = await import(`../img/${folder}/${d[apiImg]}`);
                    } catch (error) {
                        imagePath = await import(`../img/empty.svg`);
                    }
                    // const imagePath = await 
                    // import(`../img/${folder}/${d[apiImg]}`);  

                    return {
                        ...d,
                        imageSrc: imagePath.default,
                    };

                }));
                // loader testavimas
                //await new Promise((resolve) => setTimeout(resolve, 5000));

                setData(dataWithImages);
            } catch (error) {
                setError(error.message); 
            } finally {
                setLoading(false); 
            }
        };
        fetchData();
    }, [url, folder, apiImg]); 
    return { data, loading, error };
}
export default useFetch;