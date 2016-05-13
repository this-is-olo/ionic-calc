import {Page, NavController} from 'ionic-angular';
import {ImcCalc} from '../imc-calc/imc-calc';
import {HacCalc} from '../hac-calc/hac-calc';
import {RfgCalc} from '../rfg-calc/rfg-calc';

@Page({
    templateUrl: 'build/pages/home/home.html'
})

export class Home {
    static get parameters(){
        return [[NavController]];
    }

    constructor(nav) {
        this.nav = nav;
    }

    navigate(CalcType) {
        switch (CalcType) {
            case 'IMC':
                this.nav.push(ImcCalc);
                break;
            case 'HbA1C':
                this.nav.push(HacCalc);
                break;
            case 'RFG':
                this.nav.push(RfgCalc);
                break;
            default:
                console.error('Please insert valid calculator type.')
                break;
        }
    }
}
