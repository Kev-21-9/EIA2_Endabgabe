namespace Eisdiele{
    /*
    Aufgabe: Endabgabe Eisdiele
    Name: Kevin Erne
    Matrikel: 274303
    Datum: 18.07.2023
    Quellen: ChatGPT an markierter Stelle
    */

    window.addEventListener("load", handleLoad);

    export let crc2: CanvasRenderingContext2D;
    let canvasWidth : number;
    let canvasHeight : number;
    let imgData : ImageData;
    let time : number;
    export let money : number = 0;
    export let iceCreamArray : Icecream [] =[];
    export let activeIceCreamOrder : Icecream [] = [];

    export let table : Table = new Table();
    let smileyArray : Smiley[] =[]

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");


        if (!canvas)
            return
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        document.addEventListener("click", checkClick);

        time = 100;

        canvasWidth = crc2.canvas.width;
        canvasHeight = crc2.canvas.height;

        drawShop();
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        iceCreamList();
        
        window.setInterval(animation, 50);

    }

    function animation() : void{
        crc2.putImageData(imgData, 0, 0);
        moneyCounter();
        if(time %100 === 0 && time< 500){
            let smiley :Smiley = new Smiley()
            smileyArray.push(smiley);
        }
        for (let n : number = smileyArray.length; n >0; n--) {
            if(smileyArray[n-1].checkLeaving()===true){
                smileyArray.splice(n-1, 1);
                break; //sonst Runtime Error
            }
            smileyArray[n-1].draw();
        }
        if(activeIceCreamOrder.length>0){
            for (let n : number = activeIceCreamOrder.length; n > 0; n--) {
                if(activeIceCreamOrder[n-1].eatn() === true){
                    changeMoodAfterOrder(activeIceCreamOrder[n-1].tableNumber, "leaving", true);
                    activeIceCreamOrder.splice(n-1, 1);
                    break;
                }
    
                activeIceCreamOrder[n-1].draw()
                console.log(activeIceCreamOrder.length);
                
            
            }
        }
        time++;
    }

    function iceCreamList() : void{
        getEisbecher();
        let ice1 : Icecream = new Icecream("Schwarzwaldbecher", true, true, false, false, false, true, true, false, true, 8);
        let ice2 : Icecream = new Icecream("Bananenbecher", false, true, false, false, true, false, false, true, false, 6);
        let ice3 : Icecream = new Icecream("Fruchtbecher", false, true, true, true, true, false, false, true, false, 7);
        let ice4 : Icecream = new Icecream("Erdbeerbecher", false, true, false, true, false, false, true, false, true, 5);

        iceCreamArray.push(ice1, ice2, ice3, ice4);
    }

    function checkClick(_event : MouseEvent) : void{
        let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 1100); //chatGPT
        if(activeSmiley === undefined){
            console.log("null");
        }
        else{
            activeSmiley.takeSeat(_event);
        }
        if(_event.clientX > 1000 && _event.clientY >500){
            let activeIce : Icecream | undefined  =activeIceCreamOrder.find(obj => obj.locationX === 1100); //chatGPT
            if(activeSmiley === undefined){
                console.log("null");
            }
            if(activeIce!=undefined){
                let changeMoodTableNumber : number = activeIce.bring(_event);
                changeMoodAfterOrder(changeMoodTableNumber, "happy", false);

            }
        }
        
    }

    function changeMoodAfterOrder(_tableNumber : number, _mood : string, _boolean : boolean) : void{
        if(_tableNumber === 1){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 150);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if(_tableNumber === 2){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 550);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if(_tableNumber === 3){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 250);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if(_tableNumber === 4){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 650);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if(_tableNumber === 5){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 350);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
        if(_tableNumber === 6){
            let activeSmiley : Smiley | undefined  =smileyArray.find(obj => obj.locationX === 750);
            if(activeSmiley != undefined){
                activeSmiley.changeMoodAfterOrder(_mood, _boolean);
            }
        }
    }

    function drawShop() : void{
        crc2.fillStyle = "rgb(244,164,96)";
        crc2.fillRect(0,0, canvasWidth, canvasHeight);

        //draw table
        crc2.save();
        crc2.fillStyle="black"
        crc2.translate(-50, -100);
        for (let n :number = 0; n < 3; n++) {
            crc2.translate(100, 200);
            crc2.save();
            crc2.fillRect(0,0, 200, 100);
            crc2.translate(400, 0);
            crc2.fillRect(0,0, 200, 100);
            crc2.restore();
        }
        crc2.restore();

        //draw counter
        crc2.save();
        crc2.translate(canvasWidth-200, canvasHeight-400);
        crc2.fillStyle = "black";
        crc2.fillRect(0,0,200,400);
        
        for (let n : number = 0; n < 5; n++) {
            crc2.translate(0,50);
            crc2.fillStyle=randomColor();
            crc2.fillRect(35,0,125,50);
        }
        crc2.restore();
    }

    function moneyCounter() : void {
        crc2.font = "25px Arial";
        crc2.fillText("Einnahmen: " + money.toString() + "€", 50, 650)
    }

    function randomColor(): string {
        let r: number = Math.random() * 256;
        let g: number = Math.random() * 256;
        let b: number = Math.random() * 256;

        return "rgb(" + r + "," + g + "," + b + ")";
    }

    async function getEisbecher() : Promise<void>{
        let response: Response = await fetch("https://webuser.hs-furtwangen.de/~ernekevi/Database/index.php?command=find&collection=Eisbecher")
        let eis: string = await response.text();
        
        let iceCreamObj = JSON.parse(eis);
        let iceCreamArray = Object.values(iceCreamObj);
     
        
    }
}