import { useEffect, useState } from "react";
import noImage from "../public/no-image-available-image.jpg"

const Products = () => {
    const token = localStorage.getItem('token')
    const autorizationBody = `Bearer ${token}`
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/workers/products`, {
            headers: {
                'Authorization': autorizationBody
            }
        })
            .then(resp => resp.json())
            .then(json => {
                console.log(json)
                setProducts(json)
            })
    }, [])

    return (
        <>
            {
                products.length > 0 ? (
                    products.map(pr => (
                        <div className="container" key={pr.pk}>
                            <div className="list-inline-item border border-dark">
                                <img 
                                    src={pr.photo_url} 
                                    alt="No-Image" 
                                    style={{ width: "120px" }}
                                    onError={(e) => (e.target.onerror = null, e.target.src = noImage)}
                                />
                                <h4>{pr.title}</h4>
                                <p>{pr.description}</p>
                                <p>{pr.amount}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="container-xl">
                        <h2 className="text-center display-4 pt-5">No products available!</h2>
                    </div>
                )
            }
        </>
    )
}

export default Products;