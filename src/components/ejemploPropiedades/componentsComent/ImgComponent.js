import React, { Fragment } from "react";

const ImgComponent = (imagen) => {
    console.log(imagen);
    return ( 
        <Fragment>                             

                <img src={imagen} alt="..." className="mr-3"/>                
                 
        </Fragment>

     );
}
 
export default ImgComponent;