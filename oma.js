fetch('https://github.com/reppun/reppun.github.io/blob/main/kurssit.json')


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

document.getElementById("vastaus").innerHTML = "<p>Tietoa ei pystytä hakemaan</p>";


})