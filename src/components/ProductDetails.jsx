import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import API from "../api/axios";


export default function ProductDetails() {

    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const fetchProduct = async () => {
        try {
            const res = await API.get(`/product/${id}`);
            setProduct(res.data);
            console.log("Product Called -> ", res.data);
        } catch (error) {
            console.log("API Error -> ", error);
        }
    };

    if (!product) return <h2>Loading....</h2>

    return (
        <div style={{padding: "20px"}}>
            <h2>{product.name}</h2>

            <div style={imageContainer}>
                {product.images?.map((image, index) => {
                    return <img 
                        src={`http://localhost:8080${image.url}`} 
                        alt={product.name}
                        key={index}
                        style={detailImage}
                    />
                })}
            </div>

            <p><b>Price:</b> ₹{product.price}</p>
            <p><b>Category:</b> {product.category}</p>
            <p><b>Seller:</b> {product.seller}</p>
            <p><b>Stock:</b> {product.stock}</p>
            <p><b>Rating:</b> ⭐ {product.ratings}</p>
            <p><b>Description:</b> {product.description}</p>
        </div>
    )
};

const imageContainer = {
    display: "flex",
    gap: "12px",
    marginBottom: "20px"
};

const detailImage = {
    width: "250px",
    height: "250px",
    objectFit: "cover",
    borderRadius: "12px"
};
