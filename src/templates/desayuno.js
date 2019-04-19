import {obtenerData} from '../controller/controller-firebase.js';

export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Desayunos </h3> <br>
        <input class="text-field" id="cliente" type="text">
        <div id="desayuno" class="conteiner-items">

        </div>
        <button id="pedido" class="btn"> Pedido </button>

    </div>
    `;
    breakfast.innerHTML= temDesayuno;
    obtenerData(itemsDesayuno);

    /*Obtener datos almacenados*/
    const nombre = sessionStorage.getItem("Nombre");
    /*Mostrar datos almacenados*/
    breakfast.querySelector("#cliente").value = nombre;
    return breakfast;
    };

export const itemsDesayuno = (data) => {
    let listDesayunos = '';
    data.forEach((doc) => {
        const temDesayuno = `
        <div  id="desayuno" >
            <ul>
            <li id="text-${doc.pedido}">${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  id="cafe-lech"> 
            <div class= "inline"> <input class="text" id="cantidad" type="text"> 
            <input class="text" id="precios" type="text"> </div>  </li>
            </ul>
        </div>
        `;
        listDesayunos +=temDesayuno;
    });

    const contenedorListaDesayuno = document.getElementById('desayuno');
    contenedorListaDesayuno.innerHTML= listDesayunos;  
};
