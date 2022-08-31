import { useEffect, useState } from "react";

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
                    <></>
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