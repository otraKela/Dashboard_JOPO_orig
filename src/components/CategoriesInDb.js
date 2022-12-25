import React from "react";
import {useState, useEffect} from 'react'

function CategoriesInDb() {
  const [categories, setCategories]= useState([]);
  const [countProducts, setCountProducts]= useState([])


  useEffect(()=>{
    fetch('http://localhost:3040/api/products/categories')
    .then(response=>response.json())
    .then(category=>{
      setCategories(category.data.categories)})

      fetch('http://localhost:3040/api/products')
      .then(response=>response.json())
      .then(products=>{
        setCountProducts(products.data.countByCategory)})
  },[])

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categorías
          </h5>
        </div>

        <div className="card-body">
          <div className="row">


            {
              countProducts.length > 0 && countProducts.map((products, index)=>{
                return (
                <div className="col-lg-6-1 mb-4">
                
                  <div className="card-body" key={products + index}>{products.quantity}</div>
              
              </div>)
              })
            }
            
              {
                
               categories.length >0 && categories.map((category,index)=>{
                 return(
                   <div className="col-lg-6 mb-4-1">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body" key={category + index}>{category.name}</div>
                    </div>
                  </div>
                      )
                })
              }
              
          </div>
        </div>

      </div>
    </div>
  );
}

export default CategoriesInDb;
