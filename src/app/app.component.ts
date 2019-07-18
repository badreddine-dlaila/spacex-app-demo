import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  selectedPath: string;
  text: any = {
    Year: 'Y',
    Month: 'M',
    Weeks: 'W',
    Days: 'D',
    Hours: 'H',
    Minutes: 'M',
    Seconds: 'S',
    MilliSeconds: 'MilliSeconds'
  };
  public pages = [
    {
      title: 'Launches',
      url: '/launches/next',
    },
    {
      title: 'Missions',
      url: '/missions',
    },
    {
      title: 'Rockets',
      url: '/rockets',
    },
    {
      title: 'Cores',
      url: '/cores',
    },
    {
      title: 'Pads',
      url: '/pads',
    },
    {
      title: 'History',
      url: '/history',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
