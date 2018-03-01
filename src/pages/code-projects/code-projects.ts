import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides, ModalController } from 'ionic-angular';
import { CodeProjectsModalPage } from './code-projects-modal';

/**
 * Generated class for the CodeProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-code-projects',
  templateUrl: 'code-projects.html',
})
export class CodeProjectsPage {

    @ViewChild('fang') fangSlides:Slides;

    //id is a unique element id used for slider/ion-slides reference, alphanumeric only, no whitespace
    projects = [
        {id: 'sundesign',
            title: 'Solar Machine Learning',
            images: ['assets/imgs/solarstudio/iiquote.jpg',
                    'assets/imgs/solarstudio/classified-light.png',
                    'assets/imgs/solarstudio/classified-dark.png',
                    'assets/imgs/solarstudio/iquote.jpg',
                    'assets/imgs/solarstudio/classified-blue.png',
                    'assets/imgs/solarstudio/classified-sparse.png',
                    'assets/imgs/solarstudio/classified-dense.png'],
            interval: this.getRandomInterval(),
            summary:'Machine learning to support solar systems at city scale.',
            domain: 'machine learning, geospatial, terabyte datasets, lidar, image analysis, 3d modeling',
            tools: 'sparkml, weka, scipy, numpy, threejs, fugroviewer, lastools, arcgis, qgis, grass, geotools, javascript, html5',
            description: '<p>I helped create and managed a team that was responsible for creating an inexpensive automated parallelized machine learning pipeline capable of processing terabytes of data per hour.  The output was various needed datasets enabling Sungevities to move into new markets.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'jamesio',
            title: 'james.io',
            images: ['assets/imgs/jamesio/jamesio.png'],
            interval: 0,
            summary:'<p>Tropical paradise for my virtual collection of odds and ends.</p>',
            domain:'web applications, responsive',
            tools: 'typescript, angular, ionic',
            description: '<p>This web site you are at.  Its relatively simplicity makes it a good candidate to periodically rewrite/update using newer technologies in part for learning.  It has been through phases of existance as custom javascript, yui, jquery, angular, and now ionic.</p><p>It exercises several components of the ionic framework such as slides/swipper, grids/flex layout, and an assortment of basics like modal, chips, cards, etc.</p><p>Built into the ionic/angular framework is support for webpack, rxjs, systemjs, and others.</p><p>Ionic is primarily a mobile app framework contrary to current claims.  Certain website expected behaviors do not come for free.  For example, UI routing does not come without converting to a cordova app and you can not simply print a page from your browser.  I created custom solutions for those issues.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'fang',
            title: 'FANG',
            images: ['assets/imgs/fang/cydesign-studio-fang.png','assets/imgs/fang/ipad-ui-concept.png'],
            interval: this.getRandomInterval(),
            summary:'<p>DARPA project to model and simulate large electromechanical system designs like a rocket by parametric optimization.</p>',
            domain: 'requirements management, design space exploration, modeling, modelica simulation, trade space studies, parametric optimization, verification and certification',
            tools: 'javascript, html5, java, postgres, underscore, bootstrap, momentjs',
            description: '<p>DARPA had a crowd sourcing competition for a million dollars. I worked with one of the companies provided tooling for the competition, CyDesign Labs. And as a result they were aquired by ESI. As part of that effort I architected and generally guided best practice for the html5 client. I also designed the REST API services.</p><p>For a period of time I also did security auditing up and down the stack pre-operations.  I discovered and help patch several critical vulnerabilities.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'ereader',
            title: 'eReader',
            images: ['assets/imgs/ereader/book_selection.png','assets/imgs/ereader/startup.png','assets/imgs/ereader/login.png','assets/imgs/ereader/book_related.png','assets/imgs/ereader/book_reading.png'],
            interval: this.getRandomInterval(),
            summary:'<p>JavaOne 2009 showcased eReader for JavaFX language developed by request of Simon & Schuster and Sun Microsystems.</p>',
            domain: 'multi platform mobile/desktop/tv',
            tools: 'javafx, java',
            description: '<p>Sun Microsystems partnered with Simon & Schuster to prototype an ebook reader for Java One. It explored the capabilities of the javafx platform and the possibility of publishing media on a device independent platform. I developed this prototype starting two weeks before the conference, that included having to learn the language.  It was created using JavaFX and designed for desktop and mobile.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'jfxstyleeditor',
            title: 'Style Editor',
            images: ['assets/imgs/style_editor/style_editor.png'],
            interval: 0,
            summary:'<p>New CSS theming features for JavaFX applications.  Featured #1 on Oracle\'s developer network.</p>',
            domain: 'best practice, example code',
            tools: 'css, javafx',
            description: '<p>I was asked to develop a sample application that showcases the CSS features new to version 1.3. I created a style editor which lets the user select from pre-built themes for different devices such as mobile, TV, and desktop as well as edit them.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'golem',
            title: 'Golem',
            images: ['assets/imgs/golem/golem.jpg'],
            interval: 0,
            summary:'<p>Open source library for user authentication and registration.</p>',
            domain: 'user session management, registration, email verification',
            tools: 'java, openjpa, testng, apache commons, libs from apache geronimo',
            description: '<p>It manages login, logout, registration, email authentication, and session management.  It\'s in alpha.</p><p>I was prototyping a new project and was tired of reimplementing user login, yet again. I had been using Hibernate for awhile and decided I wanted to experiment with OpenJPA. I put together some code as a standalone JPA enabled library which implements the basic user login and session management functions.  Of course the need for something like this has been greatly reduced given the rising popularity of OAuth.</p><p>It is not for CAPTCHA or permissions. Verifying that a new user is human can be done using the built in email verification or you can implement a CAPTCHA test prior to calling the registration function. Permission should be handled by your application separately using the unique returned keys or user names.</p>',
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'jfxscenebuilder',
            title: 'JFX Scene Builder',
            images: ['assets/imgs/scene_builder/scene_builder_4.png','assets/imgs/scene_builder/scene_builder_2.png','assets/imgs/scene_builder/scene_builder_3.png'],
            interval: this.getRandomInterval(),
            summary:'<p>Better performance for large JavaFX scene graphs.</p>',
            domain: 'scene graph, performance',
            tools : 'javafx',
            description: `<p>One performance problem of javafx was discovered realitivly early on; large scene graphs cause slow startups.  And javafx tends to have most nodes in the scene pre-defined at instantiation.  A solution was to defer object creation and place it in a separate process so your UI could launch quickly.</p><p>The main file demonstrates how you can instantiate over 62000 nodes but still have quick rendering of the application. It adds a custom SceneBuilder and SceneWorker object to acheive this. There is also a preliminary version of a modal dialog.</p><p>Once I started creating large scene graphs in javafx I needed an easier way to manage scene graph instantiation. This is because large scene graphs can cause the program to appear to be unresponsive at startup. This generally occurs when the scene definition is all in one statement. The solution is to instantiate parts of the scene graph at a time. This requires breaking the definition up into different blocks and defering the creation of the next block until the previous block and it\'s peer objects have been rendered. There is no built in mechanism do this.</p>`,
            codeExample:`<p>SceneBuilder relies on recursively calling FX.deferAction() to instantiate groups of Nodes. Groups of nodes are wrapped in SceneWorkers and they are added to the SceneBuilder. The SceneWorker objects have an init function and a target to insert the nodes into. You can either have SceneBuilder append groups of nodes or you can specify a target container.</p><div class="code"><pre>
Stage{
    scene = Scene{
        content: [ visuals ]
    }
}

SceneBuilder{
    scene: scene
    nodes: [
        SceneWorker{
            init: function(){
		        [ \/*nodes for item 1*\/ ]
            }
        },
        SceneWorker{
            init: function(){
		        [ \/*nodes for item 2*\/ ]
            }
        }
    ]
}.start();
</div></span><p><span class="code">javafx -cp SceneBuilder.jar scenebuilder.Main</span></p><p><span class="code">java -jar SceneBuilder.jar</span>(alternate if javafx is on your classpath)</p>`,
            git:'',
            download:{}
        },
        {id: 'imageprocessor',
            title: 'Image Processor',
            images: ['assets/imgs/image_processor/image001.png','assets/imgs/image_processor/image002.png','assets/imgs/image_processor/image003.png','assets/imgs/image_processor/image004.png'],
            interval: this.getRandomInterval(),
            summary:'<p>Image and signal processor including a specialized implementation of the Legendre-Fenchel transform.</p>',
            domain: 'image transforms, circa year 2000',
            tools: 'java, fortran',
            description: 'This is one of my first useful but quite dated Java programs prior to professionally coding.  It was developed to support research into two dimensional monolayer domain growth. It\'s a port of several routines previously written in Fortran with some new functions and a UI put on top and batch processing added.',
            codeExample:'<p><span class="code">java -jar IP_3_0_2a.jar</span></p>',
            git:'',
            download:{name:'IP_3_0_2a.jar', href:'assets/files/IP_3_0_2a.jar'}
        },
        {id: 'catalyst',
            title: 'Catalyst',
            images: ['assets/imgs/catalyst/WatcherEditor.png','assets/imgs/catalyst/WatcherMain.png'],
            interval: this.getRandomInterval(),
            summary:'<p>External Gaming Chat Relay</p>',
            domain: 'user registration, email verification',
            tools: 'java, jabsorb, apache commons, jpa via openjpa, pirc, apache tomcat, mysql, jnlp launcher',
            description: `<p>For fun I wrote a partial program for communicating with people while not logged into a game provided they also had the program. The idea is to parse chat logs and relay it to an IRC or SMS server. An IRC bot would sit in the channel and relay back to a network of game clients through a mod. Duplicate messages and unauthorized traffic would be filtered on the server. This two way communication would let you participate in chat from outside the game from protocols and devices like IRC, IM, email, SMS, even your cell phone.</p><p>Can be used for other log file operations such of combat stats, player locations, and interclient communication if custom channels can be created.</p><p>This required an in game mod, a local JNLP swing client for parsing called the Watcher, a server for sending and receiving the messages called Carousel, as well a specialized IRC bot. Unfortunately the most easily modded game at the time (World of Warcraft) is designed such that real time logging would violating the EULA. I wanted real time chat.  The are other potential uses, for example it could just as easily parse combat logs.</p><p>The local jnlp application. Launchs from a web page and normally sits in the system tray.</p><p>Project has been retired.</p>`,
            codeExample:'',
            git:'',
            download:{}
        },
        {id: 'jamesio-util',
            title: 'util.james.io',
            images: [''],
            interval: this.getRandomInterval(),
            summary:'<p>Collection of utilities.</p>',
            domain: 'misc, circa year 2008',
            tools: 'java, mail api, syndication api,',
            description: `<p>A couple random utilities mostly used by old versions of this website.</p><p>Mailer - A simple mailer that allows web forms on a website to send emails through a server.  It throttles total traffic by hour and day.</p><p>Klepto - A syndication feed reader that makes the feed available to javascript from a server.  Was used in a previous life to create a news feed reader.</p>`,
            codeExample:'',
            git:'git',
            download:{}
        }

    ]

    constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CodeProjectsPage');
    }

    getRandomInterval(){
        return Math.floor(4000 + (Math.random()*5000));
    }

    openDetails(index){
        let modal = this.modalCtrl.create(CodeProjectsModalPage, this.projects[index]);
        modal.present();
    }

}
