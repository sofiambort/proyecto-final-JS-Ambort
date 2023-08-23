
const barraBuscadora = document.querySelector('.barra-buscadora');
const botonBuscar = document.querySelector('.boton-buscar');

const capitales = {
    "Afganistán": "KABUL",
    "Arabia Saudta": "RAID",
    "Armenia": "EREVÁN",
    "Azerbaiyán": "BAKÚ",
    "Bangladés": "DACA",
    "Baréin": "MANAMA",
    "Birmania": "NAIPYIDÓ",
    "Myanmar": "NAIPYIDÓ",
    "Brunéi": "BANDAR SERI BEGAWAN",
    "Bután": "TIMBU",
    "Camboya": "NON PEN",
    "Catar": "DOHA",
    "China": "PEKÍN",
    "Chipre": "NICOSIA",
    "Corea del Norte": "PIONYANG",
    "Corea del Sur": "SEÚL",
    "Emiratos Árabes Unidos": "ABU DABI",
    "Filipinas": "MANILA",
    "Georgia": "TIFLIS",
    "India": "NUEVA DELHI",
    "Indonesia": "YAKARTA",
    "Irak": "BAGDAD",
    "Irán": "TEHERÁN",
    "Israel": "JERUSALÉN",
    "Japón": "TOKIO",
    "Jordania": "AMÁN",
    "Kazajistán": "ASTÁN",
    "Kirguistán": "BISKEK",
    "Kuwait": "KUWAIT",
    "Laos": "VIENTIÁN",
    "Líbano": "BEIRUT",
    "Malasia": "KUALA LUMPUR",
    "Maldivas": "MALÉ",
    "Mongolia": "ULÁN BATOR",
    "Nepal": "KATMANDÚ",
    "Omán": "MASCATE",
    "Pakistán": "ISLAMABAD",
    "Rusia": "MOSCÚ",
    "Singapur": "SINGAPUR",
    "Siria": "DAMASCO",
    "Sri Lanka": "SRI JAYAWARDENAPURA KOTTE",
    "Tayikistán": "DUSAMBÉ",
    "Tailandia": "BANKOK",
    "Timor Oriental": "DILI",
    "Turkmenistán": "ASJABAD",
    "Turquía": "ANKARA",
    "Uzbekistán": "TASKENT",
    "Vietnam": "HANÓI",
    "Yemen": "SANÁ",
    "Antigua y Barbuda": "SAINT JOHN",
    "Argentina": "BUENOS AIRES",
    "Bahamas": "NASÁU",
    "Barbados": "BRIDGETOWN",
    "Belice": "BELMOPÁN",
    "Bolivia": "SUCRE / LA PAZ",
    "Brasil": "BRASILIA",
    "Canadá": "OTTAWA",
    "Chile": "SANTIAGO",
    "Colombia": "BOGOTÁ",
    "Costa Rica": "SAN JOSÉ",
    "Cuba": "LA HABANA",
    "Dominica": "ROSEAU",
    "Ecuador": "QUITO",
    "El Salvador": "SAN SALVADOR",
    "Estados Unidos": "WASHINGTON D. C.",
    "Granada": "SAINT GEORGE",
    "Guatemala": "CIUDAD DE GUATEMALA",
    "Guyana": "GEORGETOWN",
    "Haití": "PUERTO PRÍNCIPE",
    "Hawaii": "HONOLULU",
    "Honduras": "TEGUCIGALPA",
    "Jamaica": "KINGSTON",
    "México": "CIUDAD DE MÉXICO",
    "Nicaragua": "MANAGUA",
    "Panamá": "CIUDAD DE PANAMÁ",
    "Paraguay": "ASUNCIÓN",
    "Perú": "LIMA",
    "República Dominicana": "SANTO DOMINGO",
    "San Cristobal y Nieves": "BASSETERRE",
    "San Vicente y Las Granadinas": "KINGSTOWN",
    "Santa Lucía": "CASTRIES",
    "Surinam": "PARAMARIBO",
    "Trinidad y Tobago": "PUERTO ESPAÑA",
    "Uruguay": "MONTEVIDEO",
    "Venezuela": "CARACAS",
    "Angola": "LUANDA",
    "Argelia": "ARGEL",
    "Benín": "PORTO NOVO",
    "Botsuana": "GABORONE",
    "Burkina Faso": "UAGADUGÚ",
    "Burundi": "GITENA",
    "Cabo Verde": "PRAIA",
    "Camerún": "YAUNDÉ",
    "Chad": "YAMENA",
    "Camoras": "MORONI",
    "Costa de Marfíl": "YAMUSUKRO / ABIYÁN",
    "Egípto": "EL CAIRO",
    "Eritrea": "ASMARA",
    "Etiopía": "ADÍS ABEBA",
    "Gabón": "LIBREVILLE",
    "Gambia": "BANJUL",
    "Ghana": "ACRA",
    "Guinea": "CONAKRY",
    "Guinea-Bissau": "BISSAU",
    "Guinea Ecuatorial": "MALABO",
    "Kenia": "NAIROBI",
    "Lesoto": "MASERU",
    "Liberia": "MONROVIA",
    "Libia": "TRÍPOLI",
    "Madagascar": "ATANANARIVO",
    "Malawi": "LILONGüE",
    "Malí": "BAMAKO",
    "Marruecos": "RABAT",
    "Mauricio": "PORT LOUIS",
    "Mauritania": "NAUKCHOT",
    "Mozambique": "MAPUTO",
    "Namibia": "WINDHOEK",
    "Níger": "NIAMEY",
    "Nigeria": "ABUYA",
    "República Centroafricana": "BANGUI",
    "República del Congo": "BRAZZAVILLE",
    "República democrática del Congo": "KINSHASA",
    "Ruanada": "KIGALI",
    "Santo Tomé y Príncipe": "SANTO TOMÉ",
    "Senegal": "DAKAR",
    "Seychelles": "VICTORIA",
    "Sierra Leona": "FREETOWN",
    "Somalia": "MOGADISCIO",
    "Suazilandia": "LOMBAMBA / MBABANE",
    "Sudáfrica": "PRETORIA / BLOEMFONTEIN / CIUDAD DEL CABO",
    "Sudán": "JARTUM",
    "Sudán del Sur": "YUBA",
    "Tanzania": "DODOMA",
    "Togo": "LOMÉ",
    "Túnez": "TÚNEZ",
    "Uganda": "KAMPALA",
    "Yibuti": "YIBUTI",
    "Djibouti": "YIBUTI",
    "Zambia": "LUSAKA",
    "Zimbabue": "HARERE",
    "Alemania": "BERLÍN",
    "Albania": "TIRANA",
    "Andorra": "ANDORRA LA VIEJA",
    "Austria": "VIENA",
    "Bélgica": "BRUSELAS",
    "Bielorrusia": "MINSK",
    "Bosnia": "SARAJEVO",
    "Bulgaria": "SOFÍA",
    "Chipre": "NICOSIA",
    "Croacia": "ZAGREB",
    "Dinamarca": "COPENHAGUE",
    "Eslovaquia": "BRATISLAVA",
    "Eslovenia": "LIUBLIANA",
    "España": "MADRID",
    "Estonia": "TALLIN",
    "Finlandia": "HELSINKI",
    "Francia": "PARÍS",
    "Grecia": "ATHENAS",
    "Hungría": "BUDAPEST",
    "Irlanda": "DUBLÍN",
    "Islandia": "REIKIAVIK",
    "Italia": "ROMA",
    "Kosovo": "PRÍSTINA",
    "Letonia": "RIGA",
    "Liechtenstein": "VADUZ",
    "Lituania": "VILNIUS",
    "Luxemburgo": "LUXEMBURGO",
    "Macedonia del Norte": "SKOPJE",
    "Malta": "LA VALETA",
    "Moldavia": "CHISINAU",
    "Mónaco": "MÓNACO",
    "Montenegro": "PODGORICA",
    "Noruega": "OSLO",
    "PAISES BAJOS": "ÁMSTERDAM",
    "Polonia": "VARSOVIA",
    "Portugal": "LISBOA",
    "Reino Unido": "LONDRES",
    "República Checa": "PRAGA",
    "Rumania": "BUCAREST",
    "Rusia": "MOSCÚ",
    "San Marino": "SAN MARINO",
    "Serbia": "BELGRADO",
    "Suecia": "ESTOCOLMO",
    "Suiza": "BERNA",
    "Ucrania": "KIEV",
    "Australia": "CANBERRA",
    "Fily": "SUVA",
    "Islas Marshall": "MAJURO",
    "Islas Salomón": "HONIARA",
    "Kiribati": "TARAWA",
    "Micronesia": "PALIKIR",
    "Nauru": "YAREN",
    "Nueva Zelanda": "WELLINGTON",
    "Palaos": "MELEKEOK / NGERULMUD",
    "Papúa Nueva Guinea": "PORT MORESBY",
    "Samoa": "APIA",
    "Tonga": "NAKUALOFA",
    "Tuvalu": "FANAFUTI, FONGAFALE o VAIAKU",
    "Vanuatu": "PORT VILA",
};


