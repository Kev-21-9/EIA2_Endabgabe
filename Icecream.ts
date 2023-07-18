namespace Eisdiele{
    export class Icecream{
        name : string;

        schokolade : boolean;
        vanille : boolean;
        zitrone : boolean;
        erdbeere : boolean;
        banane : boolean;
        stracciatella : boolean;

        whippedCream : boolean;

        streusel : boolean
        sosse : boolean;

        price: number;

        time : number = 0;
        locationX : number = 1100;
        locationY : number = 650;
        tableNumber : number;

        constructor( _name: string, _schokolade : boolean, _vanille : boolean, _zitrone : boolean, _erdbeere : boolean, _banane : boolean, _stracciatella : boolean, _whippedCream : boolean, _streusel : boolean, _sosse : boolean, _price : number){
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
            this.price = _price
            this.whippedCream = _whippedCream
        }

        draw() : void{
            
            crc2.save();
            crc2.translate(this.locationX, this.locationY);
            crc2.fillStyle = "lightblue";
            crc2.beginPath();
            crc2.ellipse(0, 0, 35, 35, 0, 0, 2*Math.PI);
            crc2.closePath();
            crc2.fill();

            if(this.schokolade === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "brown";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            if(this.vanille === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "white";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            if(this.zitrone === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "yellow";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            if(this.erdbeere === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "red";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            if(this.banane === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "yellow";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            if(this.stracciatella === true){
                crc2.translate(0, -10);
                crc2.fillStyle = "white";
                crc2.beginPath();
                crc2.ellipse(0, 0, 15, 15, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
            this.time++;
            crc2.restore();
            
        }

        eatn() : boolean{
            if(this.time === 400){
                if(this.locationX != 1100 && this.locationY !=650){
                    this.pay();
                }
                return true;
            }
            else{
                return false;
            }
        }

        changeTableNumber(_tableNumber : number):void{
            this.tableNumber = _tableNumber;
        }

        changeLocation(_x : number, _y : number) : void{
            this.locationX = _x;
            this.locationY = _y;
        }

        bring(_event : MouseEvent) : number{
            if(this.tableNumber === 1){
                this.changeLocation(150, 150);
            }
            if(this.tableNumber === 2){
                this.changeLocation(550, 150)
            }
            if(this.tableNumber === 3){
                this.changeLocation(250, 350);
            }
            if(this.tableNumber === 4){
                this.changeLocation(650, 350)
            }
            if(this.tableNumber === 5){
                this.changeLocation(350, 550);
            }
            if(this.tableNumber === 6){
                this.changeLocation(750, 550)
            }
            return this.tableNumber;
        }

        copy() : Icecream{
            return new Icecream(this.name, this.schokolade, this.vanille, this.zitrone, this.erdbeere, this.banane,this.stracciatella, this.whippedCream, this.streusel, this.sosse, this.price);
        }

        pay() : void{
            money += this.price;
        }


    }
}