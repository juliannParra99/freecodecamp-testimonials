import React from 'react'; /*opcional(salvo con algunos elementos, como HOOKS) despues de actualizaciones desde 2020 */
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
       src={require(`../imagenes/testimonio-${props.imagen}.png`)}/*template literales para insertar js para hacer las imagenes dinamicas */
       alt={`Foto de ${props.nombre}`} />
       <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en {props.pais}
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong>
          </p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
       </div>
    </div>
  );
}

export default Testimonio;