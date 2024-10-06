// Przykładowy komentarz

/* 
    export dodajemy gdy bedziemy 
    chcieli wyesportowac dana klase, 
    funkcje, zmienna... do innego 
    pliku .js
*/

export class HelloWorld {
  // zmienna prywatna #zmienna
  #date = Date();
  // construktor
  constructor(text) {
    // publiczna zmienna
    this._text = text;
  }

  // przykładowa publiczna funkcja
  PrintData = function () {
    // console.log() wyświetlanie danych w konsoli
    // otwarcie kosoli przeglądarka -> F12 -> console
    console.log(this._text + " | Date: " + this.#date);
  };
}
