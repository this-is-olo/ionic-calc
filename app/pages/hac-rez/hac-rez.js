import {Page, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/hac-rez/hac-rez.html'
})

export class HacRez {
    static get parameters(){
        return [[NavParams]];
    }

    constructor(navParams) {
        this.navParams = navParams;
        this.firstname = navParams.get("firstname");
        this.lastname = navParams.get("lastname");
    }
}