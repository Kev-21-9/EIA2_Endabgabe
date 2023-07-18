namespace Eisdiele{
    export class Table{
        table1 : boolean = true;
        table2 : boolean = true;
        table3 : boolean = true;
        table4 : boolean = true;
        table5 : boolean = true;
        table6 : boolean = true;
    

        free(_tableNumber : number){
            switch (_tableNumber) {
                case 1:
                    return this.table1;
            
                case 2:
                    return this.table2;
                
                case 3:
                    return this.table3;
                
                case 4:
                    return this.table4;

                case 5:
                    return this.table5;
                
                case 6:
                    return this.table6;
                        
                default:
                    return null;
            }
        
        }
        
        taken(_tableNumber : number) : void{
            switch (_tableNumber) {
                case 1:
                    this.table1 = false;
                    break;

                case 2:
                    this.table2 = false;                    
                    break;

                case 3:
                    this.table3 = false;
                    break;
                
                case 4:
                    this.table4 = false;
                    break;
    
                case 5:
                    this.table5 = false;
                    break;
    
                case 6:
                    this.table6 = false;
                    break;
            
                default:
                    break;
            }
        }

        freeAgain(_tableNumber : number) : void{
            switch (_tableNumber) {
                case 1:
                    this.table1 = true;
                    break;

                case 2:
                    this.table2 = true;                    
                    break;

                case 3:
                    this.table3 = true;
                    break;
                
                case 4:
                    this.table4 = true;
                    break;
    
                case 5:
                    this.table5 = true;
                    break;
    
                case 6:
                    this.table6 = true;
                    break;
            
                default:                    
                    break;
            }
        }
    }
}