/*
Exercice 18 Classe et Objet :
Gérer une PME
Cahier des charges :

-Un Salarié a un nom, prénom, âge, salaire mensuel
Il est payé sur N mois.
En plus il y a XXX de charges

-Une Pme c’est un nom, une équipe de plusieurs salariés
Grace à ses ventes elle a des revenus R
Mais aussi … : 
des frais fixes FF (impôts etc…)
Des frais d’achats de matériel et de logiciels FA

TODO : 
Créer une classe Pme et une classe Employee
Utiliser des fonctions
Faire le bilan annuel de l’entreprise et l’afficher en console.
(Bilan reste en solde de la Pme)

Détails : 
3 salariés qui gagnent par mois : 2000, 3000 et 4000 euros
R = 300000 (trois cent mille)
FF = 20000 (vingt mille)
FA = 50000 (cinquante mille)
N = 12
XXX = 10%
*/

class Pme {
    solde;
    salaires;
    constructor(nom, nbrSalaries, revenus, fraisFixes, fraisAchats) {
        this.nom = nom;
        this.revenus = revenus;
        this.nbrSalaries = nbrSalaries;
        this.fraisAchats = fraisAchats;
        this.fraisFixes = fraisFixes;
    }
    bilan() {
        this.nbrSalaries.forEach(element => {
            this.salaires += element.calculSalaire();
        });
        this.solde = this.revenus - this.fraisFixes - this.fraisAchats
    }

}

class Employee {
    constructor(nom, prenom, age, salaireMens, nbrMois, nbrCharges) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaireMens = salaireMens;
        this.nbrMois = nbrMois;
        this.nbrCharges = nbrCharges;
    }
}