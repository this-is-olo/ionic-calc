import {Page, NavController} from 'ionic-angular';
import {HacRez} from '../hac-rez/hac-rez';

@Page({
    templateUrl: 'build/pages/hac-calc/hac-calc.html'
})

export class HacCalc {
    static get parameters(){
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
        this.var1 = 0;
        this.var2 = 0;
        this.res = 0;
    }

    compute() {
        this.res = parseFloat(this.var1) * parseFloat(this.var2);
    }

    navigate() {
        this.nav.push(HacRez);
    }
}