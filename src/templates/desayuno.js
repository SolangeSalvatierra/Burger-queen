export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2>  
        <input class="text-field" id="cliente" type="text">
        <h3> Desayunos </h3> <br>
        <div class="conteiner">
        <div class="inline-block">
        <div id ="pedido1"> Café americano -----  </div> 
        <div id= "precio1"> s/.5  </div> 
        </div>
        <img src="img/flecha-02.png" alt="" id="cafe-ame">      
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">              

        <div id="pedido2"> Café con leche ----- </div> 
        <div id ="precio2"> s/.7 </div>  
        <img src="img/flecha-02.png" alt=""  id="cafe-lech"> 
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        
        <div id="pedido3"> Sandwich de jamón y queso ----- </div> 
        <div id="precio3"> s./10 </div>
        <img src="img/flecha-02.png" alt=""  id="sand-jam"> 
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        
        <div id="pedido4"> Jugo de frutas natural     ----- </div>
        <div id="precio4"> s/.7 </div> 
        <img src="img/flecha-02.png" alt=""  id="jugo"> 
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </div>
        <button id="pedido" class="btn"> Pedido </button>
    </div>
    `;

breakfast.innerHTML= temDesayuno;
/*Obtener datos almacenados*/
const nombre = sessionStorage.getItem("Nombre");
/*Mostrar datos almacenados*/
breakfast.querySelector("#cliente").value = nombre;
return breakfast
};