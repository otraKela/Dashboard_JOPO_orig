import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import ContentRowQuantity from './ContentRowQuantity';
import Chart from './Chart';

function ContentRowCenter() {

    return (
        <React.Fragment>   
            <div className="row">
                <ContentRowQuantity />
                {/* <LastProductInDb /> */}
                <LastProductInDb />
                <CategoriesInDb />
                <Chart />
            </div>
        </React.Fragment>
    )
}

export default ContentRowCenter;