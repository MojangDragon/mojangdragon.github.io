function switchLang(lang) {
    if (lang === 'hu') {
        document.getElementById('title').innerText = 'Figyelem!';
        document.getElementById('message').innerText =
            'A Webnode felhívja a 18. életévet be nem töltött személyek figyelmét, hogy az oldalon korhatárba ütköző tartalom van jelen. Ezért felszólítjuk minden 18 évnél fiatalabb megtekintőnket, hogy hagyja el Danee / A_Boii / oldalát!';
        document.getElementById('thanks').innerText = 'Köszönettel: Webnode és a Művész';
    } else if (lang === 'en') {
        document.getElementById('title').innerText = 'Attention!';
        document.getElementById('message').innerText =
            'Webnode draws the attention of persons under the age of 18 that the site contains content that violates the age limit. That\'s why we ask all our viewers under 18 to leave Danee\'s / A_Boii / page!';
        document.getElementById('thanks').innerText = 'Thanks to: Webnode and the Artist';
    }
}