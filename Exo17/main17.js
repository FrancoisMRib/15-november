/*
Exercice 17 classe et Objet :
Gérer des compte en banque :
Créer une classe CompteBancaire avec des méthodes de crédit, de retrait, de visualisation de l’état du compte bancaire (en console), on doit pouvoir aussi faire un virement d’un membre à un autre.
Faire une scénario avec la gestion de 3 comptes crédités à 1000 € chacun (Alex, Clovis, Marco)
Puis Alex retire 100
Puis Marco fait un virement de 300 à Clovis
Enfin Alex tente un retrait de 600
Afficher tous les soldes finaux.
Ces compte sont placés dans un tableau associatif de clients 
Bonus :
Générer une exception pour ne pas dépasser le solde (pas de retrait ou de virement qui dépassent le solde du compte bancaire),
Tester avec une tentatives de retret de Alex de 1200 €
*/

class CompteBancaire {
    constructor (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    }
    credit(montant) {
        this.solde += montant;
    }
    debit(montant) {
        if (this.solde < montant) {
            console.log("Les fonds ne sont pas disponibles");
        }
        else {
            this.solde -= montant ;
        }
    }
    virement(montant, client){
        this.debit(montant);
        if (this.solde<montant) {
            console.log("Le virement est impossible")
        } else {
            client.credit(montant);
        }

    }
    detail(){
        console.log(this.nom, "possède :", this.solde) ;
    }
}
//instancier trois utilisateurs
const alex = new CompteBancaire("Alex", 1000);
const clovis = new CompteBancaire("Clovis", 1000);
const marco = new CompteBancaire("Marco", 1000);

alex.debit(100);
alex.detail();

marco.virement(300, clovis);
clovis.detail();

alex.debit(1600);
alex.detail();

// Variante avec les exceptions

class CompteeBancaire{
    constructor(nom, solde){
        this.nom = nom;
        this.solde = solde;
    }
    credit(montant){
        this.solde += montant;
    }
    debit(montant){
        if(this.solde < montant){
           throw new Error("les fonds ne sont pas disponible"); 
        }
        if(montant < 0){
            throw new Error("Un retrait négatif est impossible");  
        }
        try{
            this.solde -= montantkjhugi_ykjgjblb;
        }
        catch(error){
            return error;
        }
    }
    virement(montant, client){
        this.debit(montant);
        if(this.solde<montant){
            console.log("le virement est impossible");
        }
        else{
           client.credit(montant); 
        }
    }
    detail(){
        return `${this.nom} posséde : ${this.solde}`;
    }
}
//instancier 3 utilisateurs
const alexis = new CompteeBancaire("Alex", 1000);
const louis = new CompteeBancaire("Clovis", 1000);
const marc = new CompteeBancaire("Marco", 1000);

console.log(alex.debit(100));