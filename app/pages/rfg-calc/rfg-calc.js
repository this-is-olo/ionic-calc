import {Page, NavController} from 'ionic-angular';
import {RfgRez} from '../rfg-rez/rfg-rez';

@Page({
    templateUrl: 'build/pages/rfg-calc/rfg-calc.html'
})

export class RfgCalc {
    static get parameters(){
        return [[NavController]];
    }

    constructor( nav) {
        this.nav = nav;
        this.var1 = 0;
        this.var2 = 0;
        this.res = 0;
    }

    compute() {
        this.res = parseFloat(this.var1) * parseFloat(this.var2);
    }

    navigate() {
        this.nav.push(RfgRez);
    }
}