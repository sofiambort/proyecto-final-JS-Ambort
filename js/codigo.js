
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
    "Haití": "Puerto Príncipe", 
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
    "Venezuela": "Caracas",
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
    "Suiza": "Berna", 
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

botonBuscar.addEventListener("click", () => {
    const searchTerm = barraBuscadora.value.trim();

    if (capitales.hasOwnProperty(searchTerm)) {
        const capital = capitales[searchTerm];
        alert(`Capital de  ${searchTerm} : ${capital}.`);
    } else {
        alert('País no encontrado en la lista de capitales.');
    }

});



const capitalesJSON = JSON.stringify(capitales);
localStorage.setItem("capitales", capitalesJSON);

//acceso condicional al objeto "capitales":
console.log(capitales.Argentina);
console.log(capitales.santafe); //salta en la consola como undefined
console.log(capitales?.santafe?.sancarlos || "No existe Pais con esta capital"); //en la consola ya no sale "undefined" si no: "No existe pais con esta capital".


