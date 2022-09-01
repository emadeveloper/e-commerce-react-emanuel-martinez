const Item = () => {
  return (
    <>
      <div key={index}>
        <h3>{producto.title}</h3>
        <img src={producto.thumbnail} alt="" />
        <div>
          <p>$ {producto.price}</p>
          <button
            onClick={() => {
              setCarrito([...carrito, producto]);
            }}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
