import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/about.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  aboutService$: Observable<About>;

  constructor( 
    private location: Location,
    private aboutService: AboutService,
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.aboutService$ = this.aboutService.getAboutInformation();
  }

  goBack() {
    this.location.back();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
