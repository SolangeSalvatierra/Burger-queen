export const navHome = () =>{
      //Carga de Headerhome
const header = document.createElement ('div');
const temHeader = `
<header>
    <!-- <img src="img/logo.png" alt=""> -->
          <div class = "contenedor">
            <h1 class="burguer">Burguer Queen </h1>
            <input type="checkbox" id="menu-bar">
            <label class="icon-menu" for="menu-bar"> <img src="img/line_weight_white_54x54.png" alt=""> 
            </label>
              <nav class="menu">
                  <a href="#/"><i class='fas fa-home'></i> Inicio </a>
                  <a href="#/desayuno"><i class='fas fa-coffee'></i>  Desayunos</a>
                  <a href="#/menu"> <i class="fa fa-cutlery"></i> Menu</a> 
              </nav>
          </div>
          </header>

          <footer class="footer">
          <div class="background color flex padding">
            <p class="not-margin">Creado por @Solange</p>
          </div>
        </footer>
    `;
header.innerHTML = temHeader;

//Inicio
return header;
}