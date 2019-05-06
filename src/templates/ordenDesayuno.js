
export const orderDesayuno = (objOrder) => {
    const trElement = document.createElement('div');
    trElement.innerHTML=`
      <tr>
      <td scope="col" class="cantidad">${objOrder.cantidad}</td>
      <td scope="col" class="precio">${objOrder.precio}</td>
      <td scope="col" class="eliminar"> <button type="button" class="buttonDelete rounded-circle"><i class="fa fa-trash"></i></button></td> 
      </tr>
      `;
    return trElement;
  }