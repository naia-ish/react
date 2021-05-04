import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    //para evitar escribir {producto.nombre}
    const { nombre, precio, id} = producto;

    //Agregar producto al carrito
    const seleccionarProducto = id => {
        //Arreglo nuevo
        const producto = productos.filter(producto => producto.id === id );
        agregarProducto([
            ...carrito,//Clonar carrito
            ...producto
        ]);
    }

    //Eliminar producto carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id); //Filter copia del arreglo

        //Colocar los productos en el state
        agregarProducto(productos)
    }


    return (
        <div>
            <h2>{nombre}</h2>
            <p>{precio} €</p>

            { productos //Si hay productos comprar en caso contrario eliminar
            ?
                (
                    <button
                    type="button"
                    onClick={ () => seleccionarProducto(id) }
                    >Comprar</button>
                )
            :
                (
                    <button
                        type="button"
                        onClick={ () => eliminarProducto (id) }
                    >Eliminar</button>
                )}
        </div>
    );
}

export default Producto;