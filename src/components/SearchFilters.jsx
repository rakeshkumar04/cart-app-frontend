import { useState } from "react";

export default function SearchFilters({onSearch}) {
    const [filters, setFilters] = useState({
        keyword: "",
        category: "",
        minPrice: "",
        maxPrice: "",
        ratings: ""
    });

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    const handleReset = () => {
        const empty = {
            keyword: "",
            category: "",
            minPrice: "",
            maxPrice: "",
            ratings: ""
        }

        setFilters(empty);
        onSearch(empty);
    };

    const handleSearch = () => {
        console.log("Filters -> ", filters);
        onSearch(filters);
    };

    return (
        <div style={container}>
            <input 
                type="text" 
                name="keyword" 
                placeholder="Search Product..." 
                value={filters.keyword} 
                onChange={handleChange} 
            />

            <input 
                type="text" 
                name="category" 
                placeholder="Category" 
                value={filters.category} 
                onChange={handleChange} 
            />

            <input 
                type="number" 
                name="minPrice" 
                placeholder="Min Price" 
                value={filters.minPrice} 
                onChange={handleChange} 
            />

            <input 
                type="number" 
                name="maxPrice" 
                placeholder="Max Price" 
                value={filters.maxPrice} 
                onChange={handleChange} 
            />

            <input 
                type="number" 
                name="ratings" 
                placeholder="Min Rating" 
                value={filters.ratings} 
                onChange={handleChange} 
            />

            <button type="button" onClick={handleSearch}>Search</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </div>
    )
};

const container = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap"
};
