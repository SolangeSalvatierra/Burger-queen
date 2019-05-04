import {obtenerData, mandarPedidos, arrPedidos} from '../controller/controller-firebase.js';
import { orderDesayuno } from '../templates/ordenDesayuno.js';

export const desayuno = () => {
    const breakfast = document.createElement('div');
    const temDesayuno = `
    <section id="ordenProductos" class="orden-productos">
        <h1> LISTA DE PEDIDOS </h1>
        <h2> Cliente :   <input class="text-field" id="cliente" type="text"> </h2>
        <table class="table table-striped table-dark" id="id-pedidos">
        <thead>
         <tr>
             <th scope="col" class="cantidad"> Cantidad   </th>
             <th scope="col" class="precio"> Precio  </th>
             <th scope="col" class="precio"> Eliminar  </th>
        </tr>
        </thead>
        <tbody id= "tabla">
        </tbody>
        </table>
        <h4> Total :  <input class="total" type="number"> </h4>
        </ul>
        <br> <br>
        <button id="pedido" type="button" class="btn btn-warning  btn-lg"> Pedido </button>
    </section>
    
    <section id="titulo" class="pedidos">
    <h2 class=""> MENU </h2> 
    <h3 class=""> Desayunos </h3> <br>
    <div id="enviarPedido" >
    </div>
    </section>
    `;
    breakfast.innerHTML= temDesayuno;

    /*Guarda el Pedido */
    const btnMandarPedidos = breakfast.querySelector('#pedido');
    btnMandarPedidos.addEventListener ('click', mandarPedidos);
    obtenerData(itemsDesayuno);

    /*Obtener datos almacenados*/
    const nombre = sessionStorage.getItem("Nombre");
    /*Mostrar datos almacenados*/
    breakfast.querySelector("#cliente").value = nombre;
    return breakfast;
    };

export const itemsDesayuno = (data) => {
    let listDesayunos = '';
    // debugger;
    data.forEach((doc) => {
        // console.log (doc)
        const temDesayuno = `
        <div id="desayuno">
            <ul>
            <li id="text-${doc.pedido}"> ${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  class="btn-orden" data-id="${doc.id}"> 
            </li>
            </ul>
        </div>
        `;
        listDesayunos +=temDesayuno;
    //   console.log(listDesayunos);
    });
    // debugger;
    const contenedorListaDesayuno = document.getElementById('enviarPedido');
    contenedorListaDesayuno.innerHTML= listDesayunos; 

    const btnOrden = contenedorListaDesayuno.querySelectorAll('.btn-orden');



    // const pedidoAgregado = document.getElementById('tabla')

    // const btnOrden = contenedorListaDesayuno.querySelectorAll('.btn-orden');
    // btnOrden.forEach((btn,i) => {
    // const idDeProducto = btn.dataset.id;
    // btn.addEventListener ('click',() => {
    //     console.log(btn)
    //     // pedidoAgregado.innerHTML= ''
    //     // let sumaTotal=0
    //     // arrPedidos(btn.dataset.id)
    //     arrPedidos();
    // });
    
//      /*Mostrando precio*/
//         const precio = document.querySelectorAll('.text-precio');
//         const cantidad = document.querySelectorAll('.text-cantidad');
//         const btnPrecioTotal = document.querySelector('.text-total');
    
//     const btnOrden = contenedorListaDesayuno.querySelectorAll('.btn-orden');
//     const arrObj = [];
//     btnOrden.forEach((btn,i) => {
//     btn.addEventListener ('click', () => {
//     const idDeProducto = btn.dataset.id;
// /* crear variable para seleccionar el primer element que se le haga click 
// y se le iguala con el id de cada producto */ 
//     const productoSeleccionado = data.find ((element) => element.id === idDeProducto) 
//     arrObj.push(productoSeleccionado);

//         /*variables para guardar cantidad, precio*/
//        productoSeleccionado.cantidad = productoSeleccionado.cantidad + 1;
//        productoSeleccionado.precio = productoSeleccionado.precio * productoSeleccionado.cantidad;

//        cantidad[i].value = productoSeleccionado.cantidad;
//        precio[i].value = productoSeleccionado.precio;
//         // console.log(productoSeleccionado)
//  console.log(arrObj)

        };
    /*)*/
// };
