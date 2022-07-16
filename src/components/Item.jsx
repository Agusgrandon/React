//@ts-check
import React from "react";
import './Item.css';
import { Link } from 'react-router-dom';



export default function Item({ price, title, pictureURL }) {
  function onAdd() {
    alert("¡Agregado al carrito!")
  }
  return (
    <div className="card" style={{ width: "13rem", height: "23rem" }}>
      <img src={pictureURL} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="producto text-center">{title}</h5>
        <p className="precio text-center">Precio ${price}</p>
        <Link to={'/item/mates'}>Ver detalles</Link>
      </div>
    </div>
  )

}