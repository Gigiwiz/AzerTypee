/*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la 
 * fermeture de la popup de partage. 
 * 
 *********************************************************************************/

/**** 1er méthode pour déclancher/cacher les popup - 
 * avec l'écoute de l'event "onclick" et la définition de la fonction directement dans le HTML ****/

/**
 * Cette fonction (de base) affiche la popup pour partager son score. 
 */
function afficherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.add("active")
}

/**
 * Cette fonction (de base)  cache la popup pour partager son score. 
 */
function cacherPopup() {
    let popupBackground = document.querySelector(".popupBackground")
    popupBackground.classList.remove("active")
}

/**
 * Cette fonction initialise les écouteurs d'événements qui concernent 
 * l'affichage de la popup. 
 */

/**** 2eme méthode pour déclancher/cacher les popup ****/ 
/* (il faut supprimer les event "onclick" et les fonctions dans le HTML) */

// let btnPartage = document.querySelector(".zonePartage button")

// btnPartage.addEventListener("click", ()=>{

//     afficherPopup();
// });

// let popupBackground = document.querySelector(".popupBackground")

// popupBackground.addEventListener("click", ()=>{

//     cacherPopup();
// });

/**** 3eme méthode pour déclancher/cacher les popup ****/
/* (il faut supprimer les event "onclick" et les fonctions dans le HTML) */

// function initAddEventListenerPopup() {
//     // On écoute le click sur le bouton "partager"
//     btnPartage = document.querySelector(".zonePartage button")
//     let popupBackground = document.querySelector(".popupBackground")
//     btnPartage.addEventListener("click", () => {
//         // Quand on a cliqué sur le bouton partagé, on affiche la popup
//         afficherPopup()
//     })

//     // On écoute le click sur la div "popupBackground"
//     popupBackground.addEventListener("click", (event) => {
//         // Si on a cliqué précisément sur la popupBackground 
//         // (et pas un autre élément qui se trouve dedant)
//         if (event.target === popupBackground) {
//             // Alors on cache la popup
//             cacherPopup()
//         }
//     })
// }


