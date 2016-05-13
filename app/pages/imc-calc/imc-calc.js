import {Page, NavController} from 'ionic-angular';
import {ImcRez} from '../imc-rez/imc-rez';

@Page({
    templateUrl: 'build/pages/imc-calc/imc-calc.html'
})

export class ImcCalc {
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
        this.nav.push(ImcRez);
    }
}