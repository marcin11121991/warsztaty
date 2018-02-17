class Auto {
    constructor(marka, spalanie, przebieg, rokProdukcji, uszkodzony) {
        this.marka = marka;
        this.spalanie = spalanie;
        this.przebieg = przebieg;
        this.rokProdukcji = rokProdukcji;
        this.uszkodzony = uszkodzony;
    }
}

var komis = [];
komis[0] = new Auto("Vw", 8, 123000, 2006, true);
komis[1] = new Auto("Toyota", 7.5, 216900, 1997, false);

var autoBMW = new Auto("BMW", 10, 88657, 2012, false);

komis[2] = autoBMW;
komis[3] = new Auto("mazda", 6.9, 180000, 2010, true);
komis[4] = new Auto("polonez", 11.2, 23804, 1996, true);


var komisMikolaja = [];

komisMikolaja[0] = new Auto("seat", 8, 123200, 2006, false);
komisMikolaja[1] = new Auto("Toyota", 7, 2162300, 1997, false);
komisMikolaja[2] = new Auto("skoda", 12, 540000, 2000, true);
komisMikolaja[3] = new Auto("peugeot", 14, 182300, 2010, false);
komisMikolaja[4] = new Auto("citroen", 5, 23434, 1996, true);


function ileJestUszkodzonych(autaZkomisu) {
    var licznik = 0;

    autaZkomisu.forEach(function (element, index) {
        if (element.uszkodzony) {
            licznik += 1;
        }

    });

    return licznik;
}

ileJestUszkodzonych(komis);
var iloscUszkodzonych = ileJestUszkodzonych(komis);
// console.log(iloscUszkodzonych);


function sredniRocznyPrzebieg(autko) {
    var obecnyRok = (new Date()).getFullYear();
    var iloscLat = obecnyRok - autko.rokProdukcji;
    var sredniRocznyPrzebieg = autko.przebieg / iloscLat;

    return sredniRocznyPrzebieg;


}


// console.log(sredniRocznyPrzebieg(komisMikolaja[0]));


for (var b = 0; b < komisMikolaja.length; b++) {
    console.log(sredniRocznyPrzebieg(komisMikolaja[b]));
}
