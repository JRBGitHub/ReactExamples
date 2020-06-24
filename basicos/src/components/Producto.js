import React from 'react'

    const Producto = ({producto, carrito, agregarProducto, productos}) => {

   const {nombre,precio,id}= producto;



const seleccionarProducto = id =>
{
    const producto = productos.filter(producto =>producto.id===id)[0]
    agregarProducto(
        [
            ...carrito,producto
        ]
    )
}

const eliminarProducto = id =>
{
    const producto = carrito.filter(p => p.id !==id )
    agregarProducto(producto)
}

    // Agregar producto al carrito
 
    return ( 
        <div>
            <h2>{nombre}</h2>
            <h1>${precio}</h1>            
            
            {productos?       //si existe productos  operador ternario                
                    <button
                        type="button"
                        onClick={()=> seleccionarProducto(id) }
                    >Comprar</button>
            :
            
                    <button
                        type="button"
                        onClick={()=> eliminarProducto(id) }

                    >Eliminar</button>

            }
        </div>
     );
}
 
export default Producto;
 