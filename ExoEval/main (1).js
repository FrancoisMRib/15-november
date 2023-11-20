const usersHuman = [{
        type: "humain",
        name: "John Doe",
        email: "j.smith@gmail.com",
        age: 25
    },
    {
        type: "humain",
        name: "Jane Smith",
        email: "ja.doe@sfr.fr",
        age: 5
    },
    {
        type: "humain",
        name: "Le Vénérable",
        email: "levy@gmail.com",
        age: 500
    }
];

const usersPet = [{
        type: "animal de compagnie",
        espece: "chien",
        name: "Rox",
        age: 7,
        propriétaire: "John Doe"
    },
    {
        type: "animal de compagnie",
        espece: "renard",
        name: "Roukie",
        age: 300,
        propriétaire: "Le Vénérable"
    }
];

const usersXeno = [{
        type: "Xeno",
        espece: "Krogan",
        name: "Wrex",
        menace: "Rouge",
        age: 45
    },
    {
        type: "Xeno",
        espece: "Turien",
        name: "Garrus",
        menace: "Vert",
        age: 35
    },
    {
        type: "Xeno",
        espece: "Asari",
        name: "Liara",
        menace: "ULTRA Rouge",
        age: 25
    }
];

//console.log(usersXeno[0]);
//1)
let tabData = [];

//2)
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

//console.log(tabData);
//3)
function afficherHumain(objet) {
    console.log(objet.name);
    console.log(objet.email);
    console.log(objet.age);
} 
//CORRECTION - on peut aussi faire pour celui-là comme pour les autres : 
function afficherHumain2(objet) {
    const affichage =
    `------------------------------------
nom : ${objet.name}
email : ${objet.email}
age : ${objet.age}
-------------------------------------`;
    console.log(affichage);
}
afficherHumain2(usersHuman[0]);

//afficherHumain(usersHuman[0]); qui n'affiche que le premier... si on met
//afficherHumain(usersHuman) ; ça affiche les trois.

//4)
function afficherAnimal(objet) {
    console.log(objet.name);
    console.log(objet.espece);
    console.log(objet.age);
    console.log(objet.propriétaire);
} 
//5)
function afficherXeno(objet) {
    console.log(objet.name);
    console.log(objet.espece);
    console.log(objet.age);
    console.log(objet.menace);
} 
//6) 7) 8)
function profil(objet) {
    for (let i = 0 ; i < objet.length; i++) {
        if(objet[i].type == "humain") {
            afficherHumain (objet[i]);
        } else if (objet[i].type == "animal de compagnie") {
            afficherAnimal(objet[i]);
        } else if (objet[i].type == "Xeno") {
            afficherXeno(objet[i]);
        } else {
            console.log("Type de profil non existant");
        }
    }
    
}
//9)
//tabData.forEach((objet) => profil(objet));
profil(usersHuman);
profil(usersPet);
profil(usersXeno);

//10)
function profilAll(tab) {
    if (tab = []) {
    
    for(let i = 0 ; i < tab.length ; i++) {
        profil(tab); 
    }
    
    }
}

// 11) 12)

profilAll(tabData);

//Version de la correction
//10)
function profilAll(tab) {
    tab.forEach(element => {
        profil(element);
    });
}

//version avec la boucle for
function profilAllFor(tab) {
    for (let i = 0; i<tab.length; i++) {
        profil(tab[i]);
    }
}

profilAllFor(tabData);
