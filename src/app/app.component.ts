import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CodePage } from '../pages/code/code';
import { CodeProjectsPage } from '../pages/code-projects/code-projects';
import { ResumePage } from '../pages/resume/resume';
import { SciencePage } from '../pages/science/science';
import { DissertationPage } from '../pages/dissertation/dissertation';
import { PublicationsPage } from '../pages/publications/publications';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = HomePage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'Code', component: CodePage },
            { title: 'Projects', component: CodeProjectsPage },
            { title: 'Resume', component: ResumePage },
            { title: 'Science', component: SciencePage },
            { title: 'Dissertation', component: DissertationPage },
            { title: 'Publications', component: PublicationsPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.openPageBySearch();
        });
    }

    openPageBySearch(){
        for (let p of this.pages) {
            if (window.location.search === '?'+p.title) {
                this.nav.push(p.component);
                break;
            }
        }
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        for (let p of this.pages) {
            if (page === p.title) {
                this.nav.push(p.component);
                history.replaceState({}, 'p.title', window.location.origin+'/?'+p.title);
                break;
            }
        }
    }
}
