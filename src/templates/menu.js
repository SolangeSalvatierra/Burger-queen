export const menu = () => {
    const almuerzoYCena = document.createElement('div');
    const temMenu = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2> <h3> Almuerzos </h3>
        <input class="text-field "id="cliente" type="text">
        <h4> HAMBUERGUESAS </h4>
        <p> Hambuerguesas simples -----s/.10 
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Hamburguesas doble -----s/.15   
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
    
        <h4> EXTRAS </h4>
        <p> Huevo -----+ s/.1     
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Queso  -----+ s/.1   <a href="#home" > 
        <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
       
        <h> ACOMPAÑANTES </h4>
        <p> Papas fritas -----s/.5    
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Aros de cebolla -----s/.5    
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>

        <h4> BEBIDAS </h4>
        <p> Agua 500 ml -------- s/.5    
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Agua 750ml -------- s/.7    
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Gaseosa 500ml -------- s/.7  
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
        <p> Gaseosa 750ml -------- s/.10  
        <a href="#home" > <img src="img/flecha-02.png" alt=""> </a>
        <input class="text" id="cantidad" type="text"> <input class="text" id="precios" type="text">
        </p>
    
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