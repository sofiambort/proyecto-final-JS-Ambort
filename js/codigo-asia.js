const infoAsia = document.querySelector('.btn-asia') ;

infoAsia.addEventListener("click", () => {
    Swal.fire({
        title: '- A S I A -',
        text: 'Continente más grande y poblado de la Tierra, con 44,6 millones de km² aproximadamente. En agosto de 2023, según la ONU, tiene alrededor de 4600 millones de habitantes, que representan el 59 % de la población mundial.',
        imageUrl: 'https://mapamundipolitico.com/wp-content/uploads/2018/10/mapa-asia-continente.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    })
});