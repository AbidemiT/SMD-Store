import React, {useContext, useState} from 'react';
import ProductContext from "../../context/Product/productContext";
import PhoneImg from "./iphone-bg.jpg";

const ProductForm = (props) => {
    const productContext = useContext(ProductContext);
    const {addProduct} = productContext;

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        brand: "",
        image: [],
        description:"",
        quantity: ""
    })

    const {name, price, brand, image, description, quantity} = product;

    const onSubmit = (e) => {
        e.preventDefault();
        
        addProduct(product);
        // props.history.push("/store");
    }

    const onChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }
    const onBrandChange = (e) => {
        setProduct({
            ...product,
            brand: e.target.value,
        });
    }
    const onDescChange = (e) => {
        setProduct({
            ...product,
            description: e.target.value,
        });
    }
    const onFileChange = (e) => {
        setProduct({
            ...product,
            image: image.push(e.target.files[0])
        });

        console.log(image);
    }

    return (
        <div className="product_form-container box-shadow-product">
           <div className="content">
                <h3>Add New Product</h3>
           </div>
           <div className="form-container">
               <form onSubmit={onSubmit}>
                   <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" placeholder="Product Name" value={name} onChange={onChange}/>
                   </div>
                   <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" placeholder="Product Price" value={price} onChange={onChange}/>
                   </div>
                   <div className="form-group">
                        <label htmlFor="name">Image</label>
                        {/* <input type="text" name="name" placeholder="Product Name" value={} onChange={onChange}/> */}
                        <input type="file" name="image" placeholder="Product Image" onChange={onFileChange}/>
                   </div>
                   <div className="form-group">
                        <label htmlFor="name">Brand</label>
                        <select value={brand} onChange={onBrandChange}>
                            <option value="nokia">Nokia</option>
                            <option value="samsung">Samsung</option>
                            <option value="apple">Apple</option>
                            <option value="infinix">Infinix</option>
                            <option value="tecno">Tecno</option>
                        </select>
                   </div>
                   <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="text" name="quantity" placeholder="Product Price" value={quantity} onChange={onChange}/>
                   </div>
                   <div className="form-group">
                        <label htmlFor="description">Description</label>
                        {/* <input type="text" className="custom-description" name="description" placeholder="Product Description" value={description} onChange={onChange}/> */}
                        <textarea value={description} onChange={onDescChange}></textarea>
                   </div>

                   <div className="form-group">
                       <input type="submit" className="btn btn-dark text-light" value="Add Product"/>
                   </div>
               </form>
           </div>
        </div>
    )
}

export default ProductForm;
