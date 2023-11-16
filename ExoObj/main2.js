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

//On peut aussi faire une version des méthodes avec des return. Mais dans ce cas il faut un console.log quand on invoque ladite méthode à la fin.
class Maison {
    static nbrDeMaison = 0;
	constructor(newNom, newLongueur, newLargeur, newEtage = 1) {
		this.nom = newNom;
		this.longueur = newLongueur;
		this.largeur = newLargeur;
		this.nbrEtage = newEtage;
        Maison.ajouter();
        //this.constructor.ajouter();
	}
	perimetre() {
		return (this.longueur + this.largeur) * 2;
	}
	surface() {
		return this.longueur * this.largeur * this.nbrEtage;
	}
    static ajouter(){
        Maison.nbrDeMaison++ 
    }
    //méthode pour comparer l'objet courant (this) avec un autre objet Maison
    plusGrande(objet){
        if(this.surface()<objet.surface()){
            return objet.nom;
        }else{
            return this.nom;
        }
    }
}
//instancier un objet Maison
const grVilla = new Maison("villa", 100, 200);
console.log(`Le périmètre de ${grVilla.nom} est égal à : ${grVilla.perimetre()} m`);
console.log(`La surface de ${grVilla.nom} est égale à : ${grVilla.surface()} m²`);
const immeuble = new Maison("immeuble", 30, 40);
console.log(
	`Le périmètre de ${immeuble.nom} est égal à : ${immeuble.perimetre()} m`
);
console.log(
	`La surface de ${immeuble.nom} est égale à : ${immeuble.surface()} m²`
);
const magasin = new Maison("magasin", 40, 20);
console.log(`On à instancié : ${Maison.nbrDeMaison} ${Maison.nbrDeMaison > 1?'Maisons':'Maison'} `);
//affichage de la Maison la plus grande
console.log(`La maison la plus grande est : ${grVilla.plusGrande(magasin)}`)