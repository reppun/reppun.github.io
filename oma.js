function kerro(data) {
    var teksti = "";
    teksti = "<h2>" + data.otsikko + "</h2>";

    teksti = teksti + "<p>" + "<b>" + "Sivun tarkoitus" + "</b>" + "<br>"
        + data.kuvaus + "<br>";

    teksti = teksti + "<p>" + "<b>" + "Opintojakso" + "</b>" + "<br>"
        + "Nimi: " + data.opintojakso.nimi + "<br>"
        + "Tunnus: " + data.opintojakso.tunnus + "<br>"
        + "Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

    teksti = teksti + "<p>" + "<b>" + "Sisältö" + "</b>" + "<br>"
        + data.sisalto + "</p>";

    teksti = teksti + "<p>" + "<b>" + "Tekniikat" + "</b>" + "<br>"
        + data.tekniikat + "</p>";

    document.getElementById("vastaus").innerHTML = teksti;
}

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