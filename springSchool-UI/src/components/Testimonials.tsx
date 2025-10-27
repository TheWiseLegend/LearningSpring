import { useState, useEffect } from "react";

interface Testimonial {
    name: string;
    quote: string;
    avatar: string;
}

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: Testimonial[] = [
        {
            name: "Mario Spe",
            quote: "I am very happy that my son is studying in the Eazy school. The support provided by the teachers is great and the curriculum that they follow is of international standards.",
            avatar: "👨‍💼"
        },
        {
            name: "Petey Cru", 
            quote: "My child never felt pressure of studies in the Eazy School. He is always encouraged to follow his own interest and the school provides wide variety of programs for the students outside studies.",
            avatar: "👩‍💼"
        },
        {
            name: "Anna Sth",
            quote: "Loved the infrastructure and cleanly environment that school maintains. This is very important in the current pandemic situations.",
            avatar: "👩‍🏫"
        },
        {
            name: "Gail For",
            quote: "With the help of Cambridge authorized programs, teachers always enhancing my child classroom experiences by applying new ideas & approaches.",
            avatar: "👨‍🎓"
        },
        {
            name: "Boye Fra",
            quote: "Eazy Schools supports both online and offline classes based on the pandemic conditions to make sure that there is no impact on the children studies. School staff always does their best to accommodate parents request.",
            avatar: "👩‍🎓"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section id="testimonials" className="py-20 bg-white transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="relative overflow-hidden">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="w-full flex-shrink-0 px-8">
                                    <div className="bg-gray-50 p-12 rounded-2xl">
                                        <div className="text-6xl mb-6">{testimonial.avatar}</div>
                                        <blockquote className="text-xl text-gray-700 mb-8 leading-relaxed italic">
                                            "{testimonial.quote}"
                                        </blockquote>
                                        <div className="text-lg font-semibold text-gray-900">
                                            - {testimonial.name}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                                    index === currentIndex 
                                        ? 'bg-blue-600' 
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;