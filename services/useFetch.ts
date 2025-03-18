import { useEffect, useState } from "react"

// Accept fetchFunction as Parameter
// Promise will be of a Generic Type <T>
const useFetch = <T>(fetchFunction: () => Promise<T>, autoFetch = true) => {
    // Defining some states that could be null too
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async() => {
        try {
            setLoading(true);   // start the loading action
            setError(null);

            const result = await fetchFunction();
            setData(result);
            
        } catch (err) {
            // @ts-ignore
            setError(err instanceof Error ? err: new Error('An error occured'));
        } 
        // Executes when either a Try succeeds or Catch finishes
        finally {
            setLoading(false);
        }
    }

    const reset = () => {
        setData(null);
        setLoading(false);
        setError(null);
    }


    useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);

    return { data, loading, error, refetch: fetchData, reset };
}

export default useFetch;