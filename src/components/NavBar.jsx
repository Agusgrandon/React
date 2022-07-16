import React from "react";
import { Link } from 'react-router-dom';
import mate from '../img/images.jpg'
import './NavBar.css';


export default function NavBar() {
  return <>
  <header>
  <h1 className="titulo">PLAYADITO</h1>
  <img src={mate} className="icono" alt="mate" />
  <ul className="nav justify-content-center">
   <li className="nav-item">
   <Link to={'/'}>Home</Link>
   </li>
   <li className="nav-item">
   <Link to={'/category/mates'}>Mates</Link>
   </li>
   <li className="nav-item">
   <Link to={'/category/termos'}>Termos</Link>
   </li>
   <li className="nav-item">
   <Link to={'/category/yerba'}>Yerba</Link>
   </li>
 </ul>
 </header>
 </>
}