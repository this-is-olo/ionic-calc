import {Page, Platform, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/rfg-rez/rfg-rez.html'
})

export class RfgRez {
    static get parameters(){
        return [[NavParams]];
    }

    constructor(navParams) {
        this.navParams = navParams;
        this.firstname = navParams.get("firstname");
        this.lastname = navParams.get("lastname");
    }
}