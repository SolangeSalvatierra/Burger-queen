export const menu = () => {
    const temMenu = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2> <h3> Almuerzos </h3>
        <h4> HAMBUERGUESAS </h4>
        <p> Hambuerguesas simples -----s/.10
        <br> Hamburguesas doble -----s/.15
        </p>
        <h4> EXTRAS </h4>
        <p> Huevo -----+ s/.1
        <br> Queso  -----+ s/.1
        </p>
        <h> ACOMPAÑANTES </h4>
        <p> Papas fritas -----s/.5
        <br> Aros de cebolla -----s/.5 
        </p>
        <h4> BEBIDAS </h4>
        <p> Agua 500 ml -------- s/.5 
        <br> Agua 750ml -------- s/.7
        <br> Gaseosa 500ml -------- s/.7
        <br> Gaseosa 750ml -------- s/.10
        </p>
        <button id="pedidos" class="btn-orden"> Pedido </button>
    </div>
    `;
    const almuerzoYCena = document.createElement('div');
    almuerzoYCena.innerHTML = temMenu;

    // /*Funcion de Capturar, Almacenar datos y Limpiar campos*/
    // const btnEnviar = inicio.querySelector('#btn-name');
    // btnEnviar.addEventListener('click', () => {
    // /*Captura de datos escrito en los inputs*/ 
    // const nom =  document.getElementById ("name").value;
    // /*Guardando los datos en el LocalStorage*/
    // localStorage.setItem("Nombre",nom);
    // /*Limpiando los campos o inputs*/
    // document.getElementById("name").value = "";



    return almuerzoYCena;
}