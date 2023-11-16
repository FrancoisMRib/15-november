/*
Créer une classe Personnage qui va contenir les éléments suivants :
-nom, force, défense, vie
-une méthode pour attaquer (elle va soustraire à la vie du personnage la valeur de attaque (attaquant) à la défense (notre personnage),
Créer une classe Combat qui  va contenir les éléments suivants :
-nbr de tour, score joueur 1, score joueur 2,
-Une méthode qui va lancer les combats (elle va appeler la méthode attaque du joueur 1), (appeler la méthode d'attaque du joueur 2). 
Cela va s'exécuter autant de tour que la valeur nbr de tour. 
Celui qui arrive à zéro à perdu.
Elle va afficher le nom du gagnant. 
*/

class Personnage {
    constructor (nom, force, defense, vie) {
        this.nom = nom ;
        this.force = force ;
        this.defense = defense ;
        this.vie = vie ;
    }
    attaque(objet) {
        return objet.vie = objet.vie - (this.force - objet.defense);
    }
}
const joueur1 = new Personnage("Gandalf", 10, 5, 11) ;
const joueur2 = new Personnage("Merlin", 12, 3, 10) ;
const joueur3 = new Personnage("Dumbledore", 40, 15, 10) ;

console.log(`Le premier joueur est ${joueur1.nom} et a une force de ${joueur1.force}.`);
console.log(`Le deuxième joueur est ${joueur2.nom} et a une force de ${joueur2.force}.`);

class Combat {
    constructor (nbrTour, scoreJoueur1, scoreJoueur2) {
        this.nbrTour = nbrTour ;
        this.scoreJoueur1 = scoreJoueur1 ;
        this.scoreJoueur2 = scoreJoueur2 ;
    }
    lanceCombats() {
        //console.log(this.scoreJoueur1.attaque(this.scoreJoueur2));
        for (let i = 0; i < this.nbrTour ; i++) {
            console.log("Tour n°", i+1);
            this.scoreJoueur1.attaque(this.scoreJoueur2);
            this.scoreJoueur2.attaque(this.scoreJoueur1);
            if (this.scoreJoueur1.vie <= 0) {
                console.log("Joueur2 a gagné !");
                Combat.scoreJoueur2++;
                break;
            } else if (this.scoreJoueur2.vie <= 0) {
                console.log("Joueur1 a gagné !");
                Combat.scoreJoueur1++;
                break;
            }
        } 
        if (this.scoreJoueur1.vie > 0 && this.scoreJoueur2.vie > 0) {
        console.log("Egalité !");
        }
    }
}
let combat1 = new Combat(8, joueur1, joueur2) ;

combat1.lanceCombats();