const capitalesJSON = JSON.stringify(capitales);
localStorage.setItem("capitales", capitalesJSON);

//acceso condicional al objeto "capitales":
console.log(capitales.Argentina);
console.log(capitales.santafe); //salta en la consola como undefined
console.log(capitales?.santafe?.sancarlos || "No existe Pais con esta capital"); //en la consola ya no sale "undefined" si no: "No existe pais con esta capital".


function normalizarTexto(texto) {

    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

}



botonBuscar.addEventListener("click", (e) => {
    e.preventDefault()

    const searchTerm = normalizarTexto(barraBuscadora.value.trim());

    const paisEncontrado = Object.keys(capitales).find(pais => normalizarTexto(pais) === searchTerm);


    if (paisEncontrado) {

        const capital = capitales[paisEncontrado];

        Swal.fire({
            title: `Capital de ${paisEncontrado}: ${capital}.`,
        })


    } else {

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El país ingresado no existe',
            footer: 'Verifica que hayas ingresado el nombre de un pais existente en la lista de paises, según su continente, que se encuentran en este sitio',
            customClass: {
                container: 'mi-clase-container',
                title: 'mi-clase-titulo',
                content: 'mi-clase-contenido',
                confirmButton: 'mi-clase-confirm-button',
                cancelButton: 'mi-clase-cancel-button'
            }
        })
    }
});


