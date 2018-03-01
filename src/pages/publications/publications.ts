import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PublicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-publications',
    templateUrl: 'publications.html',
})
export class PublicationsPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    getYear(){
        return new Date().getFullYear();
    }
        
    ionViewDidLoad() {
        console.log('ionViewDidLoad PublicationsPage');
    }

}
