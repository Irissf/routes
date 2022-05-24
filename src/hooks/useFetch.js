import { useEffect, useState } from "react"

export const useFetch = (url) => {
    //la solicitud a nuestra api

    const [data, setData] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        setLoading(true);
        fetch(url) 
            .then(res => res.json())
            .then((data) => setData(data)) //en data está nuestro array con los objetos
            .catch(e => setError('Error de servidor'))
            .finally(()=>setLoading(false))
       
    }, [url]);

    return {data, error, loading};
}
