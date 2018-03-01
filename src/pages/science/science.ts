import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DissertationPage } from '../dissertation/dissertation';
import { PublicationsPage } from '../publications/publications';

/**
 */

@Component({
    selector: 'page-science',
    templateUrl: 'science.html',
})
export class SciencePage {

    pages: Array<{ title: string, component: any }>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.pages = [
          { title: 'Dissertation', component: DissertationPage },
          { title: 'Publications', component: PublicationsPage }
        ];
    }

    getYear(){
        return new Date().getFullYear();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SciencePage');
    }

    openPage(page:string){
        for (let p of this.pages) {
            if (page === p.title) {
                this.navCtrl.setRoot(p.component);
                break;
            }
        }
    }

}
