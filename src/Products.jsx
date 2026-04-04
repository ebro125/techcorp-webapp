// src/Products.jsx
import React from "react";

function Products() {

    const productList = [
        { id: 1, name: "Tech Gadget Pro", price: "$199" },
        { id: 2, name: "Gadget Pro", price: "$399" },
        { id: 3, name: "Tech Gadget", price: "$299" }
    ]
    return (
        <>
            <section>
                <h2>Our Products</h2>
                <div>
                    {productList.map((product) => (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <p>Price: {product.price}</p>
                            <button>Buy Now</button>

                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Products;