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
        //return (this.poids/this.taille**2).toFixed(2);
    }
    display() {
        console.log("La personne dénommée", this.nom, "qui mesure", this.taille, "pour un poids de", this.poids, "a un IMC de", this.calculIMC());
    }
}

const sean = new IMC('Sean', 1.92, 86);
const roger = new IMC('Roger', 1.87, 85);
const tim = new IMC('Timothy', 1.89, 89)

console.log(sean);
sean.calculIMC();
//sean.display() ;

let list = [];

list.push(sean);
list.push(roger);
list.push(tim);
//console.log(list);
list.forEach((element)=> {
    //appel de la fonction display dans la fonction forEach :
    element.display();
})
for(let i = 0; i<list.length;i++) {
    list[i].display();
}
