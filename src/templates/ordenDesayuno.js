
export const orderDesayuno = (objOrder) => {
    // console.log(objOrder)
    const trElement = document.createElement('div');
    trElement.innerHTML=`
      <td>${objOrder.cantidad}</td>
      <td>${objOrder.precio}</td>
      <td> <button type="button" class="buttonDelete rounded-circle"><i class="fa fa-trash"></i></button></td> 
    `;
    return trElement;
  }