const infoEuropa = document.querySelector('.btn-europa') ;

infoEuropa.addEventListener("click", () => {
    Swal.fire({
        title: '- E U R O P A -',
        text: 'Segundo continente más pequeño en términos de superficie. Abarca 10 530 751 km² o el 2 % de la superficie del mundo y alrededor de 6,8 % del total de las tierras emergidas. Tiene una superficie de 10 530 751 km² y una población en el 2023, según la ONU, de 750 millones de habitantes.',
        imageUrl: 'https://i.pinimg.com/originals/a3/b5/f5/a3b5f52411c73ee126b44fc43dcad1c7.png',
        imageWidth: 400,
        imageHeight: 300,
        imageAlt: 'Custom image',
    })
});