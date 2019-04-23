import {routerBQ}  from '../src/router.js';

const init= () => {
  // Initialize Firebase
  firebase.initializeApp({
    apiKey: 'AIzaSyCmt8jlZv_64WIbly7SgPRSys_GlGAHQbc',
    authDomain: 'burger-queen-7b90b.firebaseapp.com',
    projectId: 'burger-queen-7b90b'
  });
    routerBQ (); 
}
window.addEventListener('load', init)    
