import { useEffect } from "react";

const useFetch = (fetchfunction: () => Promise<T>, autoFetch = true ) =>  {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
}

const fetchData =  async ()  => {
    try{
        setLoading(true);
        setError(null);
        
        const result = await fetchFunction();

        setData(result);
    }catch(err){
        // @ts-ignore
        setError(err instanceof Error ? err: new Error('An error occured'))
    }finally{
        setLoading(false);
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }

    useEffect(() => {
        if(autofetch){
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}