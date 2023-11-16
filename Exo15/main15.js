class Vehicule {
    nom;
    couleur;
    nbrRoues;
    vitesse;
    constructor(newNom, newNbrRoues, newVitesse, newCouleur = "bleu") {
        this.nom = newNom;
        this.couleur = newCouleur;
        this.nbrRoues = newNbrRoues;
        this.vitesse = newVitesse;
    }
    detect() {
        if(this.nbrRoues == 4) {
            return "voiture";
        } else if (this.nbrRoues == 2) {
            return "moto";
        } else {
            return "autre véhicule";
        }
    }
    boost() {
        this.vitesse += 50;
    }
    plusRapide(objet) {
        if (this.vitesse > objet.vitesse) {
            return "Le véhicule le plus rapide est", this.nom ;
        }
        else if (this.vitesse < objet.vitesse) {
            return "Le véhicule le plus rapide est", objet.nom ;
        }
    }
}

const voiture = new Vehicule("Mercredes CLK", 4, 250);
const moto = new Vehicule("Honda CBR", 2, 280);
const poidsLourd = new Vehicule("Camion", 8, 150);

console.log(`Le type de véhicule de ${voiture.nom} est : ${voiture.detect()}`);
console.log(`Le type de véhicule de ${moto.nom} est : ${moto.detect()}`);
console.log(`Le type de véhicule de ${poidsLourd.nom} est : ${poidsLourd.detect()}`);

voiture.boost() ;
console.log("La nouvelle vitesse de ma voiture est :", (voiture.vitesse));
//Appel de la méthode plusRapide
console.log(voiture.plusRapide(moto));
console.log(moto.plusRapide(voiture));