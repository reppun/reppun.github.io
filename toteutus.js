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

function kerro(data) {
    var teksti = "";

    teksti = "<h2>" + data.nimi + "</h2>";

    teksti = teksti + "<p>" + "Osallistujien määrä: " + data.maara + "</p>";

    teksti = teksti + "<p>" + "<b>" + "Osallistujat" + "</b>" + "<br>"
        + data.osallistujat + "<br>";

        // En saanut tätä for-looppia toimimaan.
        //for (var i = 0; i < data.length; i++) {
        //    teksti = teksti + "<p>" + data[i].osallistujat.nimi + ", </p>";
        //}

    teksti = teksti + "<p>" + "<b>" + "Toteutuksen päivämäärät" + "</b>" + "<br>"
        + data.pvm.alku + "-" + data.pvm.loppu + data.pvm.vuosi + "</p>";

    teksti = teksti + "<p>" + "<b>" + "Kesto" + "</b>" + "<br>"
        + data.kesto + "</p>";

    teksti = teksti + "<p><img src=" + data.kuva + "></p>";

    document.getElementById("vastaus").innerHTML = teksti;

}