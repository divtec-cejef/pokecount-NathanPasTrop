/**
 * Exercice PokeCount
 * @author Nathan Juillerat
 * @version 1.0 (Version actuelle)
 * @since 2024-08-20 (Date de création)
 */

// Récupère l'élément avec l'id compteur-el
//

"use strict"

let compteur = 0;

const compteurEl = document.getElementById('compteur-el');
const sauvegardeEl = document.getElementById('sauvegarde-el');

// déclarations des fonctions
function capturer() {
    compteur += 1;
    compteurEl.textContent = compteur;
    if (compteur < 5) {
        compteurEl.style.color = 'green';
    } else if (compteur < 10) {
        compteurEl.style.color = 'yellow';
    } else {
        compteurEl.style.color = 'red';
    }
}

function sauvegarder() {
//    sauvegardeEl.textContent += compteur + " Pokémons - "; // version plus simple
    sauvegardeEl.textContent += `${compteur} Pokémons - `;
    // Sauvegarde l'historique de mes captures en local dans le navigateur
    localStorage.setItem("captures", sauvegardeEl.textContent)
    compteur = 0;
    compteurEl.textContent = compteur;
}

function reset() {
    localStorage.clear();
}

// écouter les événements
document.getElementById('capturer-btn').addEventListener("click", capturer);
document.getElementById('sauvegarder-btn').addEventListener("click", sauvegarder);
document.getElementById('reset-btn').addEventListener("click", reset);

window.addEventListener('load', () => {
    sauvegardeEl.textContent = localStorage.getItem("captures") || "Mes captures : ";
});
