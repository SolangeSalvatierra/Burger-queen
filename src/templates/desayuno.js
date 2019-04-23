import {obtenerData,guardarPedidos} from '../controller/controller-firebase.js';

export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Desayunos </h3> <br>
        <input class="text-field" id="cliente" type="text">
        <div id="desayuno" class="conteiner-items">
        </div>
        <p> TOTAL : <input class="text-total"  type="text">  </p>
        <button id="pedido" class="btn"> Pedido </button>
    </div>
    `;
    breakfast.innerHTML= temDesayuno;

    /*Guarda el Pedido */
    const btnGuardarOrden = breakfast.querySelector('#pedido');
     btnGuardarOrden.addEventListener ('click',guardarPedidos);
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
            <img src="img/flecha-02.png" alt=""   class="btn-orden" data-precio="${doc.precio}"> 
            <div class= "inline"> 
            <input class="text-cantidad" value = "0" type="text"> 
            <input class="text-precio"  type="text"> </div> 
             </li>
            </ul>
        </div>

        `;
        listDesayunos +=temDesayuno;
    });
    const contenedorListaDesayuno = document.getElementById('desayuno');
    contenedorListaDesayuno.innerHTML= listDesayunos; 

        /*Mostrando precio*/
        const precio = document.querySelectorAll('.text-precio');
        const cantidad = document.querySelectorAll('.text-cantidad');
    const btnOrden = contenedorListaDesayuno.querySelectorAll('.btn-orden');
    // cantidad.innerHTML = '';
    //   console.log(precio)

    btnOrden.forEach((btn,i) => {
        btn.addEventListener ('click', () => {
            // console.log(btn.dataset.precio) 
        cantidad[i].value = parseInt(cantidad[i].value) + 1;
        precio[i].value = btn.dataset.precio * cantidad[i].value;
    // console.log(btn.dataset.precio)

         });
    })
//    console.log(data)
};