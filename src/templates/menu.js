import {obtenerMenu,mandarPedidos} from '../controller/controller-firebase.js';

export const menu = () => {
    const almuerzoYCena = document.createElement('div');
    const temMenu = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Almuerzos </h3>
        <input class="text-field" id="cliente" type="text">
        <div id="menu" class="conteiner-items">

        </div>
        <button id="pedidos" class="btn"> Pedido </button>
    </div>
    `;
    almuerzoYCena.innerHTML = temMenu;
    obtenerMenu(itemsMenu);

/*Obtener datos almacenados*/
const nombre = sessionStorage.getItem("Nombre");
/*Mostrar datos almacenados*/
almuerzoYCena.querySelector("#cliente").value = nombre;
    return almuerzoYCena;
};

export const itemsMenu = (data) => {
    let listMenu = '';
    data.forEach((doc) => {
        const temMenu = `
        <div id="menu">
            <ul>
            <li id="text-${doc.pedido}">${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  id="orden"> 
            <div class= "inline"> <input class="text" id="cantidad" type="text"> 
            <input class="text" id="precios" type="text"> </div>  </li>
            </ul>
        </div>
        `;
        listMenu +=temMenu;
    });

    const  contenedorListaMenu = document.getElementById('menu');
    contenedorListaMenu.innerHTML= listMenu;  
};