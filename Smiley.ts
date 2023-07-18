namespace Eisdiele{
    export class Smiley{
        mood : string = "happy";
        locationX : number = 1100;
        locationY : number = 100;
        time : number = 0;
        moodChange : boolean = true;
        tableNumber : number;
        iceCream : Icecream;

        /*constructor(_mood : string, _locationX : number, _locationY : number){
            this.mood = _mood;
            this.locationX = _locationX;
            this.locationY = _locationY;
        }*/

        draw() : void{
            this.time++;
            this.changeMood();
            if(this.mood === "happy"){
                crc2.fillStyle="green";
                crc2.beginPath();
                crc2.ellipse(this.locationX,this.locationY, 50,50,0,0,2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.ellipse(this.locationX-15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.ellipse(this.locationX+15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.locationX, this.locationY+10, 25,0, Math.PI);
                crc2.closePath();
                crc2.fill();
                
            }
            if(this.mood === "okay"){
                crc2.fillStyle="yellow";
                crc2.beginPath();
                crc2.ellipse(this.locationX,this.locationY, 50,50,0,0,2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.ellipse(this.locationX-15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.ellipse(this.locationX+15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.lineWidth = 5;
                crc2.beginPath();
                crc2.moveTo(this.locationX-15, this.locationY+20);
                crc2.lineTo(this.locationX+15, this.locationY+20);
                crc2.closePath();
                crc2.stroke();
            }

            if(this.mood === "angry"){
                crc2.fillStyle="red";
                crc2.beginPath();
                crc2.ellipse(this.locationX,this.locationY, 50,50,0,0,2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.fillStyle = "black";
                crc2.beginPath();
                crc2.ellipse(this.locationX-15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.ellipse(this.locationX+15, this.locationY-15, 10, 10, 0, 0, 2*Math.PI);
                crc2.closePath();
                crc2.fill();

                crc2.beginPath();
                crc2.arc(this.locationX, this.locationY+30, 25, Math.PI, 2*Math.PI);
                crc2.closePath();
                crc2.fill();
            }
        }

        changeMood() : void{
            if(this.time <50){
                this.mood = "happy"
            }
            if(this.time === 200 && this.moodChange === true){
                this.mood = "okay";
            }
            if(this.time === 400 && this.moodChange === true){
                this.mood = "angry";
            }
            if (this.time ===800 && this.moodChange === true){
                this.mood = "leaving";
            }
        }

        /*becomActive(_event : MouseEvent){
            console.log("geht");
            
        }*/

        takeSeat(_event : MouseEvent) : void{
            console.log("funktioniert");
            let mouseX : number = _event.clientX;
            let mouseY : number = _event.clientY;
            if(mouseX>50 && mouseX<250 && mouseY>100 && mouseY<200 && table.free(1)===true){
                console.log("richiger bereich");
                this.locationX = 150;
                this.locationY = 100;
                table.taken(1);
                this.tableNumber = 1;
                this.time = 0;
                this.order();
                
            }
            if(mouseX>450 && mouseX<650 && mouseY>100 && mouseY<200 && table.free(2)===true ){
                console.log("richiger bereich");
                this.locationX = 550;
                this.locationY = 100;
                table.taken(2);
                this.tableNumber = 2;
                this.time = 0;
                this.order();
                
            }

            if(mouseX>150 && mouseX<350 && mouseY>300 && mouseY<425 && table.free(3)===true){
                console.log("richiger bereich");
                this.locationX = 250;
                this.locationY = 300;
                table.taken(3);
                this.tableNumber = 3;
                this.time = 0;
                this.order();
                
            }

            if(mouseX>550 && mouseX<750 && mouseY>300 && mouseY<425 && table.free(4)===true){
                console.log("richiger bereich");
                this.locationX = 650;
                this.locationY = 300;
                table.taken(4);
                this.tableNumber = 4;
                this.time = 0;
                this.order();
                
            }

            if(mouseX>250 && mouseX<450 && mouseY>500 && mouseY<650 && table.free(5)===true){
                console.log("richiger bereich");
                this.locationX = 350;
                this.locationY = 500;
                table.taken(5);
                this.tableNumber = 5;
                this.time = 0;
                this.order();
                
            }

            if(mouseX>650 && mouseX<850 && mouseY>500 && mouseY<625 && table.free(6)===true){
                console.log("richiger bereich");
                this.locationX = 750;
                this.locationY = 500;
                table.taken(6);
                this.tableNumber = 6;
                this.time = 0;
                this.order();
                
            }
            
        }

        order() : void{
            let n : number = Math.floor(iceCreamArray.length * Math.random())
            let iceCreamOrder : Icecream = iceCreamArray[n].copy();
            iceCreamOrder.changeTableNumber(this.tableNumber)
            activeIceCreamOrder.push(iceCreamOrder);
        }

        checkLeaving() : boolean{
            if(this.mood === "leaving"){
               table.freeAgain(this.tableNumber);
                return true;
            }
            else{
                return false;
            }
        }

        changeMoodAfterOrder(_mood : string , _boolean : boolean) : void{
            this.mood = _mood;
            this.moodChange = _boolean;
        }
    }
}