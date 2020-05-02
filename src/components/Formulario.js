import React, {useState} from 'react';


const Formulario = () => {
    return ( 
        <form>
            <h2>Agregar gastos aqui</h2>
            <div className="campo">
                <label>Descripcion</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                />
            </div>
            <div className="campo">
                <label>Cantidad</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. 300"
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