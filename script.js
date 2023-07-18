"use strict";
var Eisdiele;
(function (Eisdiele) {
    /*
    Aufgabe: Endabgabe Eisdiele
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 18.07.2023
    Quellen: ChatGPT an markierter Stelle
    */
    window.addEventListener("load", handleLoad);
    let canvasWidth;
    let canvasHeight;
    let imgData;
    let time;
    Eisdiele.money = 0;
    Eisdiele.iceCreamArray = [];
    Eisdiele.activeIceCreamOrder = [];
    Eisdiele.table = new Eisdiele.Table();
    let smileyArray = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Eisdiele.crc2 = canvas.getContext("2d");
        document.addEventListener("click", checkClick);
        time = 100;
        canvasWidth = Eisdiele.crc2.canvas.width;
        canvasHeight = Eisdiele.crc2.canvas.height;
        drawShop();
        imgData = Eisdiele.crc2.getImageData(0, 0, Eisdiele.crc2.canvas.width, Eisdiele.crc2.canvas.height);
        iceCreamList();
        window.setInterval(animation, 50);
    }
    function animation() {
        Eisdiele.crc2.putImageData(imgData, 0, 0);
        moneyCounter();
        if (time % 100 === 0 && time < 500) {
            let smiley = new Eisdiele.Smiley();
            smileyArray.push(smiley);
        }
        for (let n = smileyArray.length; n > 0; n--) {
            if (smileyArray[n - 1].checkLeaving() === true) {
                smileyArray.splice(n - 1, 1);
                break; //sonst Runtime Error
            }
            smileyArray[n - 1].draw();
        }
        if (Eisdiele.activeIceCreamOrder.length > 0) {
            for (let n = Eisdiele.activeIceCreamOrder.length; n > 0; n--) {
                if (Eisdiele.activeIceCreamOrder[n - 1].eatn() === true) {
                    changeMoodAfterOrder(Eisdiele.activeIceCreamOrder[n - 1].tableNumber, "leaving", true);
                    Eisdiele.activeIceCreamOrder.splice(n - 1, 1);
                    break;
                }
                Eisdiele.activeIceCreamOrder[n - 1].draw();
                console.log(Eisdiele.activeIceCreamOrder.length);
            }
        }
        time++;
    }
    function iceCreamList() {
        getEisbecher();
        let ice1 = new Eisdiele.Icecream("Schwarzwaldbecher", true, true, false, false, false, true, true, false, true, 8);
        let ice2 = new Eisdiele.Icecream("Bananenbecher", false, true, false, false, true, false, false, true, false, 6);
        let ice3 = new Eisdiele.Icecream("Fruchtbecher", false, true, true, true, true, false, false, true, false, 7);
        let ice4 = new Eisdiele.Icecream("Erdbeerbecher", false, true, false, true, false, false, true, false, true, 5);
        Eisdiele.iceCreamArray.push(ice1, ice2, ice3, ice4);
    }
    function checkClick(_event) {
        let activeSmiley = smileyArray.find(obj => obj.locationX === 1100); //chatGPT
        if (activeSmiley === undefined) {
            console.log("null");
        }
        else {
            activeSmiley.takeSeat(_event);
        }
        if (_event.clientX > 1000 && _event.clientY > 500) {
            let activeIce = Eisdiele.activeIceCreamOrder.find(obj => obj.locationX === 1100); //chatGPT
            if (activeSmiley === undefined) {
                console.log("null");
            }
            if (activeIce != undefined) {
                let changeMoodTableNumber = activeIce.bring(_event);
                changeMoodAfterOrder(changeMoodTableNumber, "happy", false);
            }
        }
    }
    function changeMoodAfterOrder(_tableNumber, _mood, _boolean) {
        if (_tableNumber === 1) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 150);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if (_tableNumber === 2) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 550);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if (_tableNumber === 3) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 250);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if (_tableNumber === 4) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 650);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if (_tableNumber === 5) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 350);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if (_tableNumber === 6) {
            let activeSmiley = smileyArray.find(obj => obj.locationX === 750);
            if (activeSmiley != undefined) {
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
    }
    function drawShop() {
        Eisdiele.crc2.fillStyle = "rgb(244,164,96)";
        Eisdiele.crc2.fillRect(0, 0, canvasWidth, canvasHeight);
        //draw table
        Eisdiele.crc2.save();
        Eisdiele.crc2.fillStyle = "black";
        Eisdiele.crc2.translate(-50, -100);
        for (let n = 0; n < 3; n++) {
            Eisdiele.crc2.translate(100, 200);
            Eisdiele.crc2.save();
            Eisdiele.crc2.fillRect(0, 0, 200, 100);
            Eisdiele.crc2.translate(400, 0);
            Eisdiele.crc2.fillRect(0, 0, 200, 100);
            Eisdiele.crc2.restore();
        }
        Eisdiele.crc2.restore();
        //draw counter
        Eisdiele.crc2.save();
        Eisdiele.crc2.translate(canvasWidth - 200, canvasHeight - 400);
        Eisdiele.crc2.fillStyle = "black";
        Eisdiele.crc2.fillRect(0, 0, 200, 400);
        for (let n = 0; n < 5; n++) {
            Eisdiele.crc2.translate(0, 50);
            Eisdiele.crc2.fillStyle = randomColor();
            Eisdiele.crc2.fillRect(35, 0, 125, 50);
        }
        Eisdiele.crc2.restore();
    }
    function moneyCounter() {
        Eisdiele.crc2.font = "25px Arial";
        Eisdiele.crc2.fillText("Einnahmen: " + Eisdiele.money.toString() + "€", 50, 650);
    }
    function randomColor() {
        let r = Math.random() * 256;
        let g = Math.random() * 256;
        let b = Math.random() * 256;
        return "rgb(" + r + "," + g + "," + b + ")";
    }
    async function getEisbecher() {
        let response = await fetch("https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php?command=find&collection=Eisbecher");
        let eis = await response.text();
        let iceCreamObj = JSON.parse(eis);
        let iceCreamArray = Object.values(iceCreamObj);
    }
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=script.js.map