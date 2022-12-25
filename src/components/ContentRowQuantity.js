import React from 'react';
import SmallCard from './SmallCard';
import { useEffect, useState } from 'react';



function ContentRowMovies(){

	const [products, setProducts]= useState({data:{count:0}});
    const [categories, setCategories]= useState({data:{count:0}});
    const [clients, setClients]= useState({data:{count:0}});

    useEffect(()=>{
	
		fetch("http://localhost:3040/api/products/")
		.then(response=> response.json())
		.then(data=>{
            setProducts(data)	
        })
        .catch ( e => console.log (e))

        fetch("http://localhost:3040/api/products/categories/")
        .then(response=> response.json())
        .then(data=>{
            setCategories(data)	
        })
        .catch ( e => console.log (e))

        fetch("http://localhost:3040/api/users/")
        .then(response=> response.json())
        .then(data=>{
            setClients(data)	
        })
        .catch ( e => console.log (e))
	},[])


    // /*  Cada set de datos es un objeto literal */

// /* <!-- Movies in DB --> */

    let productsCount = {
        title: 'Productos en base de datos',
        color: 'primary', 
        cuantity: products.data.count,
        icon: 'fa-clipboard-list'
    }
    
    /* <!-- Total awards --> */
    
    let clientsCount = {
        title:'Clientes en base de datos', 
        color:'success', 
        cuantity: clients.data.count,
        icon:'fa-user-check'
    }
    
    /* <!-- Actors quantity --> */
    
    let categoriesCount = {
        title:'Categorias en base de datos' ,
        color:'warning',
        cuantity: categories.data.count,
        icon:'fa-fw fa-folder'
    }
    
    let counts = [productsCount, clientsCount, categoriesCount];
	

    return (
    
        <div className="row">
            
            {counts.map( (number, i) => {

                return <SmallCard {...number} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;