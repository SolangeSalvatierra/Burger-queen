export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2>  
        <input class="text-field" id="cliente" type="text">
        <h3> Desayunos </h3> <br>
        <p> Café americano ----- s/.5 
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>     
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">              
        </p>
        <p> Café con leche -----s/.7  
        <a href="#" > <img src="img/flecha-02.png" alt=""> </a> 
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Sandwich de jamón y queso	-----s./10 
        <a href="#" > <img src="img/flecha-02.png" alt=""> </a> 
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Jugo de frutas natural     -----s/.7 
        <a href="#" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p >
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