class IMC {
    nom;
    taille;
    poids;
    constructor(newName, newTall, newWeight) {
        this.nom = newName;
        this.taille = newTall;
        this.poids = newWeight;
    }
    calculIMC() {
        return (this.poids/(this.taille*this.taille)).toFixed(2);
    }
    display() {
        console.log("La personne dénommée", this.nom, "qui mesure", this.taille, "pour un poids de", this.poids, "a un IMC de", this.calculIMC());
    }
}

const sean = new IMC('Sean', 1.92, 86);
const roger = new IMC('Roger', 1.87, 85);
const tim = new IMC('Timothy', 1.89, 89)
let list = [];

list.push(sean, roger, tim);
console.log(list);

console.log(sean);
sean.calculIMC();
sean.display() ;