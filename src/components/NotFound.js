import React from 'react';
import imagenFondo from '../assets/images/error-404.png';
import { Link } from 'react-router-dom';

function NotFound() {
    return (

        <React.Fragment>

            <div className="notFound">
                <img style={{ width: 20 + 'rem' }} src={imagenFondo} alt=" image-error-404 " />
                <div className= "text-notfound">
                    <h2>
                        404 Not Found
                    </h2>
                    <p>Pruebe ingresando en el siguiente enlace:</p>

                    <Link to="/" className="nav-link collapsed">
                        <span>Dashboard-DH Movies</span>
                    </Link>
                </div>

            </div>

        </React.Fragment>

    )
}


export default NotFound;

// <React.Fragment>
// <div className= "notFound">
//    <h2>
//        404 Not Found
//    </h2>
//    <p>Pruebe ingresando en el siguiente enlace:</p>

//    <Link to="/" className="nav-link collapsed">
//                 <span>Dashboard-DH Movies</span>
//             </Link>

// </div>

// </React.Fragment>