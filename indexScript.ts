namespace Eisdiele{
    window.addEventListener("load", handleLoad);  

    function handleLoad() : void{
        
        let playBtn : HTMLButtonElement = <HTMLButtonElement> document.getElementById("play");
        playBtn.addEventListener("click", startGame);

        let nextIceCreamBtn : HTMLButtonElement = <HTMLButtonElement> document.getElementById("nextIceCream");
        nextIceCreamBtn.addEventListener("click", addIceCream);

        let priceSlider : HTMLInputElement = <HTMLInputElement> document.getElementById("priceSlider");
        priceSlider.addEventListener("change", changeCurrentPrice);

    }

    function startGame() : void{
        window.open("game.html", "_blank");
    }

    async function addIceCream(){
        let nameInput : HTMLInputElement = <HTMLInputElement> document.getElementById("name");
        let name : string = nameInput.value;

        let whippedCreamInput : HTMLSelectElement = <HTMLSelectElement> document.getElementById("whippedCream");
        let whippedCreamString : string = whippedCreamInput.value
        let whippedCream : boolean = false;
        if(whippedCreamString === "yes"){
            whippedCream = true;
        }
        if(whippedCreamString ==="no"){
            whippedCream = false;
        }

        let priceSlider : HTMLInputElement = <HTMLInputElement> document.getElementById("priceSlider");
        let price : number = parseInt(priceSlider.value)

        let checkboxSchoko : HTMLInputElement = <HTMLInputElement>document.getElementById("schokolade");
        let schokolade : boolean = checkboxSchoko.checked;

        let checkboxVanille : HTMLInputElement = <HTMLInputElement>document.getElementById("vanille");
        let vanille : boolean = checkboxVanille.checked;

        let checkboxZitrone : HTMLInputElement = <HTMLInputElement>document.getElementById("zitrone");
        let zitrone : boolean = checkboxZitrone.checked;

        let checkboxErdbeere : HTMLInputElement = <HTMLInputElement>document.getElementById("erdbeere");
        let erdbeere : boolean = checkboxErdbeere.checked;

        let checkboxBanane : HTMLInputElement = <HTMLInputElement>document.getElementById("banane");
        let banane : boolean = checkboxBanane.checked;

        let checkboxStracciatella : HTMLInputElement = <HTMLInputElement>document.getElementById("stracciatella");
        let stracciatella : boolean = checkboxStracciatella.checked;

        let checkboxStreusel : HTMLInputElement = <HTMLInputElement>document.getElementById("streusel");
        let streusel : boolean = checkboxStreusel.checked;

        let checkboxSosse : HTMLInputElement = <HTMLInputElement>document.getElementById("sosse");
        let sosse : boolean = checkboxSosse.checked;

        let newIceCream = {
            name: name,
            Schokolade : schokolade,
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
        fetch("https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php?command=insert&collection=Eisbecher&data="+JSON.stringify(newIceCream))
        
    }
    
    function changeCurrentPrice() : void{
        let priceSlider : HTMLInputElement = <HTMLInputElement> document.getElementById("priceSlider");
        let currentPrice :HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("currentPrice");
        currentPrice.textContent = "Der Eisbecher kostet " + priceSlider.value + " €";
        

    }
}