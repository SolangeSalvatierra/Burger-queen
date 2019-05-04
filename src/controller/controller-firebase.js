/*Colleccion desayuno */
    export const obtenerData = (callback) =>
    firebase.firestore().collection('desayuno')
    .onSnapshot((querySnapshot) => {
        const arrDesayuno = []; 
        querySnapshot.forEach((doc) => {
          arrDesayuno.push({id: doc.id, ...doc.data()})
        });
        callback(arrDesayuno)
    });

/*Colleccion menu */
    export const obtenerMenu = (callback) =>
    firebase.firestore().collection('menú')
    .onSnapshot((querySnapshot) => {
        const arrMenu = []; 
        querySnapshot.forEach((doc) => {
          arrMenu.push({id: doc.id, ...doc.data()})
        });
        callback(arrMenu)
    });

/*Guarda el Pedido en Firebase */
      export const mandarPedidos = () => { 
        return firebase.firestore().collection('pedidos').add({
        cliente:"Carlos",
        pedido:"Café americano",
        precio: 5,
        cantidad:0
       })
       .then (function(docRef) {
           console.log ("Document written with ID: ",docRef.id);
       })
       .catch(function(error){
           console.error("Error adding document: ",error);
       });
    };
/*Guarda nombre del cliente en un array*/
let arr = [];
export const nombreClienteArr = () => {
    const name = document.querySelector('#name').value;    
    const nombre = document.querySelector('#cliente'); 
    arr.push(name)
    console.log(arr)
    nombre.innerHTML = name; 
  }

/*Guarda orden en un array*/
export const arrPedidos = (objeto) => {
    arr.push(objeto)
  console.log(arr)
  return arr
 }

  //   export const arrPedidos = (objeto) => {
  //       const objArr = arr.find(obj => obj.id === objeto.id)
  //       if(objArr === undefined){
  //        objeto.cantidad = 1
  //        arr.push(objeto)  
  //       } else {
  //       objeto.cantidad += 1
  //       }
  //        console.log(arr)
  //   return arr;
  // };


   
