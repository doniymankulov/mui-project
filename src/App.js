import './App.css';
import Navbar from "./components/Navbar";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {useState} from "react";
import List from "./components/List";
import axios from "axios";


function App() {
    const API = "http://localhost:8000/product";
    const [product, setProduct] = useState([])
    async function createProduct(newProduct){
        await axios.post(API, newProduct)
    }
    async function readProduct(){
        const {data} = await axios(API)
        setProduct(data)
    }
  return (
    <div className="App">

        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/add" element={<AddContact createProduct={createProduct}/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/list" element={<List readProduct={readProduct} product={product}/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