//** LISTA DE IDIOMAS DE ASIA, CREADO DESDE JS */

const idiomasAsia = [
    {id: "chino", nombre: "Chino"},
    {id: "indostani", nombre: "Indostaní"},
    {id: "indonesio", nombre: "Indonesio"},
    {id: "bengali", nombre: "Bengalí"},
    {id: "ruso", nombre: "Ruso"}, 
    {id: "japones", nombre: "Japonés"},
    {id: "telugu", nombre: "Télugu"},
    {id: "marathi", nombre: "Marathi"},
    {id: "chinoCantones", nombre: "Chino Cantonés"},
    {id: "turco", nombre: "Turco"}, 
    {id: "tamil", nombre: "Tamil"},
    {id: "javanes", nombre: "Javanés"},
    {id: "wu", nombre: "Wu"},
    {id: "coreano", nombre: "Coreano"},
    {id: "vietnamita", nombre: "Vietnamita"}, 
]

const listaDeIdiomas1 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(idiomasAsia)
        }, 2000);
    })
}

let asiaIdiomas = [];
const lista1 = document.querySelector('.idiomas1');

function mostrarIdiomasAsia (array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`
        
        lista1.append(li)
    });
}

listaDeIdiomas1()
    .then((res) => {
        asiaIdiomas = res;
        mostrarIdiomasAsia(asiaIdiomas);
    })

//** LISTA DE IDIOMAS DE AMERICA, CREADO DESDE JS */

const idiomasAmerica = [
    {id: "español", nombre: "Español"},
    {id: "ingles", nombre: "Inglés"},
    {id: "quechua", nombre: "Quechua"},
    {id: "frances", nombre: "Francés"},
    {id: "portugues", nombre: "Portugués"}, 
    {id: "aimara", nombre: "Aimará"},
    {id: "guarani", nombre: "Guaraní"},
    {id: "neerlandes", nombre: "Neerlandés"},
]

const listaDeIdiomas2 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(idiomasAmerica)
        }, 2000);
    })
}

let americaIdiomas = [];
const lista2 = document.querySelector('.idiomas2');

function mostrarIdiomasAmerica (array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`
        
        lista2.append(li)
    });
}

listaDeIdiomas2()
    .then((res) => {
        americaIdiomas = res;
        mostrarIdiomasAmerica(americaIdiomas);
    })


//** LISTA DE IDIOMAS DE AFRICA, CREADO DESDE JS */

