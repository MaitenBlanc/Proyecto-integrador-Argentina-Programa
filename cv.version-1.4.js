//Función para que se muestren los datos de la API al usar onmouseover en cada logo.

const data = ["Nombre:", "E-Mail:", "Fecha de Nacimiento:", "Dirección:", "Teléfono:"];
const subData = ["name", "email", "date", "location", "phone", "picture"];
var info = {};

const showFiledHandler = (index) => {
  const name = document.getElementById("label");
  const label = document.getElementById("text");

  name.innerHTML = data[index];

  switch (index) {
    case 0:
      label.innerHTML = info && info.name && info.name.first ? info.name.first + ' ' + info.name.last : '';
      break;
    case 1:
      label.innerHTML = info && info.email ? info.email : '';
      break;
    case 2:
      let date = new Date(info.dob.date);
      label.innerHTML = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
      break;
    case 3:
      label.innerHTML = info && info.location.city && info.location.country ? info.location.city + ', ' + info.location.country : '';
      break;
    case 4:
      label.innerHTML = info && info.phone ? info.phone : '';
      break;
    default:
      break;
  }

}

function setFoto() {
  const foto = document.getElementById("foto");
  foto.src = info.picture.large;
}

const url = 'https://randomuser.me/api?nat=es';

fetch(url, {
  method: "get",

})
  .then((res) => res.json())
  .then((data) => {
    info = data.results[0];
    setFoto();
  })
  .catch((err) => console.log(err));

  //Función para que se muestre "sobre mí", "formación" y "experiencia laboral" al scrollear.

  const fondo1 = document.getElementById("fondo1");
  const fondo2 = document.getElementById("fondo2");
  const fondo3 = document.getElementById("fondo3");
  const fondo4 = document.getElementById("fondo4");

  const mostrarScroll = (entrada, observador) => {
    entrada.forEach((entrada) => {
        if(entrada.isIntersecting){
          entrada.target.classList.add('visible');
        }
    });

};

const observador = new IntersectionObserver(mostrarScroll, {
  root: null, 
  rootMargin: '0px 0px 0px 0px',
  threshold: 1,
});

observador.observe(fondo1);
observador.observe(fondo2);
observador.observe(fondo3);
observador.observe(fondo4);
