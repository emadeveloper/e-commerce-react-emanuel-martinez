import React from "react";
import { Link } from "react-router-dom";

const Item = ({info}) => {
    return (
        <Link to={`/detalle/${info.id}`} className="Celular">
            <img src={info.img} alt="Smartphone" />
            <p>{info.title}</p>
        </Link>
    );
}

export default Item;