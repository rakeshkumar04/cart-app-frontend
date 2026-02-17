import { useEffect, useState } from "react"
import API from "../api/axios";
import ProductCard from "./ProductCard";
import SearchFilters from "./SearchFilters";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(0);
    const [size] = useState(5);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchProducts();
    },[page]);

    const fetchProducts = async () => {
        try {
            const res = await API.get(
                `/product?page=${page}&size=${size}`
            );
            console.log("API -> ", res.data);

            setProducts(res.data.products);

            const total = res.data.totalProducts;
            setTotalPages(Math.ceil(total/size));

        } catch (error) {
            console.log("API Error -> ", error);
        }
    }

    const searchProducts = async (filters) => {
        console.log("Search called -> ", filters);

        try {
            const params = new URLSearchParams();

            if (filters.keyword)
                params.append("keyword", filters.keyword);

            if (filters.category)
                params.append("category", filters.category);

            if (filters.minPrice)
                params.append("minPrice", filters.minPrice);

            if (filters.maxPrice)
                params.append("maxPrice", filters.maxPrice);

            if (filters.ratings)
                params.append("ratings", filters.ratings);

            const url = `/product/search?${params.toString()}`;
            console.log("Final URL -> ", url);   // debug log

            const res = await API.get(url);

            console.log("Search API -> ", res.data);
            setProducts(res.data);

        } catch (error) {
            console.log("Search Error -> ", error);
        }
    };


    return (
        <div style={{padding: "20px"}}>
            <h2>Products</h2>

            <SearchFilters onSearch={searchProducts}/>

            {products.map((product) => (
                <ProductCard 
                    key={product.id} 
                    product={product}
                />
            ))}

            {/* Pagination Controls */}

            <div style={paginationStyle}>
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0}
                >
                    Previous
                </button>

                <span>
                    Page {page + 1} of {totalPages}
                </span>

                <button
                onClick={() => setPage(page + 1)}
                disabled={page + 1 === totalPages}
                >
                    Next
                </button>
            </div>

        </div>
    )
};

const paginationStyle = {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    alignItems: "center"
}

