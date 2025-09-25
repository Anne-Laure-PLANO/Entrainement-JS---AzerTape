const listemots = ["Bravo","Magnifique","Exceptionnel"]
const listephrases = ["Anne-Laure fait du bon travail !", "J'adore ce code.", "Merci pour ce test !"]
let score = 0
choix=false

while (choix===false){
    choixuser = prompt("Indiquez si vous souhaitez une liste de mot ou de phrases. Tapez 1 pour la liste de mots ; tapez 2 pour la liste de phrases.")
    switch (choixuser) {
        case ("1") :
            for (let compteur =0 ; compteur<3 ; compteur++) {
                let motutilisateur = prompt("Saisissez le mot suivant : "+ listemots[compteur])
                if(motutilisateur===listemots[compteur]) {
                score+=1 }
            }
            choix=true
            break
        case ("2") :
            for (let compteur =0 ; compteur<3 ; compteur++) {
                let motutilisateur = prompt("Saisissez la phrase suivante : "+ listephrases[compteur])
                if(motutilisateur===listephrases[compteur]) {
                score+=1 }
            }
            choix=true
            break
        default :
            choix=false  
    }
}
console.log("Le jeu est fini. Merci pour votre participation.Votre score est :" + score)
