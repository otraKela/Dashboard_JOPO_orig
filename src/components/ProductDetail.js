import React, {useEffect,useState} from 'react';
import { Link } from 'react-router-dom';

function ProductDetail(props) {
    const id=Number(props.match.params.id)

    const [product, setProduct]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:3040/api/products/${id}`)
        .then(response=>response.json())
        .then(product=> setProduct(product.data))
    },[id])

    //  const product= products.find(oneProduct=> oneProduct.id===id)
    //  console.log(product)
    

    return (
       
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                
                            {/* <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5> */}

                    
                </div>
                <div className="card-body">
                    <div className="text-center">
                        {
                            product &&
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={product.img} alt=" tocadiscos-4 " />
                        }
                        
                    </div>

                    {
                        product &&
                         <ul>
                         <li>Nombre:{product.name}</li>
                         <li>Precio:${product.price}</li>

                        {
                            product.discount &&
                            <li>Descuento:{product.discount}</li>
                        }

                         <li>Descripción:{product.description}</li>
                         <li>URL:{product.url}</li>


                        </ul>

                    }

                    <Link to="/listaDeProductos" className="btn btn-danger" rel="nofollow">Lista completa</Link>

                </div>
            </div>
        </div>

    )
}

export default ProductDetail;