const Courses: React.FC = () => {
    const courses = [
        {
            title: "Educational Programs",
            description: "Educations programmes covering core concepts of Maths, English, Science.",
            lessons: 43,
            rating: 4.9,
            category: "Education",
            categoryColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
            image: "📖"
        },
        {
            title: "Best Meditation Classes", 
            description: "Special program focusing the meditation to encourage students from early age.",
            lessons: 72,
            rating: 4.6,
            category: "Meditation",
            categoryColor: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
            image: "🧘"
        },
        {
            title: "Games Program in a Week",
            description: "Games program encouraging the children on the physical activities.",
            lessons: 14,
            rating: 5.0,
            category: "Games",
            categoryColor: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
            image: "🎮"
        }
    ];

    return (
        <section id="courses" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
                        Best Courses
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        Wide variety of Courses for your Child
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {courses.map((course, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                            {/* Course Image */}
                            <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                                <div className="absolute inset-0 flex items-center justify-center text-6xl">
                                    {course.image}
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${course.categoryColor}`}>
                                        {course.category}
                                    </span>
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className="p-6">
                                {/* Course Stats */}
                                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center">
                                        <span className="mr-1">📚</span>
                                        {course.lessons} Lessons
                                    </div>
                                    <div className="flex items-center">
                                        <span className="mr-1">⭐</span>
                                        {course.rating}
                                    </div>
                                </div>

                                {/* Course Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                                    {course.title}
                                </h3>

                                {/* Course Description */}
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {course.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Browse More Button */}
                <div className="text-center">
                    <button className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105">
                        Browse more courses
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Courses;