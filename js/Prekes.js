export class preke1 {
    construktor (id, pavadinimas, isigijimoKaina, pardavimoKaina, kiekis){
        this.id = 1;
        this.pavadinimas = pavadinimas;
        this.isigijimoKaina = isigijimoKaina;
        this.pardavimoKaina = pardavimoKaina;
        this.kiekis = kiekis;
        this.prekeSandelyje = true;
}

    papildyta () {
        this.kiekis++;
    }

    parduota () {
        this.kiekis--;
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