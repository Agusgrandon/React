import React from "react";
import mate from '../img/images.jpg'
import './NavBar.css';


export default function NavBar() {
  return <>
  <h1 className="titulo">PLAYADITO</h1>
  <img src={mate} className="icono" alt="mate" />
  <ul className="nav justify-content-center">
   <li className="nav-item">
     <a className="nav-link" href="#">Home</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="#">Mates</a>
   </li>
   <li className="nav-item">
   <a className="nav-link" href="#">Termos</a>
   </li>
   <li className="nav-item">
     <a className="nav-link" href="#">Yerba</a>
   </li>
 </ul>
 </>
}