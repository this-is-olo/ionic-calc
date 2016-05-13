import {Page, Platform, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/imc-rez/imc-rez.html'
})

export class ImcRez {
    static get parameters(){
        return [[NavParams]];
    }

    constructor(navParams) {
        this.navParams = navParams;
        this.firstname = navParams.get("firstname");
        this.lastname = navParams.get("lastname");
    }
}