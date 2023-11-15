class Maison {
    //attributs
    nom;
    longueur;
    largeur;
    etage;
    //Constructeur
    constructor(newNom, newLongueur, newLargeur, newEtage){
        this.nom = newNom;
        this.longueur = newLongueur;
        this.largeur = newLargeur;
        this.etage = newEtage;
    }
    //méthode
    perimetre(){        
        console.log("La maison a un périmètre de", 2*this.longueur + 2*this.largeur, "mètres.");
    }

    surface() {
        console.log("La maison a une surface de", this.longueur*this.largeur*this.etage, "m2.")
    }
}
const villa = new Maison('villa', 9, 13, 3);

console.log(villa);
villa.perimetre();
villa.surface();