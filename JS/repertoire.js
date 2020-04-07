//Fonction d'affichage
function print() {
    let tableau = "<tr><th>Nom </th><th>Prénom</th><th>Téléphone</th></tr>";
    max = localStorage.length;
    let tabcle = new Array();

    //tab des cles

    for (let i = 0; i <= max - 1; i++) {
        tabcle[i] = localStorage.key(i);
    }

    //tri alphabétique des clés

    tabcle.sort();

    //Lecture des valeurs et création du tableau HTML

    for (let i = 0; i <= max - 1; i++) {
        cle = tabcle[i];
        tableau +=
            "<tr><td class='mx-5'> " +
            cle +
            "&nbsp;&nbsp;</td><td>" +
            localStorage.getItem(cle) +
            "&nbsp;&nbsp;</td></tr>";
    }
    document.getElementById("tableau").innerHTML = tableau;
}

//Function de stockage

function stocke() {
    let nom = document.forms.form1.nom.value;
    let prenom = document.forms.form1.prenom.value;
    let telephone = document.forms.form1.tel.value;
    localStorage.setItem(nom, prenom, telephone);
    alert("Enregistré :\n" + nom + "\n" + localStorage.getItem(nom));
}

//Function d'effacement

function effaceun() {
    let nom = document.forms.form1.nom.value;
    document.forms.form1.tel.value = localStorage.removeItem(nom);
    print();
}
