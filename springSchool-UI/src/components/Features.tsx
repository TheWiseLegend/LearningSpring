const Features: React.FC = () => {
    const features = [
        {
            icon: "👥",
            title: "Expert Teachers",
            description: "Well experienced teachers for each subject. No common teacher for all subjects.",
            color: "bg-blue-100"
        },
        {
            icon: "📚",
            title: "Quality Education", 
            description: "Best curriculum based on the Cambridge international framework.",
            color: "bg-green-100"
        },
        {
            icon: "🎓",
            title: "Alumni Support",
            description: "Life time Alumni support through various channels available.",
            color: "bg-purple-100"
        },
        {
            icon: "🏛️",
            title: "Best Scholarships",
            description: "Best Scholarships available for the low income family students.",
            color: "bg-orange-100"
        }
    ];

    return (
        <section id="features" className="py-20 bg-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Best Features
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900">
                        Achieve Your Goals With Eazy School
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className="group p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;