
export const home = () => {
    const inicio = document.createElement('div');
    const template = `
    <div class="conteiner" id="inicio">
        <form>
        <h5 class="text-center"><strong> Cliente: </strong></h5>
        <input "id="name" class="text-field  type="text" placeholder="Nombre del cliente">
        <button id="btn-name"> Cliente </button> <br> <br>
        <button id="desayuno">DESAYUNO</button> 
        <button id="menu">MENU</button>
        </form>
        <p> s./15 ¡Ofertas! </p>
        <ul class ="slider">
            <li>
                <input type="radio" id="sbutton1" name = "imagen1" checked>
                <label for =""> </label>
                <img src="img/ima1.jpg" alt="">
            </li>    
            <li>
                <input type="radio" id="sbutton2" name = "imagen2">
                <label for =""> </label>
                <img src="img/ima2.jpg" alt="">
            </li>
            <li>
                <input type="radio" id="sbutton3" name = "imagen3">
                <label for =""> </label>
                <img src="img/ima3.jpg" alt="">
            </li> 
            <li>
                <input type="radio" id="sbutton4" name = "imagen4">
                <label for =""> </label>
                <img src="img/ima4.jpg" alt="">
            </li>
        </ul>    
    </div>
    `;
    inicio.innerHTML = template;
        return inicio;
}
