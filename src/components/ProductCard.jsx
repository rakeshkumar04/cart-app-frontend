import { useNavigate } from "react-router-dom";

export default function ProductCard({product}) {

    const navigate = useNavigate();

    const imageUrl = 
    product.images && product.images.length > 0 
    ? `http://localhost:8080${product.images[0].url}` 
    : "https://via.placeholder.com/200";

    return (
        <div style={cardStyle} onClick={() => navigate(`/product/${product.id}`)}>
            {imageUrl && (
                <img src={imageUrl} alt={product.name} 
                style={imageStyle} 
                />
            )}
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <p>{product.category}</p>
            <p>Rating: ⭐{product.ratings}</p>
        </div>
    );
};

const cardStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    cursor: "pointer",
};

const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "10px"
};