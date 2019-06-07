import { DetailsPage } from './../details/details.page';
import { LaunchService } from './../services/launch.service';
import { Observable } from 'rxjs';
import { Launch } from './../Models/launch.model';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-launch',
  templateUrl: './launch.page.html',
  styleUrls: ['./launch.page.scss'],
})
export class LaunchPage implements OnInit {
  launches: Launch[];
  oneLaunch: Launch;
  observableLaunches: Observable<Launch[]>;

  constructor(private launchService: LaunchService, public navCtrl: NavController) { }

  private getLaunchId(): string {
    return window.location.pathname.split("/").pop();
  }

  ngOnInit() {
    this.launchService.getLaunches().subscribe(result => {
      this.launches = result;
    });

    const launchId = this.getLaunchId();
    console.log(launchId);

    setTimeout(() => {
      this.observableLaunches = this.launchService.getLaunches();
    }, 2000);
  }

  buttonClick(launchId: string) {
    //console.log(launchId);
    this.launchService.getOneLaunch(launchId).subscribe(result => {
      this.oneLaunch = result;
    });
  }
}
