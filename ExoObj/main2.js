class Maison {
    //attributs
    nom;
    longueur;
    largeur;
    //Constructeur
    constructor(newNom, newLongueur, newLargeur){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
    }
    //méthode
    perimetre(){        
        console.log("La maison a un périmètre de", 2*this.longueur + 2*this.largeur, "mètres.");
    }

    surface() {
        console.log("La maison a une surface de", this.longueur*this.largeur, "m2.")
    }
}
const villa = new Maison('villa', 9, 13);

console.log(villa);
villa.perimetre();
villa.surface();