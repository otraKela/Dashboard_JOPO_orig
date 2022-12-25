import React from 'react';
import {Link} from 'react-router-dom';


function ChartRow(props){
    return (
                <tr>
                    <td> 
                    <Link to={`detalleDeProducto/${props.id}`}>
                    {props.name}
                    </Link>
                    </td>
                    <td>{props.description}</td>
                    <td>{props.categoryName}</td>
                   
                    <td>{props.url}</td>
                </tr>
            )
    }
    
        

export default ChartRow;