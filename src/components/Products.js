import { useContext, useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap'
import Product from "./Product";
import { UserContext } from "../context/UserProvider";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { user } = useContext(UserContext)

    useEffect(() => {
        if (!user.token) return
        fetchProducts()
    }, [user])

    const fetchProducts = () => {
        setLoading(true)
        fetch(`http://localhost:5000/workers/products`, {
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })
            .then(resp => resp.json())
            .then(json => {
                setProducts(json)
            })
            .finally(() => setLoading(false))
    }

    if (loading) {
        return <div className="text-center display-4 pt-5">LOADING</div>
    }

    return (
        <div>
            <h1 className="pt-xl-5">Products</h1>
            {
                products.length > 0 ? (
                    <Row>
                        {
                            products.map(pr => (
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