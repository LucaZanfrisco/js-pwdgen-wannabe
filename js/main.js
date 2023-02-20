// Input tramite prompt del nome, cognome e colore preferito
const firstName = prompt('Inserire il nome');
const lastName = prompt('Inserire il cognome');
const favColor = prompt('Inserire il colore preferito');

// Combinazione degli input per la generazione della password
const password = `${firstName}${lastName}${favColor}89`;

// Stampa in una tabella delle credenziali inserite
document.getElementById('name').innerHTML = firstName;
document.getElementById('surname').innerHTML = lastName;
document.getElementById('favoriteColor').innerHTML = favColor;
document.getElementById('pass').innerHTML = password;

// Stampa della password 
console.log(password);