const idiomasAfrica = [
    {id: "afrikaans", nombre: "Afrikáans"},
    {id: "arabe", nombre: "Árabe"},
    {id: "ingles", nombre: "Inglés"},
    {id: "frances", nombre: "Francés"},
    {id: "portugues", nombre: "Portugués"}, 
    {id: "española", nombre: "Español"},
    {id: "suajili", nombre: "Suajili"},
]

const listaDeIdiomas3 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(idiomasAfrica)
        }, 2000);
    })
}

let africaIdiomas = [];
const lista3 = document.querySelector('.idiomas3');

function mostrarIdiomasAfrica (array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`
        
        lista3.append(li)
    });
}

listaDeIdiomas3()
    .then((res) => {
        africaIdiomas = res;
        mostrarIdiomasAfrica(africaIdiomas);
    })


//** LISTA DE IDIOMAS DE EUROPA, CREADO DESDE JS */

const idiomasEuropa = [
    {id: "aleman", nombre: "Alemán"},
    {id: "bulgaro", nombre: "Búlgaro"},
    {id: "checo", nombre: "Checo"},
    {id: "croata", nombre: "Croata"},
    {id: "danes", nombre: "Danés"}, 
    {id: "eslovaco", nombre: "Eslovaco"},
    {id: "esloveno", nombre: "Esloveno"},
    {id: "española", nombre: "Español"},
    {id: "estonio", nombre: "Estonio"},
    {id: "fines", nombre: "Finés"}, 
    {id: "frances", nombre: "Francés"},
    {id: "griego", nombre: "Griego"},
    {id: "hungaro", nombre: "Húngaro"},
    {id: "ingles", nombre: "Inglés"},
    {id: "irlandes", nombre: "Irlandés"},
    {id: "italiano", nombre: "Italiano"},
    {id: "leton", nombre: "Letón"}, 
    {id: "lituano", nombre: "Lituano"},
    {id: "maltes", nombre: "Maltés"},
    {id: "neerlandes", nombre: "Neerlandés"},
    {id: "polaco", nombre: "Polaco"},
    {id: "portugues", nombre: "Portugués"}, 
    {id: "rumano", nombre: "Rumano"},
    {id: "sueco", nombre: "Sueco"},
]

const listaDeIdiomas4 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(idiomasEuropa)
        }, 2000);
    })
}

let europaIdiomas = [];
const lista4 = document.querySelector('.idiomas4');

function mostrarIdiomasEuropa (array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`
        
        lista4.append(li)
    });
}

listaDeIdiomas4()
    .then((res) => {
        europaIdiomas = res;
        mostrarIdiomasEuropa(europaIdiomas);
    })


//** LISTA DE IDIOMAS DE OCEANIA, CREADO DESDE JS */

const idiomasOceania = [
    {id: "ingless", nombre: "Inglés"},
    {id: "frances", nombre: "Francés"},
    {id: "hindi", nombre: "Hindi"},
    {id: "japones", nombre: "Japonés"},
]

const listaDeIdiomas5 = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(idiomasOceania)
        }, 2000);
    })
}

let oceaniaIdiomas = [];
const lista5 = document.querySelector('.idiomas5');

function mostrarIdiomasOceania (array) {
    array.forEach(item => {
        const li = document.createElement("li");
        li.id = item.id;
        li.textContent = `${item.nombre}`
        
        lista5.append(li)
    });
}

listaDeIdiomas5()
    .then((res) => {
        oceaniaIdiomas = res;
        mostrarIdiomasOceania(oceaniaIdiomas);
    })




const urlDatos = 'https://restcountries.com/v3.1/name/';
const nombrePais = 'Argentina';

const paisInfo = document.querySelector('.info-argentina')

fetch(urlDatos + nombrePais)
    .then(response => response.json())
    .then(data => {
        const datosArgentina = `
      <h2 class="nombre-pais-argentina">${data[0].name.common}</h2>
      <p class="capital-argentina">Capital: ${data[0].capital}</p>
      <p class="poblacion-argentina">Población: ${data[0].population}</p>
      <p class="lenguajes-argentina">Idiomas: ${Object.values(data[0].languages).join(', ')}</p>
      <img class="img-bandera" src="${data[0].flags.png}" alt="Bandera del país">
    `;

    paisInfo.innerHTML = datosArgentina;
    })

    .catch(error => {
    console.error('Error al obtener datos del país:', error);
  });