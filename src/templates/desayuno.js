export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Desayunos </h3> <br>
        <input class="text-field" id="cliente" type="text">
        <div class="conteiner">
        
        <div id ="pedido1" class= "inline" > Café americano -----  </div> 
        <div id="precio1" class= "inline" > s/.5  </div> 
        <img src="img/flecha-02.png" alt="" id="cafe-ame">      
        <div class= "inline" > <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>              
        <br>
        <div id="pedido2" class= "inline" > Café con leche ----- </div> 
        <div id ="precio2" class= "inline" > s/.7 </div>  
        <img src="img/flecha-02.png" alt=""  id="cafe-lech"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id="pedido3" class= "inline" > Sandwich de jamón y queso ----- </div> 
        <div id="precio3" class= "inline" > s./10 </div>
        <img src="img/flecha-02.png" alt=""  id="sand-jam"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id="pedido4" class= "inline"> Jugo de frutas natural ----- </div>
        <div id="precio4" class= "inline"> s/.7 </div> 
        <img src="img/flecha-02.png" alt=""  id="jugo"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
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

