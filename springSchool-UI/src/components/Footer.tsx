const Footer: React.FC = () => {
    const quickLinks = [
        "About Us",
        "Courses", 
        "Become a Teacher",
        "Contact Us",
        "Career"
    ];

    const exploreLinks = [
        "Blog Posts",
        "Privacy policy",
        "Contact Us", 
        "License & uses",
        "Courses"
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Contact Info */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-6">Contact Info</h3>
                        <div className="space-y-3">
                            <p className="text-gray-300 leading-relaxed">
                                Address: Eazy School, 10001, 5th Avenue, #06 lane street, NY - 62617.
                            </p>
                            <p className="text-gray-300">
                                Phone Number: 
                                <a href="tel:+1-21-673-4587" className="text-blue-400 hover:text-blue-300 ml-1">
                                    +1(21) 673 4587
                                </a>
                            </p>
                            <p className="text-gray-300">
                                Email: 
                                <a href="mailto:info@eazyschool.com" className="text-blue-400 hover:text-blue-300 ml-1">
                                    info@eazyschool.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Explore</h3>
                        <ul className="space-y-3">
                            {exploreLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Subscribe */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Subscribe</h3>
                        <form className="space-y-4">
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition-colors"
                                >
                                    <span className="text-xl">✈️</span>
                                </button>
                            </div>
                            <p className="text-sm text-gray-300">
                                Subscribe to our mailing list and get updates to your email inbox.
                            </p>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-12 pt-8 text-center">
                    <p className="text-gray-300">
                        © 2023 Eazy School. All rights reserved. Design by{" "}
                        <a href="https://w3layouts.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                            W3Layouts
                        </a>
                    </p>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                title="Go to top"
            >
                <span className="text-xl">⬆️</span>
            </button>
        </footer>
    );
};

export default Footer;