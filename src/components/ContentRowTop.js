import React from 'react';
import ContentRowCenter from './ContentRowCenter';
import ContentRowQuantity from './ContentRowQuantity';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import Chart from './Chart';
import Search from './Search';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound'
import { Route, Switch } from "react-router-dom";


function ContentRowTop ( props ) {

	return(
		<React.Fragment>	
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						{/* <h1 className="h3 mb-0 text-gray-800">Panel App</h1> */}
					</div>
				
					<Switch>
					<Route path="/totales" component={ContentRowQuantity} />
					<Route path="/ultimoProducto" component={LastProductInDb} />
					<Route path="/categorias" component={CategoriesInDb} />
					<Route path="/listaDeproductos" component={Chart} />
					<Route path="/buscador" component={Search} />
					<Route path="/detalleDeProducto/:id" component={ProductDetail} />
					<Route exact path="/" component={ContentRowCenter} />
					<Route component={NotFound} />
				</Switch>
	
				</div>
		</React.Fragment>	 
    )

}
export default ContentRowTop;