export const navHome = () =>{const header = document.createElement ('div');
const temHeader = `
<header class="container-lg-fluid">
        <div class="container-lg-fluid">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark"" class="chuleta"> 
            <a class="navbar-brand" href="#">BURGER QUEEN</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#/">HOME<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/desayuno">DESAYUNO</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#/menu">MENU</a>
                </li>
              </ul>
            </div>
          </nav>
          </div>
    </header>
  <footer class="page-footer font-small dark bg-dark  text-center  py-2"> 
  <div class="footer-copyright text-white">
     Creado por @Solange 
  </div>
  </footer>
    `;
header.innerHTML = temHeader;
return header;
}