const products = [
    {
        id: 1,
        title: "Cafe Negro",
        stock: 10,
        photo: "./assets/images/CafeNegro.png",
        price: 250,
    },
    {
        id: 2,
        title: "Cafe Azul",
        stock: 10,
        photo: "./assets/images/CafeAzul.png",
        price: 180,
    },
    {
        id: 3,
        title: "Cafe Rojo",
        stock: 10,
        photo: "./assets/images/CafeRojo.png",
        price: 180,
    },
    {
        id: 4,
        title: "Cafe Verde",
        stock: 10,
        photo: "./assets/images/CafeVerde.png",
        price: 180,
    },
    {
        id: 5,
        title: "Cafe Naranja",
        stock: 10,
        photo: "./assets/images/CafeNaranja.png",
        price: 200,
    },
    {
        id: 6,
        title: "Cafe Dorado",
        stock: 10,
        photo: "./assets/images/CafeDorado.png",
        price: 350,
    },
    {
        id: 7,
        title: "Cafe Rosa",
        stock: 10,
        photo: "../assets/images/CafeRosa.png",
        price: 200,
    },
    {
        id: 8,
        title: "Cafe Marron",
        stock: 10,
        photo: "./assets/images/CafeMarron.png",
        price: 100,
    },
    {
        id: 9,
        title: "Cafe Blanco",
        stock: 10,
        photo: "./assets/images/CafeBlanco.png",
        price: 250,
    },
    {
        id: 10,
        title: "Cafe Violeta",
        stock: 10,
        photo: "./assets/images/CafeVioleta.png",
        price: 200,
    },
];

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});

const OneProduct = {
    id: 1,
    title: "Cafe Negro",
    stock: 10,
    photo: "./assets/images/CafeNegro.png",
    price: 250,
    desc: "Este café para aquellos que aman el café intenso y de moderada acidez.",
};

export const getFetchOneProduct = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(OneProduct);
    }, 2000);
});
