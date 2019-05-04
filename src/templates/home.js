import {changeHash} from "../router.js";

export const home = () => {
    const inicio = document.createElement('div');
    const template = `
    <div class="conteiner" id="inicio">
        <form>
        <div class="col-md-4 mb-3">
        <input id="name" class="form-control" type="text" placeholder="Nombre del cliente">
        <button id="btn-name" type ="button" class="btn btn-danger my-3"> Cliente </button> 
        </div>
        <p> s./15 ¡Ofertas! </p>
        <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="img/ima1.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/ima4.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src="img/ima3.jpg" class="d-block w-100" alt="...">
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div class="col-md-4 mb-3">
        <div class = " botones ">
        <button type ="button" id="desayuno"  class= "btn btn-warning  btn-lg my-3"> DESAYUNO </button> 
        <button type ="button" id="menu"  class= "btn btn-warning  btn-lg" my-3> MENU </button>
        </div>
        </form>
      </div>
    </div>
    `;
    inicio.innerHTML = template;

    const btnEnviar = inicio.querySelector('#btn-name');
    btnEnviar.addEventListener('click', () => {
    /*Captura de datos escrito en los inputs*/ 
    const nom =  inicio.querySelector("#name").value;
    /*Guardando los datos en el LocalStorage*/
    sessionStorage.setItem("Nombre",nom);
    /*Limpiando los campos o inputs*/
    inicio.querySelector("#name").value = "";

/*traer template de desayuno*/
const btnDesayuno = inicio.querySelector('#desayuno');
btnDesayuno.addEventListener('click',() => {
    changeHash ('/desayuno')
});
/*traer template de menu*/
const btnMenu = inicio.querySelector('#menu');
btnMenu.addEventListener('click',() => {
    changeHash ('/menu')
});
});
return inicio;
}