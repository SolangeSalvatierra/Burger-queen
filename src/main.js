import {routerBQ}  from '../src/router.js';

const init= () => {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyCmt8jlZv_64WIbly7SgPRSys_GlGAHQbc',
    authDomain: 'burger-queen-7b90b.firebaseapp.com',
    projectId: 'burger-queen-7b90b'
  });


//   // Initialize Cloud Firestore through Firebase
//   var db = firebase.firestore();
//   //leer documentos
//   db.collection("desayuno").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         // console.log(`${doc.id} => ${doc.data().pedido}`);
//     document.getElementById('menu').innerHTML += '<ul><li>'+doc.data().pedido+'</li><ul>'
//     });
// });
    routerBQ (); 
}
window.addEventListener('load', init)    
