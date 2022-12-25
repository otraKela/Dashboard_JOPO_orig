import React, { useEffect, useState } from 'react';
import ChartRow from './ChartRow';

function Chart (){

    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('http://localhost:3040/api/products')
        .then(response=>response.json())
        .then(products=>setProducts(products.data.products))
    },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>URL</th>     
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Categoría</th>
                                <th>URL</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( product , index) => {
                                return <ChartRow { ...product} key={index}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;