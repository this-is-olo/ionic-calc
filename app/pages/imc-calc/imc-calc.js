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
        this.formValues = {
            weight: 50,
            height_m: 1,
            height_cm: 50
        };
        this.weight = 50;
        this.inaltime_m = 1;
        this.inaltime_cm = 50;
        this.res = 0;
    }

    checkWeight(weight) {
        weight = Number(weight);

        switch(true) {
            case (weight < 0):
                this.weight = 0;
                break;
            case (weight > 999):
                this.weight = 999;
                break;
            default:
                this.weight = weight;
        }
    }

    compute() {
        this.res = parseFloat(this.var1) * parseFloat(this.var2);
    }

    navigate() {
        this.nav.push(ImcRez,  {res: res});
    }
}