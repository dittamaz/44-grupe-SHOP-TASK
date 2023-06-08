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



    prekeYra () {
        if (this.prekeSandelyje) {
            return 'Prekiu sandelyje yra'
        }

        this.prekeSandelyje = true;
        return 'Gali parduoti';
    }

    prekesNera () {
        if (!this.prekeSandelyje) {
            return 0;
        }

        this.prekeSandelyje = false;
        return 'Papildyti prekiu';
    }
}
