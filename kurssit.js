fetch('https://reppun.github.io/kurssit.json')

    // Muunnetaan vastaus JSON muotoon  
    .then(function (response) {
        return response.json();
    })
    //Käsitellään muunnettu (eli JSON muotoinen) vastaus
    // Kutsutaan funktiota kerro()ja välitetään sille json-vastaus
    .then(function (responseJson) {
        kerro(responseJson);
    })
    // Jos tuli jokin virhe
    .catch(function (error) {
        document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan, mutta miksi? Hmm...</p>";
    })

function kerro(data) {
    var teksti = "";

    teksti = "<h2>" + data.otsikko + "</h2>";

    teksti = teksti + "<p>" + "<b>" + "Sivun tarkoitus" + "</b>" + "<br>"
        + data.kuvaus + "<br>";

    teksti = teksti + "<p><img src=" + data.kuva + "></p>";

    teksti = teksti + "<p>" + "<b>" + "Opintojakso" + "</b>" + "<br>"
        + "Nimi: " + data.opintojakso.nimi + "<br>"
        + "Tunnus: " + data.opintojakso.tunnus + "<br>"
        + "Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

    teksti = teksti + "<p>Aiheet:</p>";

    teksti = teksti + data.sisalto + "</p>";

    // En saanut tätä for looppia toimimaan.
    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<p> Aihe: " + data[i].sisalto + "<br>";
    }

    teksti = teksti + "<p>Tekniikat</p>";

    teksti = teksti + data.tekniikat + "</p>";

    // En saanut tätä for looppia toimimaan.
    for (var i = 0; i < data.length; i++) {
        teksti = teksti + "<p> Aihe: " + data[i].tekniikat.aihe + "</p>";
        teksti = teksti + "<p> Linkki: " + data[i].tekniikat.linkki + "</p>";
    }


    document.getElementById("vastaus").innerHTML = teksti;

}