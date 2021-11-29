import { Component } from '@angular/core';
// carga de push
import { PushService } from './services/push.service';
import { Platform } from '@ionic/angular';
// crud
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private Platform: Platform,
    // cargar 
    private PushService:PushService,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp(){
  this.Platform.ready().then(()=>{
    //push
  this.PushService.configuracionInicial();
  // crud
  this.statusBar.styleDefault();
  this.splashScreen.hide();

  });
   
  }
}
