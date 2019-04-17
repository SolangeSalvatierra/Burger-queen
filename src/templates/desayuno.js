export const desayuno = () => {
    const breakfast =document.createElement('div');
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="inline"> MENU </h2> 
        <h3 class="inline"> Desayunos </h3> <br>
        <input class="text-field" id="cliente" type="text">
        <div id="menu" class="conteiner">


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

