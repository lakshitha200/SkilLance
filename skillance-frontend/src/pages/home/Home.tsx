import { Link } from "react-router-dom"
import "./Home.css"
import { gigs } from "../../data/gigs";


const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Find the <span className="text-primary">perfect solutions</span> for your project</h1>
                            <p className="text-lg text-gray-600 mb-8">Skil-Lance brings together expert freelancers across tech, design, marketing, and AI to make it happen.</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link to={"/services"} className="bg-primary text-white px-6 py-3 rounded-md text-center font-medium hover:bg-green-600 transition">Find Services</Link>
                                <a href="#" className="border border-primary text-primary px-6 py-3 rounded-md text-center font-medium hover:bg-green-50 transition">Become a Seller</a>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-semibold mb-4 text-center">Our Services</h3>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-green-100 p-4 rounded-lg text-center">
                                        <i className="fa-solid fa-laptop-code text-primary text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">Programming & Tech</p>
                                    </div>
                                    <div className="bg-blue-100 p-4 rounded-lg text-center">
                                        <i className="fa-solid fa-palette text-primary text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">Graphics & Design</p>
                                    </div>
                                    <div className="bg-yellow-100 p-4 rounded-lg text-center">
                                        <i className="fa-solid fa-chart-simple text-yellow-600 text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">Digital Marketing</p>
                                    </div>
                                    <div className="bg-purple-100 p-4 rounded-lg text-center">
                                        <i className="fa-solid fa-video text-purple-600 text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">Video & Animation</p>
                                    </div>
                                    <div className="bg-red-100 p-4 rounded-lg text-center">
                                        <i className="fa-solid fa-pen-fancy text-red-600 text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">Content Writing</p>
                                    </div>
                                    <div className="bg-indigo-100 p-4 rounded-lg text-center">
                                        <i className="fa-brands fa-airbnb text-indigo-600 text-2xl mb-2"></i>
                                        <p className="text-sm font-medium">AI Services</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Popular Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="category-card bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                            <div className="category-icon bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition">
                                <i className="fa-solid fa-laptop-code text-blue-600 text-2xl"></i>
                            </div>
                            <h3 className="font-semibold">Development</h3>
                            <p className="text-sm text-gray-500 mt-2">Web, Mobile, API</p>
                        </div>

                        <div className="category-card bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                            <div className="category-icon bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition">
                                <i className="fa-solid fa-palette text-purple-600 text-2xl"></i>
                            </div>
                            <h3 className="font-semibold">Design</h3>
                            <p className="text-sm text-gray-500 mt-2">UI/UX, Graphics</p>
                        </div>

                        <div className="category-card bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                            <div className="category-icon bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition">
                                <i className="fa-solid fa-chart-simple text-green-600 text-2xl"></i>
                            </div>
                            <h3 className="font-semibold">Marketing</h3>
                            <p className="text-sm text-gray-500 mt-2">SEO, Social Media</p>
                        </div>

                        <div className="category-card bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition cursor-pointer">
                            <div className="category-icon bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition">
                                <i className="fa-solid fa-pen-fancy text-red-600 text-2xl"></i>
                            </div>
                            <h3 className="font-semibold">Writing</h3>
                            <p className="text-sm text-gray-500 mt-2">Content, Copywriting</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-4">Popular Services</h2>
                    <p className="text-center text-gray-600 mb-12">Explore services with top freelancers talent worldwide.</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gigs.slice(1,4).map((gig) => (
                            <div
                                key={gig.id}
                                className="service-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
                            >
                                <div className="relative">
                                    <div className="h-48 w-full" >
                                        <img className="h-48 w-full object-cover" src={gig.image} alt="" />
                                    </div>
                                    {/* <span className="micro-badge absolute bg-primary text-white px-3 py-1 rounded-full">
                                {gig.badge}
                            </span> */}
                                </div>
                                <div className="p-6">
                                    <h3 className="font-bold text-xl mb-2">{gig.title}</h3>
                                    <p className="text-gray-600 mb-4">{gig.description}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                                                <i className="fa-solid fa-user text-gray-600"></i>
                                            </div>
                                            <span className="font-medium">{gig.user}</span>
                                        </div>
                                        <div className="text-primary font-bold">${gig.price}.00</div>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <div className="flex text-yellow-400">
                                            {Array.from({ length: 5 }).map((_, i) => {
                                                if (i < Math.floor(gig.rating)) {
                                                    return <i key={i} className="fa-solid fa-star"></i>;
                                                }
                                                if (i < gig.rating) {
                                                    return <i key={i} className="fa-solid fa-star-half-stroke"></i>;
                                                }
                                                return <i key={i} className="fa-regular fa-star"></i>;
                                            })}
                                        </div>
                                        <span className="text-gray-600 ml-2">({gig.reviews})</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                      
                    </div>

                    <div className="text-center mt-12">
                        <a href="#" className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-green-600 transition">Explore All Services</a>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">How Skil-Lance Works</h2>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center max-w-xs">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-blue-600 text-2xl font-bold">1</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-3">Choose a Service</h3>
                            <p className="text-gray-600">Browse through thousands of microservices-based offerings</p>
                        </div>

                        <div className="text-center max-w-xs">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-green-600 text-2xl font-bold">2</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-3">Hire an Expert</h3>
                            <p className="text-gray-600">Connect with skilled freelancers and discuss your project needs</p>
                        </div>

                        <div className="text-center max-w-xs">
                            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-purple-600 text-2xl font-bold">3</span>
                            </div>
                            <h3 className="font-semibold text-xl mb-3">Get Your Project Done</h3>
                            <p className="text-gray-600">Receive high-quality work with secure payment protection</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home