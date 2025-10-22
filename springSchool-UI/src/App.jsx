import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from Spring Boot API
        fetch('http://localhost:8080/api/welcome')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []); // Empty array means this runs once when component mounts

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