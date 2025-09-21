import { useState } from "react";

type SearchProps = {
    onSetQuery: (query: string) => void;
};
const Search = ({ onSetQuery }: SearchProps) => {
    const [query, setQuery] = useState("");
    const getQuery = (value: string) => {
        setQuery(value);
    }


    return (

        <>
            {/* Search Header */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mb-6">
                        Find the Perfect Service
                    </h1>

                    <div className="max-w-2xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search for services..."
                                value={query}
                                onChange={(e) => getQuery(e.target.value)}
                                className="w-full px-6 py-4 pr-28 rounded-full border-2 border-gray-200 focus:outline-none focus:border-primary shadow-sm"
                            />

                            {/* Clear Button */}
                            {query && (
                                <button
                                    onClick={() => {onSetQuery("");setQuery("")}}
                                    className="absolute right-24 mr-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            )}

                            {/* Search Button */}
                            <button
                                onClick={() => onSetQuery(query)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full hover:bg-green-600 transition"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Search;
