import React, {useState} from 'react';
import {dividerClasses} from "@mui/material";

const AddContact = ({createProduct}) => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [descr, setDescr] = useState('')
    const [image, setImage] = useState('')

    function handleProduct(){
        let newProduct = {
            title,
            price,
            descr,
            image
        }
        createProduct(newProduct)
        setTitle('')
        setPrice('')
        setDescr('')
        setImage('')
    }

    return (
        <div>
            <h3>Add Product</h3>
            <div><input type="text" value={title} placeholder="title" onChange={(e) => setTitle(e.target.value)}/></div>
            <div><input type="text" value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)}/></div>
            <div><input type="text" value={descr} placeholder="desc"  onChange={(e) => setDescr(e.target.value)}/></div>
            <div><input type="text" value={image} placeholder="Image" onChange={(e) => setImage(e.target.value)}/></div>
            <div>
                <button onClick={handleProduct}>create</button>
            </div>
        </div>
    );
};

export default AddContact;