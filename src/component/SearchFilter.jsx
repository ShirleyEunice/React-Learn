import React, { useState } from 'react'
const products = [
  "Apple",
  "Orange",
  "Banana",
  "Mango",
  "Grapes",
  "Pineapple"
];

const SearchFilter = () => {
    const [search, setSearch] = useState("");
    const [product, setProduct] = useState(products);
    const filteredProduct = products.filter((product)=> product.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
        <h1>Search Filter</h1>
        <input 
        type="text"
        value={search}
        onChange={(e)=> setSearch(e.target.value)} />
        <ul>
            {
                filteredProduct.map((product, index)=>(
                    <li key={index}>{product}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default SearchFilter