import { useEffect, useState } from "react";
import noImage from "../public/no-image-available-image.jpg"
import { Row, Col } from 'react-bootstrap'
import Product from "./Product";

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
        <div>
            <h1>Products</h1>
            {
                products.length > 0 ? (
                    <Row>
                        {
                            products.map(pr => (
                                // <div key={pr.pk}>
                                //     <div className="list-inline-item border border-dark">
                                //         <img
                                //             src={pr.photo_url}
                                //             alt="No-Image"
                                //             style={{ width: "120px" }}
                                //             onError={(e) => (e.target.onerror = null, e.target.src = noImage)}
                                //         />
                                //         <h4>{pr.title}</h4>
                                //         <p>{pr.description}</p>
                                //         <p>{pr.amount}</p>
                                //     </div>
                                // </div>
                                <Col key={pr.pk} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={pr} />
                                </Col>
                            ))
                        }
                    </Row>
                ) : (
                    <div className="container-xl">
                        <h2 className="text-center display-4 pt-5">No products available!</h2>
                    </div>
                )
            }
        </div>
    )
}

export default Products;