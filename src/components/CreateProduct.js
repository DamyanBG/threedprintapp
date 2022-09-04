import { useState } from "react";

const initialProductInfoObject = {
    productTitle: "",
        description: "",
        image: "",
        amount: ""
}

const CreateProduct = () => {
    const token = localStorage.getItem('token')
    const autorizationBody = `Bearer ${token}`
    const [productInfo, setProductInfo] = useState(initialProductInfoObject)

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const handleOnChange = (e) => {
        setProductInfo({
            ...productInfo,
           [e.target.name]: e.target.value
        })
    }

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const fileExtension = file?.name?.split(".")[1]
        const base64 = await convertToBase64(file);
        const goodBase64 = base64.split(",")[1]
        setProductInfo({
            ...productInfo,
            image: goodBase64,
            extension: fileExtension
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const postBody = {
            title: productInfo.productTitle,
            description: productInfo.description,
            amount: productInfo.amount,
            photo: productInfo.image,
            photo_extension: productInfo.extension
        }
        fetch(`http://localhost:5000/workers/products`, {
            method: "POST",
            body: JSON.stringify(postBody),
            headers: {
                'Authorization': autorizationBody,
                'Content-Type': 'application/json'
            }
        })
            .then(resp => resp.json())
            .then(json => {
                if (json.photo_url) {
                    setProductInfo(initialProductInfoObject)
                }
             })
            .catch(() => alert("Fetch error!"))
    }

    console.log(productInfo)

    return (
        <div className="container">
            <h1 className="text-center">Create product</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-end">
                        Product title
                    </label>
                    <div className="col-sm-4">
                        <input
                            type="text" 
                            className="form-control" 
                            name="productTitle"
                            value={productInfo.productTitle}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-end">
                        Description
                    </label>
                    <div className="col-sm-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="description"
                            value={productInfo.description}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-end">
                        Amount
                    </label>
                    <div className="col-sm-4">
                        <input 
                            type="text" 
                            className="form-control" 
                            name="amount"
                            value={productInfo.amount}
                            onChange={handleOnChange}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-4 col-form-label text-end">
                        Upload image
                    </label>
                    <div className="col-sm-4">
                        <input 
                            type="file" 
                            className="form-control" 
                            name="image"
                            // value={productInfo.image}
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <button type="submit">
                        Create product
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateProduct;