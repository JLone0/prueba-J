import React, { Fragment } from "react";
import ImgComponent from "./componentsComent/ImgComponent";

const Comentario = ({sujeto}) => {


    return ( 
        <Fragment>
            <h1>Comentarios</h1>
                <hr/>               
                <div className="media">
                <ImgComponent imagen = {sujeto.urlimg} />
                    <div className="media-body">
                        <h5 className="mt-0"> {sujeto.nombre}</h5>
                        {sujeto.comentario}                        
                    </div>
                </div>    
        </Fragment>

     );
}
 
export default Comentario;