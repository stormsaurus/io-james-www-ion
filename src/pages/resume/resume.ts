import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, Platform } from 'ionic-angular';
//import { Printer, PrintOptions } from '@ionic-native/printer';

import { DissertationPage } from '../dissertation/dissertation';
import { PublicationsPage } from '../publications/publications';
import { CodeProjectsPage } from '../code-projects/code-projects';

/**
 *
 */

@Component({
    selector: 'page-resume',
    templateUrl: 'resume.html',
})
export class ResumePage {

    pages: Array<{ title: string, component: any }>;

    constructor(public navCtrl: NavController, public navParams: NavParams, /*private printer: Printer,*/ public alertCtrl: AlertController, public platform:Platform) {
        this.pages = [
          { title: 'Dissertation', component: DissertationPage },
          { title: 'Publications', component: PublicationsPage },
          { title: 'CodeProjects', component: CodeProjectsPage }
        ];
    }

    getYear(){
        return new Date().getFullYear();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ResumePage');
    }

    openGit(){
    }

    print(){
        /*
        let printerAvailable = false;
        this.printer.isAvailable().then( ()=>{printerAvailable=true}, ()=>{printerAvailable=false} );
        console.log(printerAvailable);
        if(!printerAvailable){
            let alertNoPrinter = this.alertCtrl.create({
              title: 'No Printer',
              subTitle: 'A printer was not found on this device.',
              buttons: ['OK']
            });

            alertNoPrinter.present();
        } else {
            let options: PrintOptions = {
                name: 'Resume',
                grayscale: true
            };
            let alertErrorPrinter = this.alertCtrl.create({
                title: 'Error Printing',
                subTitle: 'Unknown error while printing.',
                buttons: ['OK']
            });

            //this.printer.print("http://localhost:8100/", options).then( ()=>{}, ()=>{ alertErrorPrinter.present() } );
        }
        */
       window.print();
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
