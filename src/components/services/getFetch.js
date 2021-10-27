const products = [
    {
        id: 1,
        title: "Cafe Negro",
        stock: 10,
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5HTme-RqYdtcjEIXFn0v3sP56AL0Hbf13rFF9h1UwgllF3Jg1RaXTsC2rTvRbL8D9ao&usqp=CAU",
        price: 250,
    },
    {
        id: 2,
        title: "Cafe Azul",
        stock: 10,
        photo: "../../components/images/CafeAzul.png",
        price: 180,
    },
    {
        id: 3,
        title: "Cafe Rojo",
        stock: 10,
        photo: "../images/CafeRojo.png",
        price: 180,
    },
    {
        id: 4,
        title: "Cafe Verde",
        stock: 10,
        photo: "../images/CafeVerde.png",
        price: 180,
    },
    {
        id: 5,
        title: "Cafe Naranja",
        stock: 10,
        photo: "../images/CafeNaranja.png",
        price: 200,
    },
    {
        id: 6,
        title: "Cafe Dorado",
        stock: 10,
        photo: "../images/CafeDorado.png",
        price: 350,
    },
    {
        id: 7,
        title: "Cafe Rosa",
        stock: 10,
        photo: "../images/CafeRosa.png",
        price: 200,
    },
    {
        id: 8,
        title: "Cafe Marron",
        stock: 10,
        photo: "../images/CafeMarron.png",
        price: 100,
    },
    {
        id: 9,
        title: "Cafe Blanco",
        stock: 10,
        photo: "../images/CafeBlanco.png",
        price: 250,
    },
    {
        id: 10,
        title: "Cafe Violeta",
        stock: 10,
        photo: "../images/CafeVioleta.png",
        price: 200,
    },
];

export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});
