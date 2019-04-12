export const menu = () => {
    const almuerzoYCena = document.createElement('div');
    const temMenu = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2> <h3> Almuerzos </h3>
        <input class="text-field "id="cliente" type="text">
        <h4> HAMBUERGUESAS </h4>
        <p> Hambuerguesas simples -----s/.10
        <br> Hamburguesas doble -----s/.15
        </p>
        <h4> EXTRAS </h4>
        <p> Huevo -----+ s/.1
        <br> Queso  -----+ s/.1
        </p>
        <h> ACOMPAÑANTES </h4>
        <p> Papas fritas -----s/.5
        <br> Aros de cebolla -----s/.5 
        </p>
        <h4> BEBIDAS </h4>
        <p> Agua 500 ml -------- s/.5 
        <br> Agua 750ml -------- s/.7
        <br> Gaseosa 500ml -------- s/.7
        <br> Gaseosa 750ml -------- s/.10
        </p>
        <button id="pedidos" class="btn-orden"> Pedido </button>
    </div>
    `;
    almuerzoYCena.innerHTML = temMenu;

/*Obtener datos almacenados*/
const nombre = sessionStorage.getItem("Nombre");
/*Mostrar datos almacenados*/
almuerzoYCena.querySelector("#cliente").value = nombre;
    return almuerzoYCena;
}