"use strict";
var Eisdiele;
(function (Eisdiele) {
    class Table {
        table1 = true;
        table2 = true;
        table3 = true;
        table4 = true;
        table5 = true;
        table6 = true;
        free(_tableNumber) {
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
        taken(_tableNumber) {
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
        freeAgain(_tableNumber) {
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
    Eisdiele.Table = Table;
})(Eisdiele || (Eisdiele = {}));
//# sourceMappingURL=Table.js.map