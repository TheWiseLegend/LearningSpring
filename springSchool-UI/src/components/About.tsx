const About: React.FC = () => {
    const benefits = [
        "Special Education",
        "Access more than 100K online courses", 
        "Traditional Academies"
    ];

    return (
        <section id="about" className="py-20 bg-gray-50 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Section */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative">
                            {/* Main image placeholder */}
                            <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl flex items-center justify-center">
                                <span className="text-6xl">📖</span>
                            </div>
                            
                            {/* Info box overlay */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-gray-200 max-w-xs">
                                <h6 className="font-bold text-gray-900 mb-2">
                                    Get an Appointment Today!
                                </h6>
                                <p className="text-sm text-gray-600 mb-3">
                                    Call today to know more details and to talk with our expert.
                                </p>
                                <a 
                                    href="tel:1-800-856-4321" 
                                    className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                                >
                                    <span className="mr-2">📞</span> 1-800-856-4321
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 lg:pl-8">
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            We Are The Best Choice For Your Child
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            With over 20 years of experience, best teachers, world-class infrastructure,
                            larger Alumni community, we are the best choice for your child education.
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-green-500 mr-3 text-xl">✓</span>
                                    <span className="text-gray-700">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;