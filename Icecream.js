"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Icecream {
        name;
        schokolade;
        vanille;
        zitrone;
        erdbeere;
        banane;
        stracciatella;
        whippedCream;
        streusel;
        sosse;
        price;
        time = 0;
        locationX = 1100;
        locationY = 650;
        tableNumber;
        constructor(_name, _schokolade, _vanille, _zitrone, _erdbeere, _banane, _stracciatella, _whippedCream, _streusel, _sosse, _price) {
            this.name = _name;
            this.schokolade = _schokolade;
            this.vanille = _vanille;
            this.zitrone = _zitrone;
            this.erdbeere = _erdbeere;
            this.banane = _banane;
            this.stracciatella = _stracciatella;
            this.whippedCream = _whippedCream;
            this.streusel = _streusel;
            this.sosse = _sosse;
            this.price = _price;
            this.whippedCream = _whippedCream;
        }
        draw() {
            Eisdiele.crc2.save();
            Eisdiele.crc2.translate(this.locationX, this.locationY);
            Eisdiele.crc2.fillStyle = "lightblue";
            Eisdiele.crc2.beginPath();
            Eisdiele.crc2.ellipse(0, 0, 35, 35, 0, 0, 2 * Math.PI);
            Eisdiele.crc2.closePath();
            Eisdiele.crc2.fill();
            if (this.schokolade === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "brown";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.vanille === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "white";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.zitrone === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "yellow";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.erdbeere === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "red";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.banane === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "yellow";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            if (this.stracciatella === true) {
                Eisdiele.crc2.translate(0, -10);
                Eisdiele.crc2.fillStyle = "white";
                Eisdiele.crc2.beginPath();
                Eisdiele.crc2.ellipse(0, 0, 15, 15, 0, 0, 2 * Math.PI);
                Eisdiele.crc2.closePath();
                Eisdiele.crc2.fill();
            }
            this.time++;
            Eisdiele.crc2.restore();
        }
        eatn() {
            if (this.time === 400) {
                if (this.locationX != 1100 && this.locationY != 650) {
                    this.pay();
                }
                return true;
            }
            else {
                return false;
            }
        }
        changeTableNumber(_tableNumber) {
            this.tableNumber = _tableNumber;
        }
        changeLocation(_x, _y) {
            this.locationX = _x;
            this.locationY = _y;
        }
        bring(_event) {
            if (this.tableNumber === 1) {
                this.changeLocation(150, 150);
            }
            if (this.tableNumber === 2) {
                this.changeLocation(550, 150);
            }
            if (this.tableNumber === 3) {
                this.changeLocation(250, 350);
            }
            if (this.tableNumber === 4) {
                this.changeLocation(650, 350);
            }
            if (this.tableNumber === 5) {
                this.changeLocation(350, 550);
            }
            if (this.tableNumber === 6) {
                this.changeLocation(750, 550);
            }
            return this.tableNumber;
        }
        copy() {
            return new Icecream(this.name, this.schokolade, this.vanille, this.zitrone, this.erdbeere, this.banane, this.stracciatella, this.whippedCream, this.streusel, this.sosse, this.price);
        }
        pay() {
            Eisdiele.money += this.price;
        }
    }
    Eisdiele.Icecream = Icecream;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Icecream.js.map