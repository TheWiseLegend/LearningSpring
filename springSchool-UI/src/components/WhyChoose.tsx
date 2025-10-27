const WhyChoose: React.FC = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Why Choose Us
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Experienced Teachers And Safe Environment
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Expert Teachers */}
                    <div className="group relative overflow-hidden rounded-2xl h-64">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="relative h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-6xl mb-4">👨‍🏫</div>
                                <h3 className="text-2xl font-bold">Expert Teachers</h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-blue-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Safe Environment */}
                    <div className="group relative overflow-hidden rounded-2xl h-64">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-600"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="relative h-full flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-6xl mb-4">🏛️</div>
                                <h3 className="text-2xl font-bold">Safe Environment</h3>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-green-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;