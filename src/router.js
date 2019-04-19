import {home} from './templates/home.js';
import {desayuno} from './templates/desayuno.js';
import {menu} from './templates/menu.js';
import {navHome} from './templates/header.js';
export const changeHash = (nameHash) => {
    window.location.hash = nameHash;
}

// cambio de ruta 
const cambiarTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
        return vistaTmp ('#/home');
    } else if ( hash === '#/home' || hash === '#/desayuno' || hash === '#/menu') {
        return vistaTmp(hash);
    } else {
        return vistaTmp ('#/home');
    }
}
//llamo a lor templates para cambiar las rutas
const vistaTmp = (routers) => {
    const router = routers.substr(2, routers.length -2)
    const contenedor = document.getElementById("contenedor")
    contenedor.innerHTML = '';
    switch (router) {
        case 'home':
        contenedor.appendChild(home());
        contenedor.appendChild(navHome());
        break;
        case 'desayuno':
        contenedor.appendChild(desayuno());
        contenedor.appendChild(navHome());
        break;
        case 'menu':
        contenedor.appendChild(menu());
        contenedor.appendChild(navHome());
        break;
        default: 
        contenedor.appendChild(home()); 
        contenedor.appendChild(home());
        break;
    }
};
export const routerBQ = () => {
    window.addEventListener('load', cambiarTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => cambiarTmp(window.location.hash)
    };