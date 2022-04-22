import React, {useState, Fragment} from "react";

const Contador = () => {
    
    const [number, setNumber] = useState(0);

    const Aument = () => {
            console.log('me diste un click')
            setNumber(number + 1)
    }

    return (  
        <Fragment>
        <h3>Mi primer componente {number}</h3>
        <button onClick={Aument}>Aumentar</button>
        </Fragment>    
    );
}
 
export default Contador;