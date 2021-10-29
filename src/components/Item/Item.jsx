export const Item = ({ prod }) => {
    return (
        <div className="cards">
            <h3>{prod.title}</h3>
            <div className="contain-image-card">
                <img src={prod.photo} alt="cafe dolcata" />
            </div>
            <h4>Precio: ${prod.price}</h4>
            <button className="button-card">Detalles del producto</button>
            <span>Stock disponible: {prod.stock}</span>
        </div>
    );
};
