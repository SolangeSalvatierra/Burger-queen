export const obtenerData = (callback) =>
    firebase.firestore().collection('desayuno')
    .onSnapshot((querySnapshot) => {
        const arrDesayuno = []; 
        querySnapshot.forEach((doc) => {
          arrDesayuno.push({id: doc.id, ...doc.data()})
        });
        callback(arrDesayuno)
    });

    export const obtenerMenu = (callback) =>
    firebase.firestore().collection('menú')
    .onSnapshot((querySnapshot) => {
        const arrMenu = []; 
        querySnapshot.forEach((doc) => {
          arrMenu.push({id: doc.id, ...doc.data()})
        });
        callback(arrMenu)
    });
