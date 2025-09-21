import { useEffect, useState } from "react";
import { gigs } from "../../data/gigs";

type ProductListProps = {
    query: string;
}

type GigType = { id: number; title: string; description: string; badge: string; icon: string; gradient: string; user: string; price: number; rating: number; reviews: number, image:string; }
const ProductList = ({ query }: ProductListProps) => {

    // const [filterValue, setFilter] = useState(query);
    const [gigList, setGigList] = useState<GigType[]>([]);

    useEffect(() => {
        if (query != "") {
            filterProducts();
        } else {
            setGigList(gigs);
        }
    }, [query])

    const filterProducts = () => {
        setGigList(gigList.filter((gig) => gig.title.toLowerCase().includes(query.toLowerCase())));
    }

    return (
        <div className="md:w-3/4">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">All Services</h2>
                <div className="flex items-center">
                    <span className="text-gray-600 mr-2">Sort by:</span>
                    <select className="border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:border-primary">
                        <option>Recommended</option>
                        <option>Newest</option>
                        <option>Price: Low to High</option>
                        <option>Price: High to Low</option>
                        <option>Rating</option>
                    </select>
                </div>
            </div>

            {/* Gigs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gigList.map((gig) => (
                    <div
                        key={gig.id}
                        className="service-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300"
                    >
                        <div className="relative">
                            <div className="h-48" >
                                <img className="h-48 object-cover" src={gig.image} alt="" />
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
            {gigList.length === 0 && (
                <div className="text-center py-6">
                    <p className="text-gray-500 text-lg font-medium">
                        No products match your search.
                    </p>
                </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
                <nav className="flex items-center space-x-2">
                    <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">Previous</a>
                    <a href="#" className="px-3 py-1 rounded-md bg-primary text-white hover:bg-green-600">1</a>
                    <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">2</a>
                    <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">3</a>
                    <span className="px-2 py-1 text-gray-600">...</span>
                    <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">10</a>
                    <a href="#" className="px-3 py-1 rounded-md border border-gray-300 text-gray-600 hover:bg-gray-50">Next</a>
                </nav>
            </div>
        </div>
    )
}

export default ProductList