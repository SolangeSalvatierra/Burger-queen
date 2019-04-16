export const menu = () => {
    const almuerzoYCena = document.createElement('div');
    const temMenu = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Almuerzos </h3>
        <input class="text-field" id="cliente" type="text">
        <div class="conteiner">

        <h4> HAMBUERGUESAS </h4>
        <div id ="pedido1" class= "inline"> Hambuerguesas simples ----- </div> 
        <div id ="precio1" class= "inline"> s/.10 </div> 
        <img src="img/flecha-02.png" alt="" id = "hambur-sim">
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido2" class= "inline"> Hamburguesas doble -----</div>
        <div id ="precio2" class= "inline"> s/.15 </div>  
        <img src="img/flecha-02.png" alt="" id="hambur-do"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>

        <h4> EXTRAS </h4>
        <div id ="pedido3" class= "inline"> Huevo -----+ </div>
        <div id ="precio3" class= "inline"> s/.1 </div>   
        <img src="img/flecha-02.png" alt="" id ="huevo">
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido4" class= "inline"> Queso  -----+ </div>
        <div id ="precio4" class= "inline"> s/.1 </div>
        <img src="img/flecha-02.png" alt="" id="queso"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
       
        <h> ACOMPAÑANTES </h4>
        <div id ="pedido5" class= "inline"> Papas fritas ----- </div>
        <div id ="precio5" class= "inline"> s/.5 </div> 
        <img src="img/flecha-02.png" alt="" id="papas"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text"> 
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido6" class= "inline"> Aros de cebolla ----- </div>
        <div id ="precio6" class= "inline"> s/.5 </div>    
        <img src="img/flecha-02.png" alt="" id ="aros"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text">
        <input class="text" id="precios" type="text"> </div>
        <br>

        <h4> BEBIDAS </h4>
        <div id ="pedido7" class= "inline"> Agua 500 ml -------- </div>
        <div id ="precio7" class= "inline"> s/.5 </div>    
        <img src="img/flecha-02.png" alt="" id ="agua500"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text">
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido8" class= "inline"> Agua 750ml -------- </div>
        <div id ="precio8" class= "inline"> s/.7 </div>    
        <img src="img/flecha-02.png" alt="" id="agua750"> 
        <div class= "inline"> <input class="text" id="cantidad" type="text">
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido9" class= "inline"> Gaseosa 500ml -------- </div>
        <div id ="precio9" class= "inline"> s/.7 </div>  
        <img src="img/flecha-02.png" alt="" id= "gaseosa500">
        <div class= "inline"> <input class="text" id="cantidad" type="text">
        <input class="text" id="precios" type="text"> </div>
        <br>
        <div id ="pedido10" class= "inline"> Gaseosa 750ml -------- </div>
        <div id ="precio10" class= "inline"> s/.10 </div>  
        <img src="img/flecha-02.png" alt="" id="gaseosa750">
        <div class= "inline"> <input class="text" id="cantidad" type="text">
        <input class="text" id="precios" type="text"> </div>
        <br>
        </div>
        <button id="pedidos" class="btn"> Pedido </button>
    </div>
    `;
    almuerzoYCena.innerHTML = temMenu;

/*Obtener datos almacenados*/
const nombre = sessionStorage.getItem("Nombre");
/*Mostrar datos almacenados*/
almuerzoYCena.querySelector("#cliente").value = nombre;
    return almuerzoYCena;
}