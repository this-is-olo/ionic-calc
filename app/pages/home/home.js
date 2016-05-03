import {Page} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/home/home.html'
})

export class Home {
    constructor() {
        this.var1 = 0;
        this.var2 = 0;
        this.res = 0;
    }

    //execute(val) {
    //    if (this.op.length == 0){
    //        this.res = val;
    //        return 0;
    //    }
    //    let crtOp = this.op.pop();
    //    console.log(crtOp);
    //    console.log(val);
    //    switch (crtOp) {
    //        case "+" :
    //            this.res = (parseInt(this.res) || 0) + val;
    //            break;
    //        case "-" :
    //            this.res = (parseInt(this.res) || 0) + val;
    //            break;
    //        case "/" :
    //            this.res = (parseInt(this.res) || 0) / val;
    //            break;
    //        case "*" :
    //            this.res = (parseInt(this.res) || 0) * val;
    //            break;
    //    }
    //}
    //
    //onKey(event) {
    //    let key = event.key || String.fromCharCode(event.keyCode);
    //    let val = parseInt(this.eq);
    //    if (isNaN(parseInt(key))) {
    //        this.execute(this.num);
    //        this.num = val;
    //        this.op.push(key);
    //        this.eq = "";
    //    }
    //}

    compute() {
        this.res = parseFloat(this.var1) + parseFloat(this.var2);
    }
}
