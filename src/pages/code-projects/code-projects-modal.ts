import { Component } from '@angular/core';
import { ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CodeProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-code-projects-modal',
  templateUrl: 'code-projects-modal.html',
})
export class CodeProjectsModalPage {

    project = {}

    constructor(public viewCtrl: ViewController, public navParams: NavParams) {
        this.project = this.navParams.data;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CodeProjectsModalPage');
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }


}
