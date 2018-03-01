import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the DissertationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
    selector: 'page-dissertation',
    templateUrl: 'dissertation.html',
})
export class DissertationPage {

    @ViewChild(Content) content: Content;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    getYear(){
        return new Date().getFullYear();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DissertationPage');
    }

    scrollTo(id:string){
        let yOffset = document.getElementById(id).offsetTop;
        console.log(yOffset);
        this.content.scrollTo(0, yOffset, 1000)
    }

}
