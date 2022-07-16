//@ts-check
import React from 'react'
import ItemCount from './ItemCount';

export default function ItemDetail({ itemProducto }) {
  function onAdd() {
    alert("¡Agregado al carrito!")
  }

  return (<>
    <div className="card mb-3">
    <img src={itemProducto.pictureURL} className="card-img-top" alt={itemProducto.title}/>
      <div className="card-body">
        <h5 className="card-title">{itemProducto.title}</h5>
        <p className="card-text">Precio:{itemProducto.price}</p>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
        <button type="button" className='btn btn-outline-success'>Finalizar compra</button>
      </div>
    </div>
  </>
  )

}