import {obtenerData, mandarPedidos,} from '../controller/controller-firebase.js';

export const desayuno = () => {
    const breakfast = document.createElement('div');
    const temDesayuno = `
    <section id="ordenProductos" class="orden-productos">
        <h1> LISTA DE PEDIDOS </h1>
        <h2> Cliente :   <input class="text-field" id="cliente" type="text"> </h2>
        <ul id = "id-pedidos">
         <li>
             <h4> Hamburguesa doble  </h4>
            <section class = "numero-orden">
                <p class="cantidad">
                    $15
                </p>
                <p class="precio"> 
                    $30
                </p>
            </section>
         </li>

        <h4> Total :  <input class="total" type="number> </h4>
        </ul>
    </section>
    <section id ="enviarPedido">
    <br> <br>
    <button id="pedido" class="btn" type="button"> Pedido </button>
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
    data.forEach((doc) => {
        // console.log (doc)
        const temDesayuno = `
        <div  id="desayuno" >
            <ul>
            <li id="text-${doc.pedido}">${doc.pedido} ----- s/. ${doc.precio}
            <img src="img/flecha-02.png" alt=""  class="btn-orden" data-id="${doc.id}"> 
            </li>
            </ul>
        </div>
        `;
        listDesayunos +=temDesayuno;
    });
    console.log(temDesayuno)
    const contenedorListaDesayuno = document.getElementById('desayuno');
    contenedorListaDesayuno.innerHTML= listDesayunos; 
};


//         /*Mostrando precio*/
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

//         /*total*
//         });
//     })
// //    console.log(data)
