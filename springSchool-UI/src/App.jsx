import {useState, useEffect} from 'react'
import './App.css'

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/welcome");
                if (!response.ok) {
                    throw new Error("Failed to fetch data from server");
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [])


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="App">
            <h1>{data.title}</h1>
            <h2>{data.message}</h2>
            <p>{data.description}</p>
        </div>
    );
}

export default App;