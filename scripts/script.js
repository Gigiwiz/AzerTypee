
// Afficher le resultat


function afficherResultat(score, nombreMotsProposes) {

    let spanScore = document.querySelector(".zoneScore span");

    let affichageScore = `${score }/${nombreMotsProposes}`;

    spanScore.innerText = affichageScore;
    
}

// Fonction pour afficher les MOTS OU les PHRASES

function afficherProposition(proposition){

let zoneProposition = document.querySelector(".zoneProposition")
zoneProposition.innerText = proposition

};

/**
 * Cette fonction construit et affiche l'email. 
 * @param {string} nom : le nom du joueur
 * @param {string} email : l'email de la personne avec qui il veut partager son score
 * @param {string} score : le score. 
 */

function afficherEmail(nom, email, score){

    let mailto = `mailto:${email}+?subject=Partage du score Aezrtype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le jeu Azertype !`
    location.href = mailto;

};


/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @throws {Error}
 */

//** lA fonction valider Nom */

function validerNom(nom) {

    if(nom.length<2){

        throw new Error(`Le nom est trop court`)
    }

}

/**
 * Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
 * @param {string} email 
 * @throws {Error}
 */


//** lA fonction valider email */

function validerEmail(email) {

    let emailRegEx = new RegExp ("[a-z0-9._-]+@[a-z0-9._-]+\\.+[a-z0-9._-]+")

    if(!emailRegEx.test(email)){

        throw new Error(`L'adresse mail est incorrecte`)
    }
        
}

/**
 * Cette fonction affiche le message d'erreur passé en paramètre. 
 * Si le span existe déjà, alors il est réutilisé pour ne pas multiplier
 * les messages d'erreurs. 
 * @param {string} message 
 */


//** fonction pour afficher un message d'erreur */

function afficherMessageErreur(message){

    let spanErreurMessage = document.getElementById("erreurMessage")
    
    if(!spanErreurMessage){

        let popup = document.querySelector(".popup")
        spanErreurMessage = document.createElement("span")
        spanErreurMessage.id = "erreurMessage"

        popup.append(spanErreurMessage)
    }
    spanErreurMessage.innerText = message;
    
}


/**
 * Cette fonction permet de récupérer les informations dans le formulaire
 * de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 * @param {string} scoreEmail 
 */

//** la fonction gererFormulaire */

function gererFormulaire(scoreEmail){

    try{

        let baliseNom = document.getElementById("nom");
        let nom = baliseNom.value;
        validerNom(nom)
    
        let baliseEmail = document.getElementById("email");
        let email = baliseEmail.value;
        validerEmail(email)
        afficherEmail(nom, email, scoreEmail)

        afficherMessageErreur("")

      
    }
    catch(erreur){
        // gerer l'erreur

        afficherMessageErreur(erreur.message)
        

    }
    
}

// fonction pour LANCER LE JEU


function lancerJeu() 
{

    let score = 0
    let i = 0;
    let listeProposition = listeMots;

// Appel des variables "bouton de validation =btnValiderMot" et "zone e saisie = inputEcriture"
    let btnValiderMot = document.getElementById("btnValiderMot");
    let inputEcriture = document.getElementById("inputEcriture");

    
// ajout de l'evenement "click" qui change listeMots[i] avec i++ et augmente le score si "inputEcriture.value === listeMots[i]""
    afficherProposition(listeProposition[i]);

    btnValiderMot.addEventListener("click", ()=> {

        if (inputEcriture.value === listeProposition[i]) {
            score++
        }

        i++;

        afficherResultat(score, i)

        inputEcriture.value = "";

        // si tous les mots sont saisis, afficher "Le jeu est fini"
        if (listeProposition[i] === undefined){

            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true
            inputEcriture.disabled = true
        }
        else{
            afficherProposition(listeProposition[i]);
            inputEcriture.value = ""
        }

    })
   

// Changez de bouton radio (Mots/Phrases)

let listeBtnRadio = document.querySelectorAll(".optionSource input");


for (let index = 0; index < listeBtnRadio.length; index++) {
    
    listeBtnRadio[index].addEventListener("change", (event) => {

        if (event.target.value === "1") {
    
            listeProposition = listeMots
             
         } else{
     
             listeProposition = listePhrases
         }
         
         afficherProposition(listeProposition[i])

        });
};

// Ecoute de l'evenement "submit" pour envoyer le formulaire 

let form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();
    let scoreEmail = `${score }/${i}`;
    gererFormulaire(scoreEmail)

})
afficherResultat(score, i);
}







