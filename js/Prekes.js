export { Prekes };

class Prekes {
    construktor (id, pavadinimas, isigijimoKaina, pardavimoKaina) {
        this.id = id;
        this.pavadinimas = pavadinimas;
        this.isigijimoKaina = isigijimoKaina;
        this.pardavimoKaina = pardavimoKaina;
        this.kiekis = 0;
        this.prekeSandelyje = true;
}
