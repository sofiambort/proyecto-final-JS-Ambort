const infoAfrica = document.querySelector('.btn-africa') ;

infoAfrica.addEventListener("click", () => {
    Swal.fire({
        title: '- Á F R I C A -',
        text: 'El tercer continente más extenso, tras Asia y América; con un superficie de 30,37 millones km². En el 2023, se registro con una población, según la ONU, de 1300 millones de habitantes',
        imageUrl: 'https://mapamundipolitico.com/wp-content/uploads/2018/09/mapa-politico-africa.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image',
    })
});