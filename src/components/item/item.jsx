import React from "react";

const Item = ({info}) => {
    return (
        <a href="" className="Celular">
            <img src={info.img} alt="Smartphone" />
            <p>{info.title}</p>
        </a>
    );
}

export default Item;