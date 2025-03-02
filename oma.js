function kerro(data) {
    var teksti = "";
    teksti = "<h1>" + data.otsikko + "</h1>";
    teksti = teksti + "<p>" + "<b>" + "Yhteysteidot" + "</b>" + "<br>"
        + data.kuvaus + "<br>"
        + data.opintojakso + "</p>";
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