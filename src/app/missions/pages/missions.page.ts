import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {Observable} from 'rxjs';
import { Mission } from '../models/mission.model';
import { MissionsService } from '../services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  missionId = 'F3364BF';
  randomNumber$ = 0;
  missions$: Observable<Mission[]>;

  constructor(private inAppBrowser: InAppBrowser, private missionService: MissionsService) { }

  ngOnInit() {
    this.randomNumber$ = this.getRandomIntInclusive(0, 2);
    this.missions$ = this.missionService.getAllMissions();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }

  getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }
}
