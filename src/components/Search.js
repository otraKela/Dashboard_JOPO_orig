import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Search() {


	const [products, setProducts] = useState([]);
	const [keyword, setKeyword] = useState('');
	const [page, setPage] = useState(1);
	const [productCount, setProductCount] = useState(0);

	const url = 'http://localhost:3040/api/products/?page=';

	const searchProduct = e => {
		setPage(1);
		e.preventDefault();
		let product = e.target.product.value;
		setKeyword(product);
	}

	const moreProducts = e => {
		e.preventDefault();
		setPage(page + 1);
	}

	const fewerProducts = e => {
		e.preventDefault();
		setPage(page - 1);
	}

	const fetchProducts = (url => {
		fetch('http://localhost:3040/api/products/?search=' + keyword + '&page=' + page)
			.then(response => response.json())
			.then(data => {
				setProducts(data.data.products);
				setProductCount(data.data.products.length);
			})
	})

	useEffect(() => {

		if (keyword.length > 0 && keyword.toLowerCase() !== 'todo') {
			fetchProducts(`${url}${page}&search=${keyword}`)
		} else {
			fetchProducts(`${url}${page}`)
		}
	}, [keyword, page])


	useEffect(() => {
		fetchProducts(`${url}${page}`)
	}, [])


	return (
		<div className="container-fluid">
			{/* {
				apiKey !== '' ? */}
			<>
				<div className="row my-4">
					<div className="col-12 col-md-6">
						{/* Buscador */}
						<form onSubmit={searchProduct} method="GET">
							<div className="form-group">
								<label htmlFor="">Buscar producto (escriba "todo" para ver todos los productos):</label>
								<input type="text" name='product' className="form-control" />
							</div>
							<button className="btn btn-danger">Buscar</button>
						</form>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<h2>Productos para la palabra: {keyword}</h2>
					</div>
					{
						products.length >= 0 && products.map((product, i) => {

							// productImage = 'C:/Users/Guido/Desktop/ProyectoIntegrador/public' + product.img;


							return (
								<div className="col-sm-6 col-md-3 my-4" key={i}>
									<div className="card shadow mb-4">
										<div className="card-header py-3">
											<h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
										</div>
										<div className="card-body">
											<div className="text-center">
											<Link to={`detalleDeProducto/${product.id}`}>
												<img
													className="img-fluid px-3 px-sm-4 mt-3 mb-4"

													src={product.img}
													alt={product.name}
													style={{
														width: '90%',
														height: '30%',
														objectFit: 'cover'
													}}
												/>
												</Link>
											</div>
											<p>Categoría: {product.categoryName}</p>
										</div>
									</div>
								</div>
							)
						})
						}
					</div>
				
				

				{/* agregado botón */}
				<div className="botones">
					{page > 1 &&
						<form onSubmit={fewerProducts} method="GET">
							<button className="btn btn-danger" type="submit">Anterior</button>
						</form>}

					{productCount === 10 &&
						<form onSubmit={moreProducts} method="GET">
							<button className="btn btn-danger" type="submit">Siguiente</button>
						</form>}
				</div>
				{/* fin agregado botón */}

				{productCount === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}

			</>
		</div>
	)
}

export default Search;
