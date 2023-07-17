import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails(){
    let params = useParams();
    let [product,setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
        .then(response => response.json())
        .then(obj => setProduct(obj));


    },[]);


    return (
        <div className="card sizes">
            <img src ={product.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="price">{product.price}$</p>
            </div>
        </div>
    );   
}

export default ProductDetails;