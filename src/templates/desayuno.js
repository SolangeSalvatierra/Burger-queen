import {obtenerData, mandarPedidos, arrPedidos} from '../controller/controller-firebase.js';
import { orderDesayuno } from '../templates/ordenDesayuno.js';

export const desayuno = () => {
    const breakfast = document.createElement('div');
    const temDesayuno = `
    <section id="ordenProductos" class=".col-xl-4 .col-lg-4 .col-md-4 orden-productos">
        <h1> LISTA DE PEDIDOS </h1>
        <h2> Cliente :  <input class="text-field" id="cliente" type="text"> </h2>
        <table  id="id-pedidos" class="table table-striped table-dark">
        <thead>
         <tr>
             <th scope="col" class="cantidad"> Cantidad   </th>
             <th scope="col" class="precio"> Precio  </th>
             <th scope="col" class="eliminar"> Eliminar  </th>
        </tr>
        </thead>
        <tbody id= "tabla" class= "tabla">

        <tfoot>
            <tr>
              <th colspan="4">Total</th>            
              <th> 0 </th>
            </tr>
          </tfoot>
        </tbody>
        </table >
    
        <br> <br>
        <button id="pedido" type="button" class="btn btn-warning  btn-lg"> Pedido </button>
    </section>

    <section id="titulo" class= ".col-xl-8 .col-lg-8 .col-md-8 pedidos">
    <h2 class=""> MENU </h2> 
    <h3 class=""> Desayunos </h3> <br>
    <div id="enviarPedido">
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
        <div id="desayuno" >
            <ul>
            <li id="text-${doc.pedido}"> ${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  class="btn-orden" id='btnOrden-${doc.id}' data-id="${doc.id}"> 
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
   
    const pedidoAgregado = document.getElementById('tabla');
   
   
    /*pushea pedido en un array*/
    const btnOrden = contenedorListaDesayuno.querySelectorAll('.btn-orden');
    pedidoAgregado.innerHTML ='';

    btnOrden.forEach((btn,i) => {
    btn.addEventListener ('click', () => {
    const idDeProducto = btn.dataset.id;
    const productoSeleccionado = data.find ((element) => element.id === idDeProducto) 
    productoSeleccionado.cantidad = productoSeleccionado.cantidad + 1;
    productoSeleccionado.precio = productoSeleccionado.cantidad * productoSeleccionado.precio;
    console.log (productoSeleccionado)
    pedidoAgregado.appendChild(orderDesayuno(productoSeleccionado)) ;
    arrPedidos(productoSeleccionado);
    
        });

    });
};


