// Créer le bouton "comment vous appelez-vous ?"
const nameButton = document.createElement('button');
nameButton.innerText = 'comment vous appelez-vous ?';
nameButton.onclick = function() {
    const firstName = prompt('Entrez votre prénom :');
    const lastName = prompt('Entrez votre nom :');
    alert(`Bonjour, ${firstName} ${lastName}`);
};
document.body.appendChild(nameButton);

// Créer le bouton "afficher l'aide"
const helpButton = document.createElement('button');
helpButton.innerText = 'afficher l\'aide';
helpButton.onclick = function() {
    alert('Voici l\'aide : ...');
};
document.body.appendChild(helpButton);
