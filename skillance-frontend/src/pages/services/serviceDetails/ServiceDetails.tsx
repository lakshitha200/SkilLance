
const ServiceDetails = () => {
  return (
    <>
    {/* Breadcrumb */}
    <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
            <a href="#" className="hover:text-primary">Home</a> 
            <a href="#" className="hover:text-primary">Development</a> 
            <a href="#" className="hover:text-primary">API Development</a> 
            <span className="text-gray-800">REST API Development</span>
        </div>
    </div>

    {/* Service Header */}
    <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Column */}
            <div className="lg:w-2/3">
                <h1 className="text-3xl font-bold mb-4">REST API Development with Spring Boot Microservices</h1>
                
                <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                            <i className="fa-solid fa-user text-gray-600 text-xl"></i>
                        </div>
                        <div>
                            <p className="font-semibold">JohnDev</p>
                            <p className="text-sm text-gray-600">Level 2 Seller</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex text-yellow-400 mr-2">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <span className="text-gray-600">(128 reviews)</span>
                    </div>
                </div>
                
                <div className="bg-gray-100 rounded-xl h-64 mb-6 flex items-center justify-center">
                    <i className="fa-solid fa-laptop-code text-5xl text-primary"></i>
                </div>
                
                {/* Tabs */}
                <div className="flex border-b mb-6">
                    <button className="tab-button active py-3 px-6 font-medium">Description</button>
                    <button className="tab-button py-3 px-6 font-medium">About Seller</button>
                    <button className="tab-button py-3 px-6 font-medium">Reviews (128)</button>
                    <button className="tab-button py-3 px-6 font-medium">FAQ</button>
                </div>
                
                {/* Tab Content */}
                <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">About This Service</h2>
                    <p className="text-gray-700 mb-4">I will develop scalable, secure, and well-documented REST APIs using Spring Boot and microservices architecture. Perfect for your web and mobile applications.</p>
                    
                    <h3 className="text-lg font-semibold mb-3">What You'll Get:</h3>
                    <ul className="list-disc pl-5 text-gray-700 mb-6">
                        <li className="mb-2">RESTful API development with Spring Boot</li>
                        <li className="mb-2">Microservices architecture implementation</li>
                        <li className="mb-2">Database integration (MySQL, MongoDB, or PostgreSQL)</li>
                        <li className="mb-2">JWT authentication and authorization</li>
                        <li className="mb-2">API documentation with Swagger/OpenAPI</li>
                        <li className="mb-2">Unit and integration testing</li>
                        <li className="mb-2">Deployment assistance</li>
                    </ul>
                    
                    <h3 className="text-lg font-semibold mb-3">Why Choose Me:</h3>
                    <ul className="list-disc pl-5 text-gray-700">
                        <li className="mb-2">5+ years of experience in API development</li>
                        <li className="mb-2">Deep understanding of microservices patterns</li>
                        <li className="mb-2">Clean, maintainable, and well-documented code</li>
                        <li className="mb-2">Quick response time and regular communication</li>
                    </ul>
                </div>
            </div>
            
            {/* Right Column - Packages */}
            <div className="lg:w-1/3">
                <div className="sticky top-24">
                    <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                        <h2 className="text-xl font-bold mb-4">Packages</h2>
                        
                        <div className="package-card border border-gray-200 rounded-lg p-5 mb-4">
                            <h3 className="font-bold text-lg mb-2">Basic API</h3>
                            <p className="text-gray-600 text-sm mb-4">Simple REST API with basic CRUD operations</p>
                            <div className="flex items-baseline mb-4">
                                <span className="text-2xl font-bold text-primary">$45</span>
                            </div>
                            <ul className="text-sm text-gray-600 mb-5">
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>3 API endpoints</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>Basic authentication</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>MySQL database</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>3-day delivery</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md font-medium hover:bg-gray-300 transition">Select</button>
                        </div>
                        
                        <div className="package-card border-2 border-primary rounded-lg p-5 mb-4 recommended">
                            <h3 className="font-bold text-lg mb-2">Standard API</h3>
                            <p className="text-gray-600 text-sm mb-4">Complete REST API with advanced features</p>
                            <div className="flex items-baseline mb-4">
                                <span className="text-2xl font-bold text-primary">$89</span>
                            </div>
                            <ul className="text-sm text-gray-600 mb-5">
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>10+ API endpoints</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>JWT authentication</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>MongoDB or PostgreSQL</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>API documentation</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>5-day delivery</span>
                                </li>
                            </ul>
                            <button className="w-full bg-primary text-white py-2 rounded-md font-medium hover:bg-green-600 transition">Select</button>
                        </div>
                        
                        {/* Premium Package */}
                        <div className="package-card border border-gray-200 rounded-lg p-5">
                            <h3 className="font-bold text-lg mb-2">Premium API</h3>
                            <p className="text-gray-600 text-sm mb-4">Microservices architecture with full features</p>
                            <div className="flex items-baseline mb-4">
                                <span className="text-2xl font-bold text-primary">$149</span>
                            </div>
                            <ul className="text-sm text-gray-600 mb-5">
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>20+ API endpoints</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>Microservices architecture</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>Advanced authentication</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>Database of your choice</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>Testing & deployment</span>
                                </li>
                                <li className="mb-2 flex items-center">
                                    <i className="fa-solid fa-check text-primary mr-2"></i>
                                    <span>7-day delivery</span>
                                </li>
                            </ul>
                            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded-md font-medium hover:bg-gray-300 transition">Select</button>
                        </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-600">
                        <i className="fa-solid fa-clock mr-2"></i>
                        <span className="mr-4">5-day delivery</span>
                        <i className="fa-solid fa-repeat mr-2"></i>
                        <span>Unlimited revisions</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Related Services */}
    <div className="bg-white py-12">
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
                    <div className="h-40 bg-blue-100 flex items-center justify-center">
                        <i className="fa-solid fa-mobile-screen-button text-blue-600 text-4xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg mb-2">React Native App Development</h3>
                        <p className="text-gray-600 text-sm mb-4">I will develop a cross-platform mobile app using React Native</p>
                        <div className="flex items-center justify-between">
                            <div className="text-primary font-bold">$75.00</div>
                            <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-2">
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star-half-stroke text-sm"></i>
                                </div>
                                <span className="text-gray-600 text-sm">(142)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
                    <div className="h-40 bg-purple-100 flex items-center justify-center">
                        <i className="fa-solid fa-database text-purple-600 text-4xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg mb-2">Database Design & Optimization</h3>
                        <p className="text-gray-600 text-sm mb-4">I will design and optimize your database schema for performance</p>
                        <div className="flex items-center justify-between">
                            <div className="text-primary font-bold">$55.00</div>
                            <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-2">
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-regular fa-star text-sm"></i>
                                </div>
                                <span className="text-gray-600 text-sm">(64)</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md transition duration-300 hover:shadow-lg">
                    <div className="h-40 bg-green-100 flex items-center justify-center">
                        <i className="fa-solid fa-cloud text-green-600 text-4xl"></i>
                    </div>
                    <div className="p-5">
                        <h3 className="font-bold text-lg mb-2">Cloud Deployment</h3>
                        <p className="text-gray-600 text-sm mb-4">I will deploy your application to AWS, Azure, or Google Cloud</p>
                        <div className="flex items-center justify-between">
                            <div className="text-primary font-bold">$65.00</div>
                            <div className="flex items-center">
                                <div className="flex text-yellow-400 mr-2">
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                    <i className="fa-solid fa-star text-sm"></i>
                                </div>
                                <span className="text-gray-600 text-sm">(112)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ServiceDetails