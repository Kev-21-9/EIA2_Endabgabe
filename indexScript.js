"use strict";
var Eisdiele;
(function (Eisdiele) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let playBtn = document.getElementById("play");
        playBtn.addEventListener("click", startGame);
        let nextIceCreamBtn = document.getElementById("nextIceCream");
        nextIceCreamBtn.addEventListener("click", addIceCream);
        let priceSlider = document.getElementById("priceSlider");
        priceSlider.addEventListener("change", changeCurrentPrice);
    }
    function startGame() {
        window.open("game.html", "_blank");
    }
    async function addIceCream() {
        let nameInput = document.getElementById("name");
        let name = nameInput.value;
        let whippedCreamInput = document.getElementById("whippedCream");
        let whippedCreamString = whippedCreamInput.value;
        let whippedCream = false;
        if (whippedCreamString === "yes") {
            whippedCream = true;
        }
        if (whippedCreamString === "no") {
            whippedCream = false;
        }
        let priceSlider = document.getElementById("priceSlider");
        let price = parseInt(priceSlider.value);
        let checkboxSchoko = document.getElementById("schokolade");
        let schokolade = checkboxSchoko.checked;
        let checkboxVanille = document.getElementById("vanille");
        let vanille = checkboxVanille.checked;
        let checkboxZitrone = document.getElementById("zitrone");
        let zitrone = checkboxZitrone.checked;
        let checkboxErdbeere = document.getElementById("erdbeere");
        let erdbeere = checkboxErdbeere.checked;
        let checkboxBanane = document.getElementById("banane");
        let banane = checkboxBanane.checked;
        let checkboxStracciatella = document.getElementById("stracciatella");
        let stracciatella = checkboxStracciatella.checked;
        let checkboxStreusel = document.getElementById("streusel");
        let streusel = checkboxStreusel.checked;
        let checkboxSosse = document.getElementById("sosse");
        let sosse = checkboxSosse.checked;
        let newIceCream = {
            name: name,
            Schokolade: schokolade,
            Vanille: vanille,
            Zitrone: zitrone,
            Erdbeere: erdbeere,
            Banane: banane,
            Straciatella: stracciatella,
            Sahne: whippedCream,
            Streusel: streusel,
            Sosse: sosse,
            Preis: price
        };
        fetch("https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php?command=insert&collection=Eisbecher&data=" + JSON.stringify(newIceCream));
    }
    function changeCurrentPrice() {
        let priceSlider = document.getElementById("priceSlider");
        let currentPrice = document.getElementById("currentPrice");
        currentPrice.textContent = "Der Eisbecher kostet " + priceSlider.value + " €";
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=indexScript.js.map