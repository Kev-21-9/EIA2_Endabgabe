"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Smiley {
        mood = "happy";
        locationX = 1100;
        locationY = 100;
        time = 0;
        moodChange = true;
        tableNumber;
        iceCream;
        /*constructor(_mood : string, _locationX : number, _locationY : number){
            this.mood = _mood;
            this.locationX = _locationX;
            this.locationY = _locationY;
        }*/
        draw() {
            this.time++;
            this.changeMood();
            if (this.mood === "happy") {
                Eisdiele.crc2.fillStyle = "green";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX, this.locationY, 50, 50, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.fillStyle = "black";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX - 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX + 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.arc(this.locationX, this.locationY + 10, 25, 0, Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.mood === "okay") {
                Eisdiele.crc2.fillStyle = "yellow";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX, this.locationY, 50, 50, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.fillStyle = "black";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX - 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX + 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.lineWidth = 5;
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.moveTo(this.locationX - 15, this.locationY + 20);
                Eisdiele.crc2.lineTo(this.locationX + 15, this.locationY + 20);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.stroke();
            }
            if (this.mood === "angry") {
                Eisdiele.crc2.fillStyle = "red";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX, this.locationY, 50, 50, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.fillStyle = "black";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX - 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(this.locationX + 15, this.locationY - 15, 10, 10, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.arc(this.locationX, this.locationY + 30, 25, Math.PI, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
        }
        changeMood() {
            if (this.time < 50) {
                this.mood = "happy";
            }
            if (this.time === 200 && this.moodChange === true) {
                this.mood = "okay";
            }
            if (this.time === 400 && this.moodChange === true) {
                this.mood = "angry";
            }
            if (this.time === 800 && this.moodChange === true) {
                this.mood = "leaving";
            }
        }
        /*becomActive(_event : MouseEvent){
            console.log("geht");
            
        }*/
        takeSeat(_event) {
            console.log("funktioniert");
            let mouseX = _event.clientX;
            let mouseY = _event.clientY;
            if (mouseX > 50 && mouseX < 250 && mouseY > 100 && mouseY < 200 && Eisdiele.table.free(1) === true) {
                console.log("richiger bereich");
                this.locationX = 150;
                this.locationY = 100;
                Eisdiele.table.taken(1);
                this.tableNumber = 1;
                this.time = 0;
                this.order();
            }
            if (mouseX > 450 && mouseX < 650 && mouseY > 100 && mouseY < 200 && Eisdiele.table.free(2) === true) {
                console.log("richiger bereich");
                this.locationX = 550;
                this.locationY = 100;
                Eisdiele.table.taken(2);
                this.tableNumber = 2;
                this.time = 0;
                this.order();
            }
            if (mouseX > 150 && mouseX < 350 && mouseY > 300 && mouseY < 425 && Eisdiele.table.free(3) === true) {
                console.log("richiger bereich");
                this.locationX = 250;
                this.locationY = 300;
                Eisdiele.table.taken(3);
                this.tableNumber = 3;
                this.time = 0;
                this.order();
            }
            if (mouseX > 550 && mouseX < 750 && mouseY > 300 && mouseY < 425 && Eisdiele.table.free(4) === true) {
                console.log("richiger bereich");
                this.locationX = 650;
                this.locationY = 300;
                Eisdiele.table.taken(4);
                this.tableNumber = 4;
                this.time = 0;
                this.order();
            }
            if (mouseX > 250 && mouseX < 450 && mouseY > 500 && mouseY < 650 && Eisdiele.table.free(5) === true) {
                console.log("richiger bereich");
                this.locationX = 350;
                this.locationY = 500;
                Eisdiele.table.taken(5);
                this.tableNumber = 5;
                this.time = 0;
                this.order();
            }
            if (mouseX > 650 && mouseX < 850 && mouseY > 500 && mouseY < 625 && Eisdiele.table.free(6) === true) {
                console.log("richiger bereich");
                this.locationX = 750;
                this.locationY = 500;
                Eisdiele.table.taken(6);
                this.tableNumber = 6;
                this.time = 0;
                this.order();
            }
        }
        order() {
            let n = Math.floor(Eisdiele.iceCreamArray.length * Math.random());
            let iceCreamOrder = Eisdiele.iceCreamArray[n].copy();
            iceCreamOrder.changeTableNumber(this.tableNumber);
            Eisdiele.activeIceCreamOrder.push(iceCreamOrder);
        }
        checkLeaving() {
            if (this.mood === "leaving") {
                Eisdiele.table.freeAgain(this.tableNumber);
                return true;
            }
            else {
                return false;
            }
        }
        changeMoodAfterOrder(_mood, _boolean) {
            this.mood = _mood;
            this.moodChange = _boolean;
        }
    }
    Eisdiele.Smiley = Smiley;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Smiley.js.map