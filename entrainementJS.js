const listemots = ["cachalot","pétunia","serviette"]
const listephrases = ["Pas de panique !", "Je vais bien.", "Merci pour ce test."]
let score = 0
choix=false

while (choix===false){
    choixuser = prompt("indiquez si vous souhaitez une liste de mot ou de phrases. tapez 1 pour la liste de mots ; tapez 2 pour la liste de phrases.")
    switch (choixuser) {
        case ("1") :
            for (let compteur =0 ; compteur<3 ; compteur++) {
                let motutilisateur = prompt("saisissez le mot "+ listemots[compteur])
                if(motutilisateur===listemots[compteur]) {
                score+=1 }
            }
            choix=true
            break
        case ("2") :
            for (let compteur =0 ; compteur<3 ; compteur++) {
                let motutilisateur = prompt("saisissez le mot "+ listephrases[compteur])
                if(motutilisateur===listephrases[compteur]) {
                score+=1 }
            }
            choix=true
            break
        default :
            choix=false  
    }
}

console.log("Le jeu est fini. Votre score :" + score)