const infoAmerica = document.querySelector('.btn-america') ;

infoAmerica.addEventListener("click", () => {
    Swal.fire({
        title: '- A M É R I C A -',
        text: 'América es el segundo continente más grande de la Tierra, después de Asia. Con una superficie de 42 549 000 km², y en el 2023 con una población de 1000 millones de habitantes',
        imageUrl: 'https://mapadeamerica.net/wp-content/uploads/2016/10/mapa-politico-de-america.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
});
