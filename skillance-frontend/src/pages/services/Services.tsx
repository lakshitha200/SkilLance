import { useState, type SetStateAction } from 'react';
import ProductList from '../../components/productList/ProductList'
import Search from '../../components/search/Search'
import './Service.css'

const Services = ({}) => {

    const [query, setQuery] = useState("");

    const handleQuery = (value: string)=>{
        console.log(value)
        setQuery(value);
    }


  return (
    <>
      
      <Search onSetQuery={handleQuery} />

       {/* Main Conten */}
    <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
            <div className="md:w-1/4">
                <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                    <h3 className="font-bold text-lg mb-4">Filters</h3>
                    
                    <div className="mb-6">
                        <h4 className="font-medium mb-3">Category</h4>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">Web Development</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">Graphic Design</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">Digital Marketing</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">Content Writing</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">Video Editing</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="font-medium mb-3">Budget</h4>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="text-primary focus:ring-primary"/>
                                <span className="ml-2">Under $50</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="text-primary focus:ring-primary"/>
                                <span className="ml-2">$50 - $100</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="text-primary focus:ring-primary"/>
                                <span className="ml-2">$100 - $200</span>
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="budget" className="text-primary focus:ring-primary"/>
                                <span className="ml-2">$200+</span>
                            </label>
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <h4 className="font-medium mb-3">Delivery Time</h4>
                        <div className="space-y-2">
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">24 Hours</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">3 Days</span>
                            </label>
                            <label className="flex items-center">
                                <input type="checkbox" className="rounded text-primary focus:ring-primary"/>
                                <span className="ml-2">7 Days</span>
                            </label>
                        </div>
                    </div>
                    
                    <button className="w-full bg-primary text-white py-2 rounded-md hover:bg-green-600 transition">Apply Filters</button>
                    <button className="w-full mt-2 text-gray-600 py-2 rounded-md hover:text-gray-800 transition">Reset Filters</button>
                </div>
            </div>
            
            {/* Services Listing */}
            <ProductList query={query}/>
        </div>
    </div>
    </>
  )
}

export default Services