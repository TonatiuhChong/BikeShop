import React from "react";
import './navlinks.css'
import {Link} from 'react-router-dom'

function Navlinks (){
  
    return (
    <div className="navlinks">
      <div className="navlinks__outer">
        <div className="navlinks__inner">
          <Link>HOLA</Link>
          <Link>HOLA</Link>
          <Link>HOLA</Link>
        </div>
      </div>

    </div>)
  
}

export default Navlinks;
