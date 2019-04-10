import {home} from './home.js'

export const desayuno = () => {
    const temDesayuno = `
    <div class="conteiner">
        <h2 class="text-center"> MENU </h2>  
        <input class="text-field "id="cliente" type="text">
        <h3> Desayunos </h3> <br>
        <button id="Café americano" class="btn"> Café americano ----- s/.5  </button>	<br>
            Café con leche	 -----s/.7 <br>
            Sandwich de jamón y queso	-----s./10 <br>
            Jugo de frutas natural     -----s/.7 <br>
        </p >
        <button id="pedido" class="btn-orden"> Pedido </button>
    </div>
    `;

const breakfast =document.createElement('div');
breakfast.innerHTML= temDesayuno;
return breakfast
};