import React, {Fragment, useState} from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante,  actualizarPregunta}) => {

    const[cantidad, guardarCantidad] = useState(0);
    const[error, guardarError] = useState(false);

    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value));
    }

    //submit que definir presupuesto
    const agregarPresupuesto = e =>{
        e.preventDefault();
        //Validar
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarCantidad(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return ( 
        <Fragment>
            <h2>Introducir Presupuesto</h2>
            {error ? <Error mensaje="El presupuesto no es Valido" />  : null}
            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit"
                    placeholder="Coloca tu presupuesto"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
     );
}
 
export default Pregunta;