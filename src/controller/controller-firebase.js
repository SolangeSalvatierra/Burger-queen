export const obtenerData = (callback) =>
    firebase.firestore().collection('desayuno')
    .onSnapshot((querySnapshot) => {
        const arrDesayuno = []; 
        querySnapshot.forEach((doc) => {
          arrDesayuno.push({id: doc.id, ...doc.data()})
        });
        callback(arrDesayuno)
    });

    export const guardarPedidos = () => { 
        return firebase.firestore().collection('desayuno').add({
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
    }
    

    export const obtenerMenu = (callback) =>
    firebase.firestore().collection('menú')
    .onSnapshot((querySnapshot) => {
        const arrMenu = []; 
        querySnapshot.forEach((doc) => {
          arrMenu.push({id: doc.id, ...doc.data()})
        });
        callback(arrMenu)
    });

