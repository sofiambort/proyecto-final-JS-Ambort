const infoOceania = document.querySelector('.btn-oceania') ;

infoOceania.addEventListener("click", () => {
    Swal.fire({
        title: '- O C E A N I A -',
        text: 'Continente insular de la Tierra constituido por la plataforma continental de Australia, las islas de Nueva Guinea, Nueva Zelanda y los archipiélagos coralinos y volcánicos de Melanesia, Micronesia y Polinesia. Tiene una extensión de 8 542 499 km², se trata del continente más pequeño del planeta Tierra.',
        imageUrl: 'https://mundomapa.com/wp-content/uploads/Mapa-de-oceania-con-nombres-scaled.jpg',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
});