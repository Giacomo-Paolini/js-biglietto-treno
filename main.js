let distanza = prompt("Quanti km devi fare?");

let età = prompt("Quanti anni hai?");

let prezzoViaggio = Math.round(distanza * 0.21);

if (età < 18) {
    prezzoViaggio -= prezzoViaggio / 100 * 20;
} else if (età > 65) {
    prezzoViaggio -= prezzoViaggio / 100 * 40;
}

document.getElementById("prezzoViaggio").innerText = "Il biglietto ti costa " + prezzoViaggio + "€";