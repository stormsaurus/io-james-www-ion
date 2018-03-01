import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CodePage } from '../pages/code/code';
import { CodeProjectsPage } from '../pages/code-projects/code-projects';
import { CodeProjectsModalPage } from '../pages/code-projects/code-projects-modal';
import { ResumePage } from '../pages/resume/resume';
import { SciencePage } from '../pages/science/science';
import { DissertationPage } from '../pages/dissertation/dissertation';
import { PublicationsPage } from '../pages/publications/publications';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Printer } from '@ionic-native/printer';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        CodePage,
        CodeProjectsPage,
        CodeProjectsModalPage,
        ResumePage,
        SciencePage,
        DissertationPage,
        PublicationsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        CodePage,
        CodeProjectsPage,
        CodeProjectsModalPage,
        ResumePage,
        SciencePage,
        DissertationPage,
        PublicationsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
//        Printer,
        { provide: ErrorHandler, useClass: IonicErrorHandler }
    ]
})
export class AppModule { }
