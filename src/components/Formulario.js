import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState();
    const [error, guardarError] = useState(false);
    

    const extraerCantidad = e =>{
        guardarCantidad(parseInt(e.target.value));
    }

    // Agregar gasto de usuario
    const agregarGasto = e => {
        e.preventDefault();
        //validacion
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id: shortid.generate()
        }

        // Pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);
        //Resetear el formulario
        guardarNombre('');
        guardarCantidad(0);
    }

    return ( 
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agregar gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}

            <div className="campo">
                <label>Descripcion</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu gasto"
                    value={cantidad}
                    onChange={extraerCantidad}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />

        </form>

     );
}
export default Formulario;