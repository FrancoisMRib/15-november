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
let tabData = [];

tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

console.log(tabData);

function afficherHumain(objet) {
    console.log(objet.name);
    console.log(objet.email);
    console.log(objet.age);
} 

function afficherAnimal(objet) {
    console.log(objet.name);
    console.log(objet.espace);
    console.log(objet.age);
    console.log(objet.propriétaire);
} 

function afficherXeno(objet) {
    console.log(objet.name);
    console.log(objet.espece);
    console.log(objet.age);
    console.log(objet.menace);
} 

function profil(objet) {
    if(objet.type == "humain") {
        afficherHumain (objet);
    } else if (objet.type == "Animal de compagnie") {
        afficherAnimal(objet);
    } else if (objet.type == "Xeno") {
        afficherXeno(objet);
    } else {
        console.log("Type de profil non existant")
    }
}

profil(usersHuman);
profil(usersPet);
profil(usersXeno);