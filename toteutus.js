function kerro(data) {
    var teksti = "";

    teksti = "<h2>" + data.nimi + "</h2>";

    teksti = teksti + "<p>" + "<b>" + "Osallistujat" + "</b>" + "<br>"
        + data.osallistujat + "<br>";

    teksti = teksti + "<p>" + "<b>" + "Toteutuksen päivämäärät" + "</b>" + "<br>"
        + data.pvm.alku + "-" + data.pvm.loppu + "</p>";

    teksti = teksti + "<p>" + "<b>" + "Kesto" + "</b>" + "<br>"
        + data.kesto + "</p>";

    teksti = teksti + "<br>" + data.kuva ;   

    document.getElementById("vastaus").innerHTML = teksti;

}

fetch('https://reppun.github.io/toteutus.json')

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