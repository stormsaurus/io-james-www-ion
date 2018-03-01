import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-code',
    templateUrl: 'code.html',
})
export class CodePage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    getYear(){
        return new Date().getFullYear();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CodePage');
    }

}
