import {obtenerData, guardarPedidos} from '../controller/controller-firebase.js';

export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Desayunos </h3> <br>
        <input class="text-field" id="cliente" type="text">
        <div id="desayuno" class="conteiner-items">
        </div>
        <button id="total" class = "btn" type= "button"> TOTAL : </button>
        <input class="text-total"  type="text"> <br>
        <br>
        <button id="pedido" class="btn" type= "button"> Pedido </button>
    </div>
    `;
    breakfast.innerHTML= temDesayuno;

    /*Guarda el Pedido */
    const btnGuardarOrden = breakfast.querySelector('#pedido');
     btnGuardarOrden.addEventListener ('click', guardarPedidos );
    obtenerData(itemsDesayuno);

    /*Obtener datos almacenados*/
    const nombre = sessionStorage.getItem("Nombre");
    /*Mostrar datos almacenados*/
    breakfast.querySelector("#cliente").value = nombre;

    //  /*Funcion sumar pedidos*/
    //  const total = document.querySelectorAll('.text-total');
    //  const btnPrecioTotal = breakfast.querySelector('#total');

    //  btnPrecioTotal.forEach((btn,i) => {
    //     btn.addEventListener ('click', () => {
    //     total[i].value = btn.dataset.precio * cantidad[i].value;

    //      });
    // })

    return breakfast;
    };
    

export const itemsDesayuno = (data) => {
    let listDesayunos = '';
    data.forEach((doc) => {
        // console.log (doc)
        const temDesayuno = `
        <div  id="desayuno" >
            <ul>
            <li id="text-${doc.pedido}">${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  class="btn-orden" data-id="${doc.id}"> 
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
    

    const arrObj = [];

    btnOrden.forEach((btn,i) => {
        btn.addEventListener ('click', () => {
        const idDeProducto = btn.dataset.id;

        /* crear variable para seleccionar el primer element que se le haga click 
        y se le iguala con el id de cada producto */ 
       const productoSeleccionado = data.find ((element) => element.id === idDeProducto) 
       arrObj.push(productoSeleccionado);

        /*variables para guardar cantidad, precio*/
       productoSeleccionado.cantidad = productoSeleccionado.cantidad + 1;
       productoSeleccionado.precio = productoSeleccionado.precio * productoSeleccionado.cantidad;

       cantidad[i].value = productoSeleccionado.cantidad;
       precio[i].value = productoSeleccionado.precio;
        // console.log(productoSeleccionado)
        console.log(arrObj)
        /*total*/



        // const total ;




         });
    })
//    console.log(data)

};