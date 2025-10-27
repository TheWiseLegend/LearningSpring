import { useState, useEffect, useRef } from "react";

interface StatItem {
    icon: string;
    count: number;
    label: string;
}

const Statistics: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const sectionRef = useRef<HTMLElement>(null);

    const stats: StatItem[] = [
        { icon: "🎓", count: 2458, label: "Current Students" },
        { icon: "🏢", count: 12, label: "Our Branches" },
        { icon: "📚", count: 128, label: "Total Courses" },
        { icon: "🏆", count: 543, label: "Awards Won" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                    startCounting();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    const startCounting = () => {
        stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.count / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= stat.count) {
                    current = stat.count;
                    clearInterval(timer);
                }
                setCounts(prev => {
                    const newCounts = [...prev];
                    newCounts[index] = Math.floor(current);
                    return newCounts;
                });
            }, 20);
        });
    };

    return (
        <section 
            ref={sectionRef}
            id="stats" 
            className="py-20 bg-gray-50 transition-colors duration-300"
        >
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Our Statistics
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">
                        We are Proud to Share with You
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-blue-600 mb-2">
                                    {counts[index].toLocaleString()}
                                </div>
                                <p className="text-gray-600 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Statistics;