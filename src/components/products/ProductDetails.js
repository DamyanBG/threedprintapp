import { useSearchParams } from "react-router-dom";

const ProductDetails = () => {
    const [searchParams] = useSearchParams()
    const productPk = searchParams.get("productId")

    return (
        <section className="text-center">Details are not available!</section>
    )
}

export default ProductDetails