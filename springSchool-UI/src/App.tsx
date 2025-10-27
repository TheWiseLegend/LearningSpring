import { useState, useEffect } from "react";

interface WelcomeData {
    title: string;
    message: string;
    description: string;
    bio: string;
}

function App() {
    const [data, setData] = useState<WelcomeData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://localhost:8080/api/welcome"
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data from server");
                }
                const data: WelcomeData = await response.json();
                setData(data);
            } catch (error) {
                console.error(error);
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl text-gray-600">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl text-red-600">Error: {error}</div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-xl text-gray-600">No data</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-12 space-y-6">
                <h1 className="text-5xl font-bold text-gray-900 text-center">
                    {data.title}
                </h1>
                <h2 className="text-3xl font-semibold text-blue-600 text-center">
                    {data.message}
                </h2>
                <p className="text-xl text-gray-700 text-center">
                    {data.description}
                </p>
                <p className="text-lg text-gray-600 text-center italic">
                    {data.bio}
                </p>
            </div>
        </div>
    );
}

export default App;
