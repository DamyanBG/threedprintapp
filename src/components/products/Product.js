import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product-details?productId=${product.pk}`}>
                <Card.Img src={product.photo_url} />
            </Link>

            <Card.Body>
                <Link to={`/product-details?productId=${product.pk}`}>
                    <Card.Title as="div">
                        <strong>{product.title}</strong>
                    </Card.Title>
                </Link>

                {/* <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text> */}


                <Card.Text as="h3">
                    ${product.amount}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
