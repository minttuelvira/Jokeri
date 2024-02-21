// Jokeri tehtävä

// Luetaan käyttöliittymän elementit muuttujiin
const button = document.querySelector('button');
const table = document.querySelector('table');
const countElement = document.querySelector('p');

// Rivien määrä alussa (0)
let rowCount = 0;

// Funktio, joka lisää uuden rivin taulukkoon
function addNewRow() {
    // Lisää uusi rivi
    const newRow = table.insertRow();

    // Toteutetaan 7 kertaa
    for (let i = 0; i < 7; i++) {
        // Uusi solu
        const newCell = newRow.insertCell();
        // Random numero 0-9 väliltä
        const randomNumber = Math.floor(Math.random() * 10);
        // Asetetaan arvottu luku uuden solun tekstiksi
        newCell.textContent = randomNumber;
    }

    // Lisää yksi rivi rivilaskuriin
    rowCount++;
    //Rivien lukumäärän päivitys
    countElement.textContent = `Arvottuja jokeririvejä: ${rowCount}`;
}

// Kuuntelija painikkeen painamistapahtumalle, toteuttaa luodun funktion
button.addEventListener('click', addNewRow